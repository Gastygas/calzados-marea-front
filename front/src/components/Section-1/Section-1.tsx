import styles from "./Section-1.module.css";
import jordan from "../../../assets/jordan.jpg";
import nike from "../../../assets/air force white.jpg";
import dou from "../../../assets/taylor-smith-aDZ5YIuedQg-unsplash.jpg";
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
    nombre: "air jordan 1 low SE",
  },
  {
    imagen: nike,
    id: 2,
    nombre: "nike air force 1 white",
  },
  {
    imagen: dou,
    id: 31,
    nombre: "air force 1 white pink",
  },
  {
    imagen: jordan,
    id: 113,
    nombre: "air force 1 white pink",
  },
  {
    imagen: nike,
    id: 22,
    nombre: "air force 1 white pink",
  },
  {
    imagen: dou,
    id: 3123,
    nombre: "air force 1 white pink",
  },
  {
    imagen: jordan,
    id: 312313233,
    nombre: "air force 1 white pink",
  },
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
];

const Section1 = () => {
  return (
    <div className={styles.containerSection1}>
      <div>
        <h3>
          Destacados
        </h3>
      </div>
      <DestacadoImagenes destacadoPics={destacadoPics} />
    </div>
  );
};

export default Section1;
