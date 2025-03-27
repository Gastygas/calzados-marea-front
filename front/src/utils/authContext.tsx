"use client"
import { IZapatilla } from "@/helpers/interfaces";
import { createContext, useState } from "react";

interface IShoppingContextType{
    shoppingCart: IZapatilla[];
    addToCart: (zap: IZapatilla) => void;
    removeFromCart: (id:string) => void;
}

const AuthContextShopping = createContext<IShoppingContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [shoppingCart, setShoppingCart] = useState<IZapatilla[]>([]);
  
    // Función para agregar IZapatillaos al carrito
    const addToCart = (zap: IZapatilla) => {
      setShoppingCart((prevCart) => [...prevCart, zap]);
    };
  
    // Función para eliminar productos del carrito
    const removeFromCart = (id: string) => {
      setShoppingCart((prevCart) => prevCart.filter((zap) => zap.id !== id));
    };
  
    return (
      <AuthContextShopping.Provider value={{ shoppingCart, addToCart, removeFromCart }}>
        {children}
      </AuthContextShopping.Provider>
    );
  };
  
  export default AuthContextShopping;