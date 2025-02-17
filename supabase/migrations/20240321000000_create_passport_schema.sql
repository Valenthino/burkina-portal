-- Create passport_applications table
CREATE TABLE IF NOT EXISTS public.passport_applications (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
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

-- Enable RLS
ALTER TABLE public.passport_applications ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own applications" ON public.passport_applications;
DROP POLICY IF EXISTS "Users can create their own applications" ON public.passport_applications;
DROP POLICY IF EXISTS "Users can update their own applications" ON public.passport_applications;

-- Create policies
CREATE POLICY "Users can view their own applications"
    ON public.passport_applications
    FOR SELECT
    USING (auth.uid()::uuid = user_id);

CREATE POLICY "Users can create their own applications"
    ON public.passport_applications
    FOR INSERT
    WITH CHECK (auth.uid()::uuid = user_id);

CREATE POLICY "Users can update their own applications"
    ON public.passport_applications
    FOR UPDATE
    USING (auth.uid()::uuid = user_id);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_passport_applications_user_id ON public.passport_applications(user_id);
CREATE INDEX IF NOT EXISTS idx_passport_applications_application_number ON public.passport_applications(application_number);
CREATE INDEX IF NOT EXISTS idx_passport_applications_status ON public.passport_applications(status);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.set_updated_at_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS set_passport_applications_updated_at ON public.passport_applications;
CREATE TRIGGER set_passport_applications_updated_at
    BEFORE UPDATE ON public.passport_applications
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at_timestamp(); 