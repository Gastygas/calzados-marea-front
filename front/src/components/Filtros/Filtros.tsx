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
  handleFiltroChange: (categoria: "genero" | "talle" | "tipo" | "color", valor: string) => void;
}

const Filtros = ({
  openFilters,
  toggleFilter,
  toggleMenuFilter,
  handleFiltroChange,
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
              <input type="checkbox" onChange={() => handleFiltroChange("genero", "hombre")} /> Hombre
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("genero", "mujer")} /> Mujer
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("genero", "unisex")} /> Unisex
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
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "34")} /> 34
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "35")} /> 35
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "36")} /> 36
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "37")} /> 37
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "38")} /> 38
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "39")} /> 39
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "40")} /> 40
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "41")} /> 41
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "42")} /> 42
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "43")} /> 43
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "44")} /> 44
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "45")} /> 45
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
              <input type="checkbox" onChange={() => handleFiltroChange("tipo", "zapatilla")} /> Zapatillas
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("tipo", "botas")} /> Botas
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("tipo", "sandalias")} /> Sandalias
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("tipo", "botines")} /> Botines
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("tipo", "ojotas")} /> Ojotas
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
              <input type="checkbox" onChange={() => handleFiltroChange("color", "rojo")} /> Rojo
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("color", "azul")}/> Azul
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("color", "negro")}/> Negro
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("color", "verde")}/> Verde
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("color", "blanco")}/> Blanco
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("color", "naranja")}/> Naranja
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
              <input type="checkbox" onChange={() => handleFiltroChange("genero", "hombre")} /> Hombre
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("genero", "mujer")} /> Mujer
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("genero", "unisex")} /> Unisex
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
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "34")} /> 34
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "35")} /> 35
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "36")} /> 36
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "37")} /> 37
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "38")} /> 38
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "39")} /> 39
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "40")} /> 40
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "41")} /> 41
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "42")} /> 42
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "43")} /> 43
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "44")} /> 44
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("talle", "45")} /> 45
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
              <input type="checkbox" onChange={() => handleFiltroChange("tipo", "zapatilla")} /> Zapatillas
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("tipo", "botas")} /> Botas
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("tipo", "sandalias")} /> Sandalias
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("tipo", "botines")} /> Botines
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("tipo", "ojotas")} /> Ojotas
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
              <input type="checkbox" onChange={() => handleFiltroChange("color", "rojo")} /> Rojo
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("color", "azul")}/> Azul
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("color", "negro")}/> Negro
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("color", "verde")}/> Verde
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("color", "blanco")}/> Blanco
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFiltroChange("color", "naranja")}/> Naranja
            </label>
          </div>
        )}
      </div>
    </>
  );
};

export default Filtros;
