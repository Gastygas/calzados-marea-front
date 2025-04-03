import { ILoginData } from "@/helpers/interfaces";
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