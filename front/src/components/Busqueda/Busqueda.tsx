"use client"
import ResultadoBusqueda from "../ResultadoBusqueda/ResultadoBusqueda";
import styles from "./Busqueda.module.css";
import ResultadoBusquedaResponsive from "../ResultadoBusquedaResponsive/ResultadoBusquedaResponsive";
import { useEffect, useState } from "react";
import { IZapatilla } from "@/helpers/interfaces";
import { FindDestacadosAction } from "@/actions/zapatillas.actions";
const Busqueda = ({busqueda}:{busqueda:string}) => {
  
  const [zapatillasEncontradas, setZapatillasEncontradas] = useState<
      IZapatilla[] | []
    >([
      {
        nombre: "none",
        id: "none",
        precio: "none",
        marca: "nike",
        talle: ["none"],
        color: "none",
        destacado: false,
        nuevo: false,
        fotos: ["https://none.jpg"],
        genero: "none",
      },
    ]);
  
    useEffect(() => {
      const getZapatillas = async () => {
        const zapatillas: IZapatilla[] | null = await FindDestacadosAction();
  
        if (zapatillas !== null) {
          setZapatillasEncontradas(zapatillas);
        }
      };
  
      getZapatillas();
    }, []);

  return (
    <div>
      <div className={styles.resultadosDiv}>
        <h3>Resultados para "{busqueda}"</h3>
      </div>
      <ResultadoBusqueda zapatillasEncontradas={zapatillasEncontradas} busqueda={busqueda} />
      <ResultadoBusquedaResponsive zapatillasEncontradas={zapatillasEncontradas} busqueda={busqueda}/>
    </div>
  );
};

export default Busqueda;
