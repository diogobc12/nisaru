import { createClient } from '@supabase/supabase-js';
import { useMemo } from 'react';

export function useSupabase() {
  const supabase = useMemo(() => {
    // Try to get environment variables, or use placeholder values if not available
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';
    
    // Create a client even with placeholder values - this will prevent errors
    // but Supabase functions won't work without real credentials
    return createClient(supabaseUrl, supabaseAnonKey);
  }, []);

  return { supabase };
}