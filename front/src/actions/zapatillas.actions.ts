"use server";

import { IZapatilla } from "@/helpers/interfaces";
import { createClient } from "@/utils/supabase/server";

export const FindDestacadosAction = async (): Promise<IZapatilla[] | null> => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("zapatillas")
      .select("*")
      .eq("destacado", true)
      .select();
    if (error) throw error;

    return data;
  } catch (error) {
    console.log("❌ Error en Supabase:", error);
    return null;
  }
};

export const FindNuevosAction = async (): Promise<IZapatilla[] | null> => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("zapatillas")
      .select("*")
      .eq("nuevo", true)
      .select();
    if (error) throw error;
    return data;
  } catch (error) {
    console.log("❌ Error en Supabase:", error);
    return null;
  }
};

export const FindOneByNameAction = async (
  nombre: string
): Promise<IZapatilla | null> => {
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

export const FindSearchAction = async (
  search: string
): Promise<IZapatilla[] | null> => {
  try {
    const supabase = await createClient();
    if(
      search === "hombre" || search === "mujer" || search === "nino"
    ){
      const { data, error } = await supabase
      .from("zapatillas")
      .select("*")
      .eq("genero", search)
      .select();

      return data;
    }

    if(
      search === "nike" || search === "adidas" || search === "new balance"
    ){
      const { data, error } = await supabase
      .from("zapatillas")
      .select("*")
      .eq("marca", search)
      .select();

      return data;
    }

    const { data, error } = await supabase
      .from("zapatillas")
      .select("*")
      .select();
    if (error) throw error;
    
    const dataFiltrada = data.filter((d:IZapatilla) => d.nombre.includes(search))
    if(dataFiltrada.length === 0) return null
    return dataFiltrada
  } catch (error) {
    console.log("❌ Error en Supabase:", error);
    return null;
  }
};
