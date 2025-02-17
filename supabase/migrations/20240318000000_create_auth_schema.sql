-- Enable the necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Update RLS policies for auth.users
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create a table for CNIB applications with proper RLS
CREATE TABLE IF NOT EXISTS public.cnib_applications (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    application_id TEXT UNIQUE NOT NULL,
    status TEXT NOT NULL DEFAULT 'draft',
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    mother_name TEXT NOT NULL,
    father_name TEXT NOT NULL,
    birth_date DATE NOT NULL,
    birth_place TEXT NOT NULL,
    nationality TEXT NOT NULL,
    profession TEXT NOT NULL,
    address TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    gender TEXT NOT NULL
);

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own applications" ON public.cnib_applications;
DROP POLICY IF EXISTS "Users can create their own applications" ON public.cnib_applications;
DROP POLICY IF EXISTS "Users can update their own applications" ON public.cnib_applications;

-- Enable RLS on cnib_applications
ALTER TABLE public.cnib_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for cnib_applications
CREATE POLICY "Users can view their own applications"
    ON public.cnib_applications
    FOR SELECT
    USING (auth.uid()::uuid = user_id);

CREATE POLICY "Users can create their own applications"
    ON public.cnib_applications
    FOR INSERT
    WITH CHECK (auth.uid()::uuid = user_id);

CREATE POLICY "Users can update their own applications"
    ON public.cnib_applications
    FOR UPDATE
    USING (auth.uid()::uuid = user_id);

-- Create a function to automatically update updated_at
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update updated_at
DROP TRIGGER IF EXISTS set_updated_at ON public.cnib_applications;
CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.cnib_applications
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at();

-- Create an index on user_id for better performance
CREATE INDEX IF NOT EXISTS idx_cnib_applications_user_id ON public.cnib_applications(user_id);

-- Create an index on application_id for better performance
CREATE INDEX IF NOT EXISTS idx_cnib_applications_application_id ON public.cnib_applications(application_id); 