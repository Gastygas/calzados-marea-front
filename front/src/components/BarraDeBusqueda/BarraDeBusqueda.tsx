import styles from "./BarraDeBusqueda.module.css";
import { FiSearch } from "react-icons/fi";
import BarraDeBusquedaMasBuscados from "../BarraDeBusquedaMasBuscados/BarraDeBusquedaMasBuscados";
import { LogoCM } from "@/utils/LogoCM";

const BarraDeBusqueda = ({ toggleLupa }: { toggleLupa: () => void }) => {
  const handleBuscar = () => {};
  return (
    <>
      <div className={styles.divBarraDeBusqueda}>
        <div className={styles.divLogo}>
          <LogoCM />
        </div>
        <div className={styles.barraDeBusqueda}>
          <div className={styles.barraDiv}>
            <FiSearch size={25} />
            <input type="text" placeholder="¿Que estas buscando?" />
          </div>
          <button onClick={handleBuscar}>Buscar</button>
        </div>
        <button onClick={toggleLupa} className={styles.cerrarButton}>
          Cerrar
        </button>
      </div>
      <div className={styles.barraDeBusquedaResponsive}>
        <div className={styles.barraDiv}>
          <FiSearch size={25} />
          <input type="text" placeholder="¿Que estas buscando?" />
        </div>
        <button>Buscar</button>
      </div>
      <BarraDeBusquedaMasBuscados />
    </>
  );
};

export default BarraDeBusqueda;
