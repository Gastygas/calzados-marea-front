"use client"
import { useContext } from "react";
import styles from "./BotonSingleZapatilla.module.css";
import { IZapatilla } from "@/helpers/interfaces";
import { AuthContext } from "@/utils/authContext";

const BotonSingleZapatilla = ({
  selectedTalle,
  zapatilla,
}: {
  selectedTalle: string[];
  zapatilla: IZapatilla;
}) => {
  const shoppingContext = useContext(AuthContext);

   const isAlreadyInCart = () => {
    if (!shoppingContext?.shoppingCart) return false;

    return shoppingContext.shoppingCart.some(
      (item) =>
        item.id === zapatilla.id &&
        JSON.stringify(item.talle) === JSON.stringify(selectedTalle)
    );
  };

 const handleAddToCart = () => {
    if (
      shoppingContext &&
      !isAlreadyInCart() &&
      selectedTalle.length > 0
    ) {
      shoppingContext.addToCart({
        ...zapatilla,
        talle: [...selectedTalle],
      });
    }
  };

    const disabled = selectedTalle.length === 0 || isAlreadyInCart();

  return (
    <div className={styles.containerButon}>
      <div className={styles.divButton}>
          <button onClick={handleAddToCart} disabled={disabled}>
          {disabled
            ? isAlreadyInCart()
              ? "Ya está en el carrito"
              : "Selecciona el talle"
            : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
};

export default BotonSingleZapatilla;
