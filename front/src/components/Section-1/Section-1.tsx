import styles from "./Section-1.module.css";
import jordan from "../../../assets/jordan.jpg";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DestacadoImagenes from "../DestacadoImagenes/DestacadoImagenes";

export interface IDestacadoPics {
  imagen: StaticImageData;
  id: number;

  nombre: string;
}

const destacadoPics: IDestacadoPics[] = [
  {
    imagen: jordan,
    id: 1,
    nombre: "hola",
  },
  {
    imagen: jordan,
    id: 2,
    nombre: "manda",
  },
  {
    imagen: jordan,
    id: 31,
    nombre: "manda",
  },
  {
    imagen: jordan,
    id: 113,
    nombre: "hola",
  },
  {
    imagen: jordan,
    id: 22,
    nombre: "manda",
  },
  {
    imagen: jordan,
    id: 3123,
    nombre: "manda",
  },
  {
    imagen: jordan,
    id: 312313233,
    nombre: "manda",
  },
  {
    imagen: jordan,
    id: 13,
    nombre: "hola",
  },
  {
    imagen: jordan,
    id: 21231,
    nombre: "manda",
  },
  {
    imagen: jordan,
    id: 3123424,
    nombre: "manda",
  },
];

const Section1 = () => {
  return (
    <div className={styles.containerSection1}>
      <div>
        <h3>
          Lo mas Destacado
        </h3>
      </div>
      <DestacadoImagenes destacadoPics={destacadoPics} />
    </div>
  );
};

export default Section1;
