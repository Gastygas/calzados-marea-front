import styles from "./Section-1.module.css";
import { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LoMasDestacado from "../LoMasDestacado/LoMasDestacado";

//width: 1080px i need a change

export interface IDestacadoPics {
  imagen: StaticImageData;
  id: number;
  nombre: string;
}



const Section1 = () => {
  return (
    <div className={styles.containerSection1}>
      <div>
        <h3>
          Lo mas Destacado
        </h3>
      </div>
      <LoMasDestacado />
    </div>
  );
};

export default Section1;
