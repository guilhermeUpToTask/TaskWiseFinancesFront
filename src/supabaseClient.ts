import { createClient } from '@supabase/supabase-js';


const supabase = createClient('https://gzpnfuguzryyfflpfiug.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cG5mdWd1enJ5eWZmbHBmaXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyMTQ3OTAsImV4cCI6MjAwNDc5MDc5MH0.uiptMXoQcZxgwZfp10_YZQG72JS-6u-71o2rS8q67oM');

export default supabase