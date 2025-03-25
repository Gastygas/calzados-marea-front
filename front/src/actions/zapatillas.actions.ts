"use server";

import { IZapatilla } from "@/helpers/interfaces";
import { createClient } from "@/utils/supabase/server";

export const FindDestacadosAction = async ():Promise<IZapatilla[] | null>  => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase.from("zapatillas").select("*");
    if (error) throw error;

    return data;
  } catch (error) {
    console.log("❌ Error en Supabase:", error);
    return null;
  }
};

export const FindOneByNameAction = async (nombre: string):Promise<IZapatilla | null> => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("zapatillas")
      .select("*")
      .eq("nombre", nombre)
      .select();
    if (error) throw error;
    return data[0];
  } catch (error) {
    console.log("❌ Error en Supabase:", error);
    return null;
  }
};
