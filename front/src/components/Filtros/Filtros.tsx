import styles from "./Filtros.module.css";
import { IoIosArrowDown } from "react-icons/io";

const Filtros = () => {
  return (
    <div className={styles.filtrosContainer}>
      <div className={styles.filtrosTitle}>
        <h4>Filtros</h4>
      </div>
      <div className={styles.itemDiv}>
        <h5>Genero</h5>
        <IoIosArrowDown />
      </div>
      <div className={styles.itemDiv}>
        <h5>Talle</h5>
        <IoIosArrowDown />
      </div>
      <div className={styles.itemDiv}>
        <h5>Tipo De Producto</h5>
        <IoIosArrowDown />
      </div>
      <div className={styles.itemDiv}>
        <h5>Color</h5>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Filtros;
