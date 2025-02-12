import Image from "next/image";
import styles from "./MenuNavbar.module.css"
import { FiSearch } from "react-icons/fi";


const MenuNavbar = () => {
  return (
    <div className={styles.containerMenuNavbar}>
      <div>
        <ul className={styles.list}>
          <li className={styles.item}>Hombre</li>
          <li className={styles.item}>Mujer</li>
          <li className={styles.item}>Niño/a</li>
          <li className={styles.item}>Nuevo</li>
        </ul>
      </div>
      <div className={styles.divLupa}>
        <FiSearch size={30} />
      </div>
    </div>
  );
};

export default MenuNavbar;
