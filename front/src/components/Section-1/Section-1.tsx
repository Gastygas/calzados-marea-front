import styles from "./Section-1.module.css";
import jordan from "../../../assets/jordan.jpg";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DestacadoImagenes from "../DestacadoImagenes/DestacadoImagenes";

export interface IDestacadoPics{
    imagen:StaticImageData,
    id:number
}

const destacadoPics:IDestacadoPics[] = [
  {
    imagen: jordan,
    id: 1,
  },
  {
    imagen: jordan,
    id: 2,
  },
  {
    imagen: jordan,
    id: 3,
  },
  {
    imagen: jordan,
    id: 5,
  },
  {
    imagen: jordan,
    id: 4,
  },
  {
    imagen: jordan,
    id: 6,
  },
  {
    imagen: jordan,
    id: 7,
  },
];

const Section1 = () => {
  return (
    <div className={styles.containerSection1}>
      <div >
        <h3 style={{fontSize:"20px",marginBottom:"3vw",marginTop:"2vw",marginLeft:"2vw"}}>Destacado</h3>
      </div>
        <DestacadoImagenes destacadoPics={destacadoPics} />
    </div>
  );
};

export default Section1;
