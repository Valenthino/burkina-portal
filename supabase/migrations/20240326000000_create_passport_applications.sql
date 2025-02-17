-- Create passport_applications table
CREATE TABLE IF NOT EXISTS public.passport_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    application_id TEXT UNIQUE,
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'pending', 'processing', 'approved', 'rejected', 'completed')),
    type TEXT DEFAULT 'ordinaire' CHECK (type IN ('ordinaire', 'service', 'diplomatique')),
    first_name TEXT,
    last_name TEXT,
    birth_date TEXT,
    birth_place TEXT,
    nationality TEXT,
    gender TEXT CHECK (gender IN ('M', 'F')),
    profession TEXT,
    address TEXT,
    phone TEXT,
    email TEXT,
    father_name TEXT,
    mother_name TEXT,
    emergency_contact TEXT,
    height TEXT,
    eye_color TEXT,
    marital_status TEXT CHECK (marital_status IN ('single', 'married', 'divorced', 'widowed')),
    photo_url TEXT,
    signature_url TEXT,
    form_data JSONB DEFAULT '{}'::jsonb,
    completion_percentage INTEGER DEFAULT 0,
    last_saved_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    submitted_at TIMESTAMPTZ,
    appointment_date TIMESTAMPTZ
);

-- Enable Row Level Security
ALTER TABLE public.passport_applications ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own applications"
    ON public.passport_applications
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own applications"
    ON public.passport_applications
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own applications"
    ON public.passport_applications
    FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own draft applications"
    ON public.passport_applications
    FOR DELETE
    USING (auth.uid() = user_id AND status = 'draft');

-- Create function to generate application number
CREATE OR REPLACE FUNCTION generate_passport_application_number()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.application_id IS NULL THEN
        NEW.application_id := 'PASS-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || 
                                LPAD(CAST(FLOOR(RANDOM() * 10000) AS TEXT), 4, '0');
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for application number generation
CREATE TRIGGER set_passport_application_number
    BEFORE INSERT ON public.passport_applications
    FOR EACH ROW
    EXECUTE FUNCTION generate_passport_application_number();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION update_passport_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updating timestamps
CREATE TRIGGER update_passport_applications_timestamp
    BEFORE UPDATE ON public.passport_applications
    FOR EACH ROW
    EXECUTE FUNCTION update_passport_updated_at();

-- Create indexes for better performance
CREATE INDEX idx_passport_applications_user_id ON public.passport_applications(user_id);
CREATE INDEX idx_passport_applications_status ON public.passport_applications(status);
CREATE INDEX idx_passport_applications_created_at ON public.passport_applications(created_at);
CREATE INDEX idx_passport_applications_application_id ON public.passport_applications(application_id); 