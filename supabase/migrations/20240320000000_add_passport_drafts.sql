-- Add draft support to passport applications
CREATE TABLE IF NOT EXISTS passport_applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    application_number TEXT UNIQUE,
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'pending', 'processing', 'approved', 'rejected', 'completed')),
    form_data JSONB DEFAULT '{}'::jsonb,
    completion_percentage INTEGER DEFAULT 0,
    last_saved_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    submitted_at TIMESTAMPTZ,
    type TEXT DEFAULT 'new' CHECK (type IN ('new', 'renewal')),
    first_name TEXT,
    last_name TEXT,
    appointment_date TIMESTAMPTZ
);

-- Add RLS policies
ALTER TABLE passport_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own applications"
    ON passport_applications
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own applications"
    ON passport_applications
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own applications"
    ON passport_applications
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Add function to generate application number
CREATE OR REPLACE FUNCTION generate_application_number()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.application_number IS NULL THEN
        NEW.application_number := 'PP-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || 
                                LPAD(CAST(FLOOR(RANDOM() * 10000) AS TEXT), 4, '0');
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for application number generation
CREATE TRIGGER set_application_number
    BEFORE INSERT ON passport_applications
    FOR EACH ROW
    EXECUTE FUNCTION generate_application_number();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updating timestamps
CREATE TRIGGER update_passport_applications_updated_at
    BEFORE UPDATE ON passport_applications
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create index for faster queries
CREATE INDEX idx_passport_applications_user_id ON passport_applications(user_id);
CREATE INDEX idx_passport_applications_status ON passport_applications(status);
CREATE INDEX idx_passport_applications_created_at ON passport_applications(created_at);

-- Add function to calculate completion percentage
CREATE OR REPLACE FUNCTION calculate_completion_percentage(form_data JSONB)
RETURNS INTEGER AS $$
DECLARE
    total_fields INTEGER;
    filled_fields INTEGER;
BEGIN
    -- Define the total number of required fields
    total_fields := 20; -- Adjust this number based on your form fields
    
    -- Count non-null fields in the form_data
    filled_fields := (
        SELECT COUNT(*)
        FROM jsonb_each_text(form_data)
        WHERE value IS NOT NULL AND value != ''
    );
    
    -- Calculate percentage
    RETURN LEAST(100, (filled_fields * 100 / total_fields));
END;
$$ LANGUAGE plpgsql; 