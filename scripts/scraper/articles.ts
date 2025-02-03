import puppeteer from 'puppeteer';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from root .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing required environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface Article {
  title: string;
  content: string;
  image_url: string | null;
  source_url: string;
  published_at: string;
}

function normalizeImageUrl(url: string | null): string | null {
  if (!url) return null;
  if (url.startsWith('data:')) return null;
  
  try {
    const imageUrl = new URL(url.startsWith('//') ? `https:${url}` : url);
    
    // Ensure protocol is https
    imageUrl.protocol = 'https:';
    
    // If it's a relative URL, make it absolute
    if (!url.startsWith('http') && !url.startsWith('//')) {
      return `https://www.presidencedufaso.bf${url.startsWith('/') ? '' : '/'}${url}`;
    }
    
    // Remove any query parameters that might cause issues
    imageUrl.search = '';
    return imageUrl.toString();
  } catch {
    // If URL parsing fails, try to make it absolute if it's relative
    if (url.startsWith('/')) {
      return `https://www.presidencedufaso.bf${url}`;
    }
    return null;
  }
}

function normalizeSourceUrl(url: string): string {
  if (!url) return '';
  
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  
  if (!url.startsWith('http')) {
    return `https://www.presidencedufaso.bf${url.startsWith('/') ? '' : '/'}${url}`;
  }
  
  return url;
}

async function checkTableExists() {
  const { error } = await supabase
    .from('articles')
    .select('count')
    .limit(1);

  if (error) {
    console.error('Error checking table:', error);
    return false;
  }
  return true;
}

async function scrapeArticles(): Promise<Article[]> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    // Don't block images anymore since we need them
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (['stylesheet', 'font'].includes(request.resourceType())) {
        request.abort();
      } else {
        request.continue();
      }
    });

    console.log('Navigating to the presidency website...');
    await page.goto('https://www.presidencedufaso.bf/actualites/', {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    // Wait for images to load
    await page.waitForSelector('article.post img', { timeout: 5000 }).catch(() => console.log('No images found initially'));

    console.log('Extracting articles...');
    const articles = await page.evaluate(() => {
      const articleElements = document.querySelectorAll('article.post');
      console.log(`Found ${articleElements.length} articles`);
      
      return Array.from(articleElements).map((article) => {
        const titleElement = article.querySelector('.entry-title a');
        const imageElement = article.querySelector('.entry-content img, .post-thumbnail img, img.wp-post-image');
        const dateElement = article.querySelector('.entry-date, .published');
        const excerptElement = article.querySelector('.entry-content, .entry-summary, .post-excerpt');

        // Get all possible image URLs and their sources
        const imageSources = [
          imageElement?.getAttribute('data-lazy-src'),
          imageElement?.getAttribute('data-src'),
          imageElement?.getAttribute('src'),
          imageElement?.getAttribute('srcset')?.split(',')[0]?.split(' ')[0],
          article.querySelector('img')?.getAttribute('src'),
          article.querySelector('img')?.getAttribute('data-src'),
          article.querySelector('.wp-post-image')?.getAttribute('src'),
        ].filter(Boolean);

        // Find first valid image URL
        const imageUrl = imageSources.find(url => {
          if (!url) return false;
          if (url.startsWith('data:')) return false;
          if (url.includes('placeholder')) return false;
          if (url.includes('default')) return false;
          return true;
        }) || null;

        return {
          title: titleElement?.textContent?.trim() || '',
          content: excerptElement?.textContent?.trim() || '',
          image_url: imageUrl,
          source_url: titleElement?.getAttribute('href') || '',
          published_at: dateElement?.getAttribute('datetime') || new Date().toISOString(),
        };
      });
    });

    // Additional validation of image URLs
    const validArticles = articles
      .filter(article => article.title && article.source_url)
      .map(article => {
        let finalImageUrl = null;
        if (article.image_url) {
          try {
            const url = new URL(article.image_url.startsWith('//') ? `https:${article.image_url}` : article.image_url);
            url.protocol = 'https:';
            if (!url.pathname.match(/\.(svg|gif)$/i)) { // Exclude SVG and GIF
              finalImageUrl = url.toString();
            }
          } catch {
            if (article.image_url.startsWith('/')) {
              finalImageUrl = `https://www.presidencedufaso.bf${article.image_url}`;
            }
          }
        }

        return {
          title: article.title,
          content: article.content,
          image_url: finalImageUrl,
          source_url: normalizeSourceUrl(article.source_url),
          published_at: article.published_at,
        };
      });

    console.log(`Found ${validArticles.length} valid articles`);
    return validArticles;
  } catch (error) {
    console.error('Error scraping articles:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

async function saveArticles(articles: Article[]) {
  console.log('Saving articles to database...');
  const results = {
    success: 0,
    failed: 0,
  };

  for (const article of articles) {
    try {
      const { error } = await supabase
        .from('articles')
        .upsert(
          {
            title: article.title,
            content: article.content,
            image_url: article.image_url,
            source_url: article.source_url,
            published_at: article.published_at,
          },
          {
            onConflict: 'source_url',
          }
        );

      if (error) {
        console.error('Error saving article:', error);
        console.error('Article data:', article);
        results.failed++;
      } else {
        console.log(`Successfully saved article: ${article.title}`);
        results.success++;
      }
    } catch (error) {
      console.error('Unexpected error saving article:', error);
      console.error('Article data:', article);
      results.failed++;
    }
  }

  return results;
}

async function main() {
  try {
    console.log('Starting article scraper...');
    const tableExists = await checkTableExists();
    if (!tableExists) {
      console.error('Articles table does not exist or cannot be accessed.');
      process.exit(1);
    }

    console.log('Table exists, proceeding with scraping...');
    const articles = await scrapeArticles();
    const results = await saveArticles(articles);
    
    console.log('Scraping completed:');
    console.log(`- Total articles found: ${articles.length}`);
    console.log(`- Successfully saved: ${results.success}`);
    console.log(`- Failed to save: ${results.failed}`);
  } catch (error) {
    console.error('Error in main process:', error);
    process.exit(1);
  }
}

main(); 