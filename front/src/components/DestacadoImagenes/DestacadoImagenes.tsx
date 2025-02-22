"use client";
import Image from "next/image";
import { IDestacadoPics } from "../Section-1/Section-1";
import styles from "./DestacadoImagenes.module.css";
import { useState } from "react";
import Link from "next/link";

interface Props {
  destacadoPics: IDestacadoPics[];
}

const DestacadoImagenes = ({ destacadoPics }: Props) => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const nextSlide = () => {
    if (
      index <= destacadoPics.length) {
      setIndex(index + 1);
    }
  };
  const nextSlide1 = () => {
    if (
      index1 <= destacadoPics.length) {
      setIndex1(index1 + 1);
    }
  };
  const nextSlide2 = () => {
    if (
      index2 <= destacadoPics.length) {
      setIndex2(index2 + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const prevSlide1 = () => {
    if (index1 > 0) {
      setIndex1(index1 - 1);
    }
  };
  const prevSlide2 = () => {
    if (index2 > 0) {
      setIndex2(index2 - 1);
    }
  };

  return (
    <>
    <div className={styles.carouselContainer}>
      <button className={styles.arrowLeft} onClick={prevSlide}>
        &#9664;
      </button>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselInner}
          style={{
            transform: `translateX(-${index * 22}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {destacadoPics.map((item: any) => (
            <div className={styles.slide} key={item.id}>
              <Link href={`/calzado-${item.nombre}`}>
                <Image
                  className={styles.imagenDestacada}
                  width={1000}
                  height={1000}
                  src={item.imagen}
                  alt="zapatilla"
                />
                <div className={styles.infoZapas}>
                  <p className={styles.nombre}>{item.nombre}</p>
                  <p className={styles.genero}>{item.genero ? item.genero : "zapatillas jordan para hombre"}</p>
                  <p className={styles.precio}>$ {item.precio ? item.precio : "120.000"}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.arrowRight} onClick={nextSlide}>
        &#9654;
      </button>
    </div>
    <div className={styles.carouselContainerResponsive}>
      <button className={styles.arrowLeft} onClick={prevSlide1}>
        &#9664;
      </button>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselInner}
          style={{
            transform: `translateX(-${index1 * 20}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {destacadoPics.map((item: any) => (
            <div className={styles.slide} key={item.id}>
              <Link href={`/calzado-${item.nombre}`}>
                <Image
                  className={styles.imagenDestacada}
                  width={1000}
                  height={1000}
                  src={item.imagen}
                  alt="zapatilla"
                />
                <div className={styles.infoZapas}>
                  <p className={styles.nombre}>{item.nombre}</p>
                  <p className={styles.genero}>{item.genero ? item.genero : "zapatillas jordan para hombre"}</p>
                  <p className={styles.precio}>$ {item.precio ? item.precio : "120.000"}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.arrowRight} onClick={nextSlide1}>
        &#9654;
      </button>
    </div>
    <div className={styles.carouselContainerResponsive2}>
      <button className={styles.arrowLeft} onClick={prevSlide2}>
        &#9664; 
      </button>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselInner}
          style={{
            transform: `translateX(-${index2 * 60}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {destacadoPics.map((item: any) => (
            <div className={styles.slide} key={item.id}>
              <Link href={`/calzado-${item.nombre}`}>
                <Image
                  className={styles.imagenDestacada}
                  width={1000}
                  height={1000}
                  src={item.imagen}
                  alt="zapatilla"
                />
                <div className={styles.infoZapas}>
                  <p className={styles.nombre}>{item.nombre}</p>
                  <p className={styles.genero}>{item.genero ? item.genero : "zapatillas jordan para hombre"}</p>
                  <p className={styles.precio}>$ {item.precio ? item.precio : "120.000"}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.arrowRight} onClick={nextSlide2}>
        &#9654;
      </button>
    </div>
    </>
  );
};

export default DestacadoImagenes;
