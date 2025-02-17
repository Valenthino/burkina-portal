-- Add username field to profiles table
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS username TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS first_name TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS last_name TEXT;

-- Remove the full_name column as we now have first_name and last_name
ALTER TABLE profiles DROP COLUMN IF EXISTS full_name;

-- Add a unique constraint on username
ALTER TABLE profiles ADD CONSTRAINT profiles_username_unique UNIQUE (username);

-- Create an index for faster username lookups
CREATE INDEX IF NOT EXISTS profiles_username_idx ON profiles (username);

-- Update the RLS policies to include username
ALTER POLICY "Public profiles are viewable by everyone." ON public.profiles
    USING (true);

ALTER POLICY "Users can insert their own profile." ON public.profiles
    WITH CHECK (auth.uid() = id);

ALTER POLICY "Users can update own profile." ON public.profiles
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id); 