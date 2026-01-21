import { ILoginData, IZapatilla } from "@/helpers/interfaces";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const LogInAction = async (data: ILoginData) => {
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

export const EditarZapatillaAction = async (data: IZapatilla) => {
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
    .from("zapatillas")
    .update({
      nombre: data.nombre,
      precioMenor: data.precioMenor,
      precioMayor: data.precioMayor,
      marca: data.marca,
      talle: data.talle,
      color: data.color,
      material: data.material,
      destacado: data.destacado,
      nuevo: data.nuevo,
      fotos: data.fotos,
      genero: data.genero,
      stock: data.stock,
      description:data.description,
      oldPrecioMayor:data.oldPrecioMayor,
      oldPrecioMenor:data.oldPrecioMenor,
      oferta:data.oferta
    })
    .eq("id", data.id)
    .select();

  if (error) {
    console.error("Error al actualizar zapatilla:", error.message);
    return { success: false, message: error.message };
  }

  return { success: true, zapatilla: updatedZapatilla };
};

export const deleteZapatillaAction = async (id: string) => {
  const { error } = await supabase
    .from("zapatillas")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error al actualizar zapatilla:", error.message);
    return { success: false, message: error.message };
  }

  return { success: true };
};

export const SubirZapatillaAction = async (formData:IZapatilla) => {
  formData.nombre === formData.nombre.toLocaleLowerCase()
  formData.genero === formData.genero.toLocaleLowerCase()
  formData.marca === formData.marca.toLocaleLowerCase()

  const {data, error} = await supabase
  .from("zapatillas")
  .insert(formData)
  .select()

  if (error) {
    console.error("Error al subir zapatilla:", error.message);
    return { success: false, message: error.message };
  }

  return { success: true, zapatilla:data };

}
