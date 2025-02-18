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

  const nextSlide = () => {
    if (index < destacadoPics.length - 5) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
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
                  width={500}
                  height={500}
                  src={item.imagen}
                  alt="zapatilla"
                  />
                <p className={styles.nombre}>{item.nombre}</p>
                <p className={styles.genero}>{item.genero}</p>
                <p className={styles.precio}>{item.precio}</p>
                </Link>
              </div>
          ))}
        </div>
      </div>
      <button className={styles.arrowRight} onClick={nextSlide}>
        &#9654;
      </button>
    </div>
  );
};

export default DestacadoImagenes;
