"use client";
import Image from "next/image";
import { IDestacadoPics } from "../Section-1/Section-1";
import styles from "./LoMasDestacado.module.css";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings, settings2, settings3 } from "@/utils/settingsCarrousel";
import jordan from "../../../assets/jordan.jpg";
import dou from "../../../assets/taylor-smith-aDZ5YIuedQg-unsplash.jpg";

const destacadoPics: IDestacadoPics[] = [
  {
    imagen: jordan,
    id: 13,
    nombre: "air force 1 white pink",
  },
  {
    imagen: jordan,
    id: 21231,
    nombre: "air force 1 white pink",
  },
  {
    imagen: dou,
    id: 3123424,
    nombre: "air force 1 white pink",
  },
  {
    imagen: jordan,
    id: 13213123,
    nombre: "air force 1 white pink",
  },
  {
    imagen: jordan,
    id: 2123112312132,
    nombre: "air force 1 white pink",
  },
  {
    imagen: dou,
    id: 3123424123123,
    nombre: "air force 1 white pink",
  },
  {
    imagen: jordan,
    id: 212311231213212321,
    nombre: "air force 1 white pink",
  },
  {
    imagen: dou,
    id: 312342412312333,
    nombre: "air force 1 white pink",
  },
];

const LoMasDestacado = () => {
  return (
    <>
      <div className={styles.containerDestacado1}>
        <div className="m-auto w-11/12">
          <Slider {...settings}>
            {destacadoPics.map((item: any) => (
              <div className={styles.slide} key={item.id}>
                <Link href={`/calzado/${item.nombre}`}>
                  <Image
                    className={styles.imagenDestacada}
                    width={1000}
                    src={item.imagen}
                    alt="zapatilla"
                  />
                  <div className={styles.infoZapas}>
                    <p className={styles.nombre}>{item.nombre}</p>
                    <p className={styles.genero}>
                      {item.genero
                        ? item.genero
                        : "zapatillas jordan para hombre"}
                    </p>
                    <p className={styles.precio}>
                      $ {item.precio ? item.precio : "120.000"}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.containerDestacado2}>
        <div className="m-auto w-11/12">
          <Slider {...settings2}>
            {destacadoPics.map((item: any) => (
              <div className={styles.slide} key={item.id}>
                <Link href={`/calzado-${item.nombre}`}>
                  <Image
                    className={styles.imagenDestacada}
                    width={1000}
                    src={item.imagen}
                    alt="zapatilla"
                  />
                  <div className={styles.infoZapas}>
                    <p className={styles.nombre}>{item.nombre}</p>
                    <p className={styles.genero}>
                      {item.genero
                        ? item.genero
                        : "zapatillas jordan para hombre"}
                    </p>
                    <p className={styles.precio}>
                      $ {item.precio ? item.precio : "120.000"}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.containerDestacado3}>
        <div className="m-auto w-11/12">
          <Slider {...settings3}>
            {destacadoPics.map((item: any) => (
              <div className={styles.slide} key={item.id}>
                <Link href={`/calzado-${item.nombre}`}>
                  <Image
                    className={styles.imagenDestacada}
                    width={1000}
                    src={item.imagen}
                    alt="zapatilla"
                  />
                  <div className={styles.infoZapas}>
                    <p className={styles.nombre}>{item.nombre}</p>
                    <p className={styles.genero}>
                      {item.genero
                        ? item.genero
                        : "zapatillas jordan para hombre"}
                    </p>
                    <p className={styles.precio}>
                      $ {item.precio ? item.precio : "120.000"}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LoMasDestacado;
