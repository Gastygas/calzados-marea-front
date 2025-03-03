import styles from "./Filtros.module.css";
import { IoIosArrowDown, IoIosArrowUp, IoMdArrowBack } from "react-icons/io";
import { MdCancel } from "react-icons/md";

interface Props {
  openFilters: {
    genero: boolean;
    talle: boolean;
    tipo: boolean;
    color: boolean;
  };
  toggleFilter: (filter: "genero" | "talle" | "tipo" | "color") => void;
  toggleMenuFilter?: () => void;
  isOpenFilters?: boolean;
}

const Filtros = ({
  openFilters,
  toggleFilter,
  toggleMenuFilter,
  isOpenFilters,
}: Props) => {
  return (
    <>
      <div className={`${styles.filtrosContainerResponsive} ${isOpenFilters ? styles.open : ""}`}>
        <div className={styles.filtrosCancel} onClick={toggleMenuFilter}>
          <button>Cerrar</button>
        </div>
        <div className={styles.filtrosTitle}>
          <h4>Filtros</h4>
        </div>
        <div className={styles.itemDiv} onClick={() => toggleFilter("genero")}>
          <h5>Genero</h5>
          {openFilters.genero ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {openFilters.genero && (
          <div className={styles.filtroOpciones}>
            <label>
              <input type="checkbox" /> Hombre
            </label>
            <label>
              <input type="checkbox" /> Mujer
            </label>
            <label>
              <input type="checkbox" /> Unisex
            </label>
          </div>
        )}
        {/* Talle */}
        <div className={styles.itemDiv} onClick={() => toggleFilter("talle")}>
          <h5>Talle</h5>
          {openFilters.talle ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {openFilters.talle && (
          <div className={styles.filtroOpcionesTalle}>
            <label>
              <input type="checkbox" /> 34
            </label>
            <label>
              <input type="checkbox" /> 35
            </label>
            <label>
              <input type="checkbox" /> 36
            </label>
            <label>
              <input type="checkbox" /> 37
            </label>
            <label>
              <input type="checkbox" /> 38
            </label>
            <label>
              <input type="checkbox" /> 39
            </label>
            <label>
              <input type="checkbox" /> 40
            </label>
            <label>
              <input type="checkbox" /> 41
            </label>
            <label>
              <input type="checkbox" /> 42
            </label>
            <label>
              <input type="checkbox" /> 43
            </label>
            <label>
              <input type="checkbox" /> 44
            </label>
            <label>
              <input type="checkbox" /> 45
            </label>
          </div>
        )}

        {/* Tipo de Producto */}
        <div className={styles.itemDiv} onClick={() => toggleFilter("tipo")}>
          <h5>Tipo De Producto</h5>
          {openFilters.tipo ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {openFilters.tipo && (
          <div className={styles.filtroOpciones}>
            <label>
              <input type="checkbox" /> Zapatillas
            </label>
            <label>
              <input type="checkbox" /> Botas
            </label>
            <label>
              <input type="checkbox" /> Sandalias
            </label>
            <label>
              <input type="checkbox" /> Botines
            </label>
            <label>
              <input type="checkbox" /> Ojotas
            </label>
          </div>
        )}

        {/* Color */}
        <div className={styles.itemDiv} onClick={() => toggleFilter("color")}>
          <h5>Color</h5>
          {openFilters.color ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {openFilters.color && (
          <div className={styles.filtroOpciones}>
            <label>
              <input type="checkbox" /> Rojo
            </label>
            <label>
              <input type="checkbox" /> Azul
            </label>
            <label>
              <input type="checkbox" /> Negro
            </label>
            <label>
              <input type="checkbox" /> Verde
            </label>
            <label>
              <input type="checkbox" /> Blanco
            </label>
            <label>
              <input type="checkbox" /> Naranja
            </label>
          </div>
        )}
      </div>
      <div className={styles.filtrosContainer}>
        <div className={styles.filtrosTitle}>
          <h4>Filtros</h4>
        </div>
        <div className={styles.itemDiv} onClick={() => toggleFilter("genero")}>
          <h5>Genero</h5>
          {openFilters.genero ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {openFilters.genero && (
          <div className={styles.filtroOpciones}>
            <label>
              <input type="checkbox" /> Hombre
            </label>
            <label>
              <input type="checkbox" /> Mujer
            </label>
            <label>
              <input type="checkbox" /> Unisex
            </label>
          </div>
        )}
        {/* Talle */}
        <div className={styles.itemDiv} onClick={() => toggleFilter("talle")}>
          <h5>Talle</h5>
          {openFilters.talle ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {openFilters.talle && (
          <div className={styles.filtroOpcionesTalle}>
            <label>
              <input type="checkbox" /> 34
            </label>
            <label>
              <input type="checkbox" /> 35
            </label>
            <label>
              <input type="checkbox" /> 36
            </label>
            <label>
              <input type="checkbox" /> 37
            </label>
            <label>
              <input type="checkbox" /> 38
            </label>
            <label>
              <input type="checkbox" /> 39
            </label>
            <label>
              <input type="checkbox" /> 40
            </label>
            <label>
              <input type="checkbox" /> 41
            </label>
            <label>
              <input type="checkbox" /> 42
            </label>
            <label>
              <input type="checkbox" /> 43
            </label>
            <label>
              <input type="checkbox" /> 44
            </label>
            <label>
              <input type="checkbox" /> 45
            </label>
          </div>
        )}

        {/* Tipo de Producto */}
        <div className={styles.itemDiv} onClick={() => toggleFilter("tipo")}>
          <h5>Tipo De Producto</h5>
          {openFilters.tipo ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {openFilters.tipo && (
          <div className={styles.filtroOpciones}>
            <label>
              <input type="checkbox" /> Zapatillas
            </label>
            <label>
              <input type="checkbox" /> Botas
            </label>
            <label>
              <input type="checkbox" /> Sandalias
            </label>
            <label>
              <input type="checkbox" /> Botines
            </label>
            <label>
              <input type="checkbox" /> Ojotas
            </label>
          </div>
        )}

        {/* Color */}
        <div className={styles.itemDiv} onClick={() => toggleFilter("color")}>
          <h5>Color</h5>
          {openFilters.color ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {openFilters.color && (
          <div className={styles.filtroOpciones}>
            <label>
              <input type="checkbox" /> Rojo
            </label>
            <label>
              <input type="checkbox" /> Azul
            </label>
            <label>
              <input type="checkbox" /> Negro
            </label>
            <label>
              <input type="checkbox" /> Verde
            </label>
            <label>
              <input type="checkbox" /> Blanco
            </label>
            <label>
              <input type="checkbox" /> Naranja
            </label>
          </div>
        )}
      </div>
    </>
  );
};

export default Filtros;
