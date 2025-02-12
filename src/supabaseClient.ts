import { createClient } from '@supabase/supabase-js';


const supabase = createClient('https://bdgxxmhrehgrmnikgbvw.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkZ3h4bWhyZWhncm1uaWtnYnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyNTM0NDYsImV4cCI6MjA0NjgyOTQ0Nn0.C5dH6N2XjQm9ADDv_lb9dfrUa_hQFUSOL_dBnH2F2to');

export default supabase