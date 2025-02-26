"use client";
import Image from "next/image";
import { IDestacadoPics } from "../Section-1/Section-1";
import styles from "./LoMasDestacado.module.css";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { CustomNextArrow, CustomPrevArrow } from "@/utils/icons";

interface Props {
  destacadoPics: IDestacadoPics[];
}

const LoMasDestacado = ({ destacadoPics }: Props) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide:0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide:0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide:0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  
  return (
    <>
      <div className={styles.containerDestacado1}>
        <div className="m-auto w-11/12">
          <Slider {...settings}>
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
