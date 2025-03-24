"use client"
import Link from "next/link";
import styles from "./ProductosEncotrados.module.css"
import Image from "next/image";
import { IZapatilla } from "@/helpers/interfaces";
import { useEffect, useState } from "react";
import { FindDestacadosAction } from "@/actions/zapatillas.actions";


const ProductosEncontrados = () => {

const [zapatillaEncontradas, setZapatillasEncontradas] = useState<
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
        <div className={styles.productosContainer}>
            {zapatillaEncontradas.map((item: any) => (
              <div className={styles.slide} key={item.id}>
                <Link href={`/calzado-${item.nombre}`}>
                  <Image
                    className={styles.imagenDestacada}
                    width={100}
                    height={100}
                    src={item.fotos[0]}
                    alt="zapatilla"
                  />
                  <div className={styles.infoZapas}>
                  <p className={styles.nombre}>{item.nombre}</p>
                      <p className={styles.genero}>
                        {item.genero === "unisex"
                          ? `zapatillas ${item.marca} unisex`
                          : `zapatillas ${item.marca} para ${item.genero}`}
                      </p>
                      <p className={styles.precio}>$ {item.precio}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
    )
};

export default ProductosEncontrados