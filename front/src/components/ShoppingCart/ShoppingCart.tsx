import { LogoCM } from "@/utils/LogoCM";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = ({ toggleShopping }: { toggleShopping: () => void }) => {
  return (
    <div className={styles.shoppingContainer}>
      <div className={styles.shoppingNav}>
        <LogoCM />
        <button onClick={toggleShopping} className={styles.cerrarButton}>
          Cerrar
        </button>
      </div>
      <div>
        contenido
      </div>
      <div>
        <button>
            Enviar a whatsapp
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
