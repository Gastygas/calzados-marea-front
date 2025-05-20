import styles from "./OrdenarPor.module.css"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Props {
  toggleDropdown: () => void;
  isOrdenarPorOpen: boolean;
  handleOrdenSeleccionado: (orden: "mayor" | "menor") => void;
}

const OrdenarPor = ({toggleDropdown,isOrdenarPorOpen, handleOrdenSeleccionado}:Props) => {
    return (
      <div className={styles.ordenarPor}>
      <div className={styles.ordenarPorHeader} onClick={toggleDropdown}>
        <h4>Ordenar Por</h4>
        {isOrdenarPorOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOrdenarPorOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownItem} onClick={() => {
            toggleDropdown() 
            handleOrdenSeleccionado("mayor")}}>
            Mayor Precio
          </div>
          <div className={styles.dropdownItem} onClick={() =>{ 
            toggleDropdown()
            handleOrdenSeleccionado("menor")
            }}>
            Menor Precio
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdenarPor;
