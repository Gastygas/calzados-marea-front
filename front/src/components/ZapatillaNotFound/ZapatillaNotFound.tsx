import { FaRegFrownOpen } from "react-icons/fa";
import styles from "./ZapatillaNotFound.module.css";
import BarraDeBusquedaMasBuscados from "../BarraDeBusquedaMasBuscados/BarraDeBusquedaMasBuscados";

const ZapatillaNotFound = () => {
  return (
    <div className={styles.noEncontradoDiv}>
      <div>
        <FaRegFrownOpen size={50} />
      </div>
      <h3> No encontramos ningun producto relacionado a tu busqueda</h3>
      <p>Por favor revisa e intentalo nuevamente</p>
    </div>
  );
};

export default ZapatillaNotFound;
