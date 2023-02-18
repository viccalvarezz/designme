import { createServices } from "@/services";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useMemo } from "react";

export const useServices = () => {
  const supabase = useSupabaseClient();

  return useMemo(() => {
    return createServices({ supabase });
  }, [supabase]);
};
