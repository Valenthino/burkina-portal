import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

const supabaseUrl = 'https://agxtgjnwcfacuisflbft.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFneHRnam53Y2ZhY3Vpc2ZsYmZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0MjQ0OTAsImV4cCI6MjA1MzAwMDQ5MH0.X-AlwNy7m13iCE0Rm5vqdcsx9wtzOKwx5mAYZfiUBXc'

export const supabase = createClient<Database>(supabaseUrl, supabaseKey) 