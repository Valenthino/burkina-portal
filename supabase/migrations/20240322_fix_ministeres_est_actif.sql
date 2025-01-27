-- Add est_actif column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_name = 'ministeres' 
        AND column_name = 'est_actif'
    ) THEN
        ALTER TABLE ministeres ADD COLUMN est_actif BOOLEAN DEFAULT true;
    END IF;
END $$;

-- Update existing records to set est_actif to true if null
UPDATE ministeres SET est_actif = true WHERE est_actif IS NULL; 