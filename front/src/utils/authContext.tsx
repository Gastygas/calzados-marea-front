"use client";
import { IZapatilla } from "@/helpers/interfaces";
import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 📌 Interfaz para autenticación y carrito
interface AuthContextType {
  user: any;
  loading: boolean;
  logIn: (data: { user: string; password: string }) => Promise<void>;
  logOut: () => Promise<void>;
  shoppingCart: IZapatilla[];
  addToCart: (zap: IZapatilla) => void;
  removeFromCart: (id: string) => void;
}

// 📌 Contexto de autenticación y carrito
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [shoppingCart, setShoppingCart] = useState<IZapatilla[]>([]);

  // 📌 Verificar sesión de usuario al cargar la app
  useEffect(() => {
    const getUserSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
      setLoading(false);
    };

    getUserSession();

    // 📌 Suscribirse a cambios de sesión
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // 📌 Función para iniciar sesión
  const logIn = async (data: { user: string; password: string }) => {
    setLoading(true);
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email: data.user,
      password: data.password,
    });

    if (error) {
      setLoading(false);
      throw new Error(error.message);
    }

    setUser(authData.user);
    setLoading(false);
  };

  // 📌 Función para cerrar sesión
  const logOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  // 📌 Función para agregar productos al carrito
  const addToCart = (zap: IZapatilla) => {
    setShoppingCart((prevCart) => [...prevCart, zap]);
  };

  // 📌 Función para eliminar productos del carrito
  const removeFromCart = (id: string) => {
    setShoppingCart((prevCart) => prevCart.filter((zap) => zap.id !== id));
  };

  return (
    <AuthContext.Provider value={{ user, loading, logIn, logOut, shoppingCart, addToCart, removeFromCart }}>
      {children}
    </AuthContext.Provider>
  );
};

// 📌 Hook personalizado para acceder al contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return context;
};

export default AuthProvider;