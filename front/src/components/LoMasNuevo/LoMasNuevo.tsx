"use client";
import styles from "./LoMasNuevo.module.css";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { settings, settings2, settings3 } from "@/utils/settingsCarrousel";
import { useEffect, useState } from "react";
import { IZapatilla } from "@/helpers/interfaces";
import { FindDestacadosAction } from "@/actions/zapatillas.actions";

const LoMasNuevo = () => {

    const [zapatillaDestacadas, setZapatillasDestacadas] = useState<
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
          setZapatillasDestacadas(zapatillas);
        }
      };
  
      getZapatillas();
    }, []);

  return (
    <>
      <div className={styles.containerDestacado1}>
        <div className="m-auto w-11/12">
          {zapatillaDestacadas.length === 1 ? (
            <div>loading...</div>
          ) : (
            <Slider {...settings}>
              {zapatillaDestacadas.map((item: IZapatilla) => (
                <div className={styles.slide} key={item.id}>
                  <Link href={`/calzado/${item.nombre}`}>
                    <Image
                      className={styles.imagenDestacada}
                      width={400}
                      height={400}
                      src={item.fotos[0]}
                      alt={`zapatilla ${item.nombre}`}
                      loading="lazy"
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
            </Slider>
          )}
        </div>
      </div>
      <div className={styles.containerDestacado2}>
        <div className="m-auto w-11/12">
          {zapatillaDestacadas.length === 1 ? (
            <div>loading...</div>
          ) : (
            <Slider {...settings2}>
              {zapatillaDestacadas.map((item: IZapatilla) => (
                <div className={styles.slide} key={item.id}>
                  <Link href={`/calzado-${item.nombre}`}>
                    <Image
                      className={styles.imagenDestacada}
                      width={1000}
                      height={1000}
                      src={item.fotos[0]}
                      alt={`zapatilla ${item.nombre}`}
                      loading="lazy"
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
            </Slider>
          )}
        </div>
      </div>
      <div className={styles.containerDestacado3}>
        <div className="m-auto w-11/12">
          {zapatillaDestacadas.length === 1 ? (
            <div>loading...</div>
          ) : (
            <Slider {...settings3}>
              {zapatillaDestacadas.map((item: IZapatilla) => (
                <div className={styles.slide} key={item.id}>
                  <Link href={`/calzado-${item.nombre}`}>
                    <Image
                      className={styles.imagenDestacada}
                      width={1000}
                      height={1000}
                      src={item.fotos[0]}
                      alt={`zapatilla ${item.nombre}`}
                      loading="lazy"
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
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default LoMasNuevo;
