"use server";

import { createClient } from "@/utils/supabase/server";

export const FindDestacadosAction = async () => {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("zapatillas")
      .select("*")
      .limit(8)
      
    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
