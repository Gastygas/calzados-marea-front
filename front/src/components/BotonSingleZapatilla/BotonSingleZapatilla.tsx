"use client"
import { useContext } from "react";
import styles from "./BotonSingleZapatilla.module.css";
import AuthContextShopping from "@/utils/authContext";
import { IZapatilla } from "@/helpers/interfaces";

const BotonSingleZapatilla = ({
  selectedTalle,
  zapatilla,
}: {
  selectedTalle: string[];
  zapatilla: IZapatilla;
}) => {
  const shoppingContext = useContext(AuthContextShopping);

  const handleAddToCart = () => {
    if (shoppingContext) {
      shoppingContext.addToCart({...zapatilla, talle:[...selectedTalle ? selectedTalle : ""]});
    }
  };
  return (
    <div className={styles.containerButon}>
      <div className={styles.divButton}>
        {selectedTalle ? (
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        ) : (
          <button disabled>Selecciona el talle</button>
        )}
      </div>
    </div>
  );
};

export default BotonSingleZapatilla;
