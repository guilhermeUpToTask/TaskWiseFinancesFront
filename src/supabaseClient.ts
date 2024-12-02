import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL='https://bdgxxmhrehgrmnikgbvw.supabase.co'
const SUPABASE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkZ3h4bWhyZWhncm1uaWtnYnZ3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTI1MzQ0NiwiZXhwIjoyMDQ2ODI5NDQ2fQ.Ii2rzHwQtLgL87U5QioQ686PANZMvULQUMLwv3rXOEg'

const supabase = createClient(SUPABASE_URL,SUPABASE_KEY)
export default supabase