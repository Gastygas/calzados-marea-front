import { FaRegFrownOpen } from "react-icons/fa";
import styles from "./BusquedaNotFound.module.css"

const BusquedaNotFound = () => {
    return (
        <div className={styles.noEncontradoDiv}>
        <div>
        <FaRegFrownOpen size={50} />
        </div>
       <h3> No encontramos ningun producto relacionado a tu busqueda</h3>
       <p>Por favor revisa e intentalo</p>
      </div>
    )
};

export default BusquedaNotFound
