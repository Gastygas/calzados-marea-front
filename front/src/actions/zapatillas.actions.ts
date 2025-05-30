"use server";

import { IZapatilla } from "@/helpers/interfaces";
import { createClient } from "@/utils/supabase/server";

export const FindAllZapatillasAction = async (): Promise<
  IZapatilla[] | null
> => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("zapatillas")
      .select("*")
      .select();
    if (error) throw error;

    return data;
  } catch (error) {
    console.log("❌ Error en Supabase:", error);
    return null;
  }
};

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
export const FindSpecificsAction = async (
  type: string
): Promise<IZapatilla[] | null> => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("zapatillas")
      .select("*")
      .eq(type, true)
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
    if (search === "hombre" || search === "mujer") {
      const { data, error } = await supabase
        .from("zapatillas")
        .select("*")
        .eq("genero", search)
        .select();

      return data;
    }
    if (search === "niña" || search === "niño" || search === "niños" || search === "niñas") {
      const { data, error } = await supabase
        .from("zapatillas")
        .select("*")
        .in("genero", ["niña", "niño"])
        .select();

      return data;
    }

    if (search === "nuevo" || search === "oferta" || search === "destacado") {
      const { data, error } = await supabase
        .from("zapatillas")
        .select("*")
        .eq(search, true)
        .select();

      return data;
    }

    if (search === "nike" || search === "adidas" || search === "new balance") {
      const { data, error } = await supabase
        .from("zapatillas")
        .select("*")
        .eq("marca", search)
        .select();

      return data;
    }
    if (search === "todo") {
      const { data, error } = await supabase
        .from("zapatillas")
        .select("*")
        .select();

      return data;
    }

    const { data, error } = await supabase
      .from("zapatillas")
      .select("*")
      .select();
    if (error) throw error;

    const dataFiltrada = data.filter((d: IZapatilla) =>
      d.nombre.includes(search)
    );
    if (dataFiltrada.length === 0) return null;
    return dataFiltrada;
  } catch (error) {
    console.log("❌ Error en Supabase:", error);
    return null;
  }
};

// export const newStockZapatillaAction = async (
//   id: string,
//   newStock: string,
//   talles: string[]
// ): Promise<null | true> => {
//   try {
//     console.log("🔧 Intentando actualizar:", { id, newStock });
//     const supabase = await createClient();
//     const { data, error } = await supabase
//       .from("zapatillas")
//       .update({ stock: newStock, talle: talles }) // como string
//       .eq("id", id)
//       .select();

//     if (error) throw error;

//     console.log("✅ Stock actualizado:", data[0]);
//     return true;
//   } catch (error) {
//     console.log("❌ Error en Supabase:", error);
//     return null;
//   }
// };
