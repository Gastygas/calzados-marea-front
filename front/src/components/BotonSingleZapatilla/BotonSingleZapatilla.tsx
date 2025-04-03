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
