import Filtros from "../Filtros/Filtros";
import ProductosEncontrados from "../ProductosEncontrados/ProductosEncontrados";
import { IDestacadoPics } from "../Section-1/Section-1";
import styles from "./ResultadoBusqueda.module.css";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  productos: IDestacadoPics[];
}

const ResultadoBusqueda = ({productos}: Props) => {
  return (
    <div className={styles.resultadoBusquedaContainer}>
      <Filtros />
      <div className={styles.productosEncontradosHeader}>
        <div className={styles.productosEncontrados}>
          <div>
            <h4>{productos.length} Productos</h4>
          </div>
          <div className={styles.ordenarPor}>
            <h4>Ordernar Por</h4>
            <IoIosArrowDown/>
          </div>
        </div>
        <ProductosEncontrados productos={productos}/>
      </div>
    </div>
  );
};

export default ResultadoBusqueda;
