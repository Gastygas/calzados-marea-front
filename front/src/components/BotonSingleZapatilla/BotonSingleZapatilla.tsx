"use client"
import { useContext } from "react";
import styles from "./BotonSingleZapatilla.module.css";
import { IZapatilla } from "@/helpers/interfaces";
import { AuthContext } from "@/utils/authContext";

const BotonSingleZapatilla = ({
  selectedTalle,
  zapatilla,
  noRequiereTalle
}: {
  selectedTalle: string[];
  zapatilla: IZapatilla;
  noRequiereTalle: boolean
}) => {
  const shoppingContext = useContext(AuthContext);

  const isAlreadyInCart = () => {
    if (!shoppingContext?.shoppingCart) return false;

    return shoppingContext.shoppingCart.some((item) => {
      if (zapatilla.tipo === "otros") {
        return item.id === zapatilla.id;
      }

      return (
        item.id === zapatilla.id &&
        JSON.stringify(item.talle) === JSON.stringify(selectedTalle)
      );
    });
  };

  const handleAddToCart = () => {
    if (!shoppingContext || isAlreadyInCart()) return;

    if (zapatilla.tipo === "otros") {
      shoppingContext.addToCart({
        ...zapatilla,
        talle: [],
      });
      return;
    }

    if (selectedTalle.length > 0) {
      shoppingContext.addToCart({
        ...zapatilla,
        talle: [...selectedTalle],
      });
    }
  };

  const disabled =
    (!noRequiereTalle && selectedTalle.length === 0) ||
    isAlreadyInCart();

  return (
    <div className={styles.containerButon}>
      <div className={styles.divButton}>
        <button onClick={handleAddToCart} disabled={disabled}>
          {disabled
            ? isAlreadyInCart()
              ? "Ya está en el carrito"
              : !noRequiereTalle
                ? "Selecciona el talle"
                : "No disponible"
            : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
};

export default BotonSingleZapatilla;
