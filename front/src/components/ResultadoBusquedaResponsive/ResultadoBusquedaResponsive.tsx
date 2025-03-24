"use client";
import styles from "./ResultadoBusquedaResponsive.module.css";
import { useState } from "react";
import Filtros from "../Filtros/Filtros";
import OrdenarPor from "../OrdenarPor/OrdenarPor";
import ProductosEncontrados from "../ProductosEncontrados/ProductosEncontrados";
import filtrospng from "../../../assets/filtrospng.png"
import Image from "next/image";
import { IZapatilla } from "@/helpers/interfaces";


interface Props {
  zapatillasEncontradas: IZapatilla[];
  busqueda:string;
}
const ResultadoBusquedaResponsive = ({ zapatillasEncontradas, busqueda }: Props) => {
  const [isOpenFilters, setIsOpenFilters] = useState(false)
  const [openFilters, setOpenFilters] = useState({
    genero: false,
    talle: false,
    tipo: false,
    color: false,
  });
  const [isOrdenarPorOpen, setIsOrdenarPorOpen] = useState(false);

  const toggleMenuFilter = ():void => {
    setIsOpenFilters(!isOpenFilters);
  };

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
      <div className={styles.navBarBusqueda}>
        <div className={styles.itemNavBar}>
          <h4>{busqueda}</h4>
        </div>
        <div className={styles.itemNavBar}>
          <div className={styles.filtrosDiv} onClick={toggleMenuFilter}>
            <Image src={filtrospng} width={25} alt="filtros png"/>
            <h4>Filtros</h4>
          </div>
            <Filtros toggleFilter={toggleFilter} openFilters={openFilters} toggleMenuFilter={toggleMenuFilter} isOpenFilters={isOpenFilters} />
        </div>
        <div className={styles.itemNavBar}>
          <OrdenarPor
            isOrdenarPorOpen={isOrdenarPorOpen}
            toggleDropdown={toggleDropdown}
          />
        </div>
      </div>
      <div className={styles.resultadosTittle}>
        <h4>Resultados para "{busqueda}"</h4>
      </div>
      <div className={styles.productosEncontradosHeader}>
        <div className={styles.productosEncontrados}>
          <div>
            <h4>{zapatillasEncontradas.length} Productos</h4>
          </div>
        </div>
        <ProductosEncontrados zapatillasEncontradas={zapatillasEncontradas} />
      </div>
    </div>
  );
};

export default ResultadoBusquedaResponsive;
