"use server";

import { createClient } from "@/utils/supabase/server";

export const FindDestacadosAction = async () => {
  try {
    const supabase = await createClient();

    console.log("🔵 Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log("🟢 Supabase Anon Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data, error } = await supabase
      .from("zapatillas")
      .select("*")
      
      console.log("✅ Data obtenida:", data);
      return data;
    } catch (error) {
      console.log("❌ Error en Supabase:", error);
      return null;
    }
};
