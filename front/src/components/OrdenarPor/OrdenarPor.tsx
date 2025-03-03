import styles from "./OrdenarPor.module.css"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Props{
  toggleDropdown: () => void;
  isOrdenarPorOpen: boolean
}

const OrdenarPor = ({toggleDropdown,isOrdenarPorOpen}:Props) => {
    return (
      <div className={styles.ordenarPor}>
      <div className={styles.ordenarPorHeader} onClick={toggleDropdown}>
        <h4>Ordenar Por</h4>
        {isOrdenarPorOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOrdenarPorOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownItem} onClick={() => toggleDropdown()}>
            Mayor Precio
          </div>
          <div className={styles.dropdownItem} onClick={() => toggleDropdown()}>
            Menor Precio
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdenarPor;
