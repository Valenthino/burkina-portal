-- Add ordre column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_name = 'missions_ministere' 
        AND column_name = 'ordre'
    ) THEN
        ALTER TABLE missions_ministere ADD COLUMN ordre INTEGER DEFAULT 0;
    END IF;
END $$; 