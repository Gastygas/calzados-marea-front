"use client"
import { useEffect, useState } from "react";
import Filtros from "../Filtros/Filtros";
import OrdenarPor from "../OrdenarPor/OrdenarPor";
import ProductosEncontrados from "../ProductosEncontrados/ProductosEncontrados";
import styles from "./ResultadoBusqueda.module.css";
import { IZapatilla } from "@/helpers/interfaces";

interface Props {
  zapatillasEncontradas: IZapatilla[];
  busqueda:string;
}

const ResultadoBusqueda = ({zapatillasEncontradas,busqueda}: Props) => {
  const [openFilters, setOpenFilters] = useState({
    genero: false,
    talle: false,
    tipo: false,
    color: false,
  });
  const [isOrdenarPorOpen,setIsOrdenarPorOpen] = useState(false)
  const toggleDropdown = () => {
    setIsOrdenarPorOpen((prev) => !prev);
  };


  const toggleFilter = (filter: keyof typeof openFilters) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };
  return (
    <div className={styles.resultadoBusquedaContainer}>
      <Filtros toggleFilter={toggleFilter} openFilters={openFilters} />
      <div className={styles.productosEncontradosHeader}>
        <div className={styles.productosEncontrados}>
          <div>
            <h4>{zapatillasEncontradas.length} Productos</h4>
          </div>
          <OrdenarPor isOrdenarPorOpen={isOrdenarPorOpen} toggleDropdown={toggleDropdown}/>
        </div>
        <ProductosEncontrados zapatillasEncontradas={zapatillasEncontradas}/>
      </div>
    </div>
  );
};

export default ResultadoBusqueda;
