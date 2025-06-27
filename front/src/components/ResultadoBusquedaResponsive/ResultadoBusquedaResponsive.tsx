"use client";
import styles from "./ResultadoBusquedaResponsive.module.css";
import { useState } from "react";
import Filtros from "../Filtros/Filtros";
import OrdenarPor from "../OrdenarPor/OrdenarPor";
import ProductosEncontrados from "../ProductosEncontrados/ProductosEncontrados";
import filtrospng from "../../../assets/filtrospng.png";
import Image from "next/image";
import { IZapatilla } from "@/helpers/interfaces";

interface Props {
  zapatillasEncontradas: IZapatilla[];
  busqueda: string;
  isLoading:boolean;
}
const ResultadoBusquedaResponsive = ({
  zapatillasEncontradas,
  busqueda,
  isLoading
}: Props) => {
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [openFilters, setOpenFilters] = useState({
    genero: false,
    talle: false,
    tipo: false,
    color: false,
  });
  const [isOrdenarPorOpen, setIsOrdenarPorOpen] = useState(false);
  const [ordenSeleccionado, setOrdenSeleccionado] = useState<
    "mayor" | "menor" | ""
  >("");
  const [filtrosSeleccionados, setFiltrosSeleccionados] = useState<{
    genero: string[];
    talle: string[];
    tipo: string[];
    color: string[];
  }>({
    genero: [],
    talle: [],
    tipo: [],
    color: [],
  });
  const handleFiltroChange = (
    categoria: keyof typeof filtrosSeleccionados,
    valor: string
  ) => {
    setFiltrosSeleccionados((prev) => {
      const yaExiste = prev[categoria].includes(valor);
      const nuevosValores = yaExiste
        ? prev[categoria].filter((v) => v !== valor) // quitar si ya está
        : [...prev[categoria], valor]; // agregar si no está

      return {
        ...prev,
        [categoria]: nuevosValores,
      };
    });
  };
  const handleOrdenSeleccionado = (orden: "mayor" | "menor") => {
    setOrdenSeleccionado(orden);
    setIsOrdenarPorOpen(false);
  };

  const zapatillasFiltradas = zapatillasEncontradas.filter((zapa) => {
    const matchGenero =
      filtrosSeleccionados.genero.length === 0 ||
      filtrosSeleccionados.genero.includes(zapa.genero);

    const matchTalle =
      filtrosSeleccionados.talle.length === 0 ||
      filtrosSeleccionados.talle.some((talleSel) =>
        zapa.talle.includes(talleSel)
      );

    const matchTipo =
      filtrosSeleccionados.tipo.length === 0 ||
      (zapa.tipo && filtrosSeleccionados.tipo.includes(zapa.tipo));

    const matchColor =
      filtrosSeleccionados.color.length === 0 ||
      filtrosSeleccionados.color.includes(zapa.color);

    return matchGenero && matchTalle && matchTipo && matchColor;
  });

  const parsePrecio = (precio: string): number => {
    return Number(precio.replace(/[^0-9.-]+/g, ""));
  };
  if (ordenSeleccionado === "mayor") {
    zapatillasFiltradas.sort(
      (a, b) => parsePrecio(b.precio) - parsePrecio(a.precio)
    );
  } else if (ordenSeleccionado === "menor") {
    zapatillasFiltradas.sort(
      (a, b) => parsePrecio(a.precio) - parsePrecio(b.precio)
    );
  }

  const toggleMenuFilter = (): void => {
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
            <Image src={filtrospng} width={25} alt="filtros png" />
            <h4>Filtros</h4>
          </div>
          <Filtros
            toggleFilter={toggleFilter}
            openFilters={openFilters}
            toggleMenuFilter={toggleMenuFilter}
            isOpenFilters={isOpenFilters}
            handleFiltroChange={handleFiltroChange}
          />
        </div>
        <div className={styles.itemNavBar}>
          <OrdenarPor
            isOrdenarPorOpen={isOrdenarPorOpen}
            toggleDropdown={toggleDropdown}
            handleOrdenSeleccionado={handleOrdenSeleccionado}
          />
        </div>
      </div>
      <div className={styles.resultadosTittle}>
        <h4>Resultados para "{busqueda}"</h4>
      </div>
      <div className={styles.productosEncontradosHeader}>
        <div className={styles.productosEncontrados}>
          <div>
            <h4>
              {zapatillasFiltradas.length === 0
                ? 0
                : zapatillasFiltradas.length}{" "}
              Productos 
            </h4>
          </div>
        </div>
        <ProductosEncontrados zapatillasEncontradas={zapatillasFiltradas} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ResultadoBusquedaResponsive;
