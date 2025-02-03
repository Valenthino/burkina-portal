import os
import json
from datetime import datetime
from typing import Dict, Any
import requests
from bs4 import BeautifulSoup
from slugify import slugify
from dotenv import load_dotenv
from supabase import create_client, Client

# Load environment variables
load_dotenv()

# Initialize Supabase client
supabase: Client = create_client(
    os.getenv('NEXT_PUBLIC_SUPABASE_URL', ''),
    os.getenv('NEXT_PUBLIC_SUPABASE_ANON_KEY', '')
)

class PresidenceScraper:
    BASE_URL = "https://www.presidencedufaso.bf"
    ACTUALITES_URL = f"{BASE_URL}/actualites/"

    def __init__(self):
        self.session = requests.Session()

    def parse_date(self, date_str: str) -> datetime:
        """Parse date from the website format."""
        try:
            return datetime.strptime(date_str.strip(), "%d %B %Y")
        except ValueError:
            return datetime.now()

    def clean_text(self, text: str) -> str:
        """Clean text content."""
        return text.strip().replace('\n', ' ').replace('\t', ' ')

    def get_article_content(self, url: str) -> Dict[str, Any]:
        """Scrape individual article content."""
        response = self.session.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Get main content
        article = soup.find('article')
        if not article:
            return None

        title = article.find('h1').text.strip() if article.find('h1') else ''
        date_element = article.find('time')
        date_str = date_element.text.strip() if date_element else ''
        
        # Get main image
        image = article.find('img')
        image_url = image['src'] if image and 'src' in image.attrs else None
        if image_url and not image_url.startswith('http'):
            image_url = self.BASE_URL + image_url

        # Get content
        content_div = article.find('div', class_='entry-content')
        content = self.clean_text(content_div.get_text()) if content_div else ''

        return {
            'titre': title,
            'date_publication': self.parse_date(date_str),
            'contenu': content,
            'image_url': image_url,
            'source_url': url,
            'slug': slugify(title)
        }

    def scrape_actualites(self):
        """Main scraping function."""
        response = self.session.get(self.ACTUALITES_URL)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        articles = soup.find_all('article')
        
        for article in articles:
            link = article.find('a')
            if not link:
                continue

            url = link['href']
            if not url.startswith('http'):
                url = self.BASE_URL + url

            # Check if article already exists
            article_data = self.get_article_content(url)
            if not article_data:
                continue

            # Check if article already exists in database
            existing = supabase.table('actualites').select('*').eq('slug', article_data['slug']).execute()
            
            if not existing.data:
                # Insert new article
                supabase.table('actualites').insert(article_data).execute()

if __name__ == "__main__":
    scraper = PresidenceScraper()
    scraper.scrape_actualites() 