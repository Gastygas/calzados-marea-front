import { ILoginData, IZapatilla } from "@/helpers/interfaces";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const LogInAction = async (data:ILoginData ) => {
  try {
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email: data.user,
      password: data.password,
    });

    if (error) throw error;

    return {
      success: true,
      user: authData.user,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Error al iniciar sesión",
    };
  }
};

export const EditarZapatillaAction = async (data:IZapatilla) => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    console.error("Usuario no autenticado.");
    return { success: false, message: "Usuario no autenticado." };
  }

  // Actualizamos la zapatilla por su ID
  const { error, data: updatedZapatilla } = await supabase
    .from('zapatillas')
    .update({
      nombre: data.nombre,
      precio: data.precio,
      marca: data.marca,
      talle: data.talle,
      color: data.color,
      material: data.material,
      destacado: data.destacado,
      nuevo: data.nuevo,
      fotos: data.fotos,
      genero: data.genero,
      stock: data.stock,
    })
    .eq('id', data.id)
    .select();

  if (error) {
    console.error("Error al actualizar zapatilla:", error.message);
    return { success: false, message: error.message };
  }

  return { success: true, zapatilla: updatedZapatilla };
};