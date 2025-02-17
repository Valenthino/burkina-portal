-- Create actualites table
CREATE TABLE actualites (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    titre TEXT NOT NULL,
    contenu TEXT NOT NULL,
    date_publication TIMESTAMP WITH TIME ZONE NOT NULL,
    image_url TEXT,
    source_url TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on date_publication
CREATE INDEX actualites_date_publication_idx ON actualites(date_publication DESC);

-- Create function to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_actualites_updated_at
    BEFORE UPDATE ON actualites
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 