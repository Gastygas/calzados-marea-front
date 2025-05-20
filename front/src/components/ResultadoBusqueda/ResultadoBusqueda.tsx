"use client";
import { useState } from "react";
import Filtros from "../Filtros/Filtros";
import OrdenarPor from "../OrdenarPor/OrdenarPor";
import ProductosEncontrados from "../ProductosEncontrados/ProductosEncontrados";
import styles from "./ResultadoBusqueda.module.css";
import { IZapatilla } from "@/helpers/interfaces";

interface Props {
  zapatillasEncontradas: IZapatilla[];
  busqueda: string;
}

const ResultadoBusqueda = ({ zapatillasEncontradas }: Props) => {
  const [openFilters, setOpenFilters] = useState({
    genero: false,
    talle: false,
    tipo: false,
    color: false,
  });
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
  const [isOrdenarPorOpen, setIsOrdenarPorOpen] = useState(false);
  const [ordenSeleccionado, setOrdenSeleccionado] = useState<
    "mayor" | "menor" | ""
  >("");
  const toggleDropdown = () => {
    setIsOrdenarPorOpen((prev) => !prev);
  };

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

  const toggleFilter = (filter: keyof typeof openFilters) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
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

  return (
    <div className={styles.resultadoBusquedaContainer}>
      <Filtros
        toggleFilter={toggleFilter}
        openFilters={openFilters}
        handleFiltroChange={handleFiltroChange}
      />
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
          <OrdenarPor
            isOrdenarPorOpen={isOrdenarPorOpen}
            toggleDropdown={toggleDropdown}
            handleOrdenSeleccionado={handleOrdenSeleccionado}
          />
        </div>
        <ProductosEncontrados zapatillasEncontradas={zapatillasFiltradas} />
      </div>
    </div>
  );
};

export default ResultadoBusqueda;
