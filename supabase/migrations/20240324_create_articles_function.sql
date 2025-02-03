-- Create the function to create the articles table
CREATE OR REPLACE FUNCTION create_articles_table()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Create the articles table if it doesn't exist
    CREATE TABLE IF NOT EXISTS articles (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        image_url TEXT,
        source_url TEXT NOT NULL,
        published_at TIMESTAMP WITH TIME ZONE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );

    -- Create indexes if they don't exist
    CREATE INDEX IF NOT EXISTS articles_published_at_idx ON articles(published_at DESC);
    CREATE UNIQUE INDEX IF NOT EXISTS articles_source_url_idx ON articles(source_url);
END;
$$; 