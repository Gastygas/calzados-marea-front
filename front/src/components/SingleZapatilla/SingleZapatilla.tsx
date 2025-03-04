import styles from "./SingleZapatilla.module.css";
import jordan from "../../../assets/jordan.jpg";
import nike from "../../../assets/air force white.jpg";
import dou from "../../../assets/taylor-smith-aDZ5YIuedQg-unsplash.jpg";
import { IDestacadoPics } from "../Section-1/Section-1";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "@/utils/icons";
import { useState } from "react";

const SingleZapatilla = ({ nombreZapatilla }: { nombreZapatilla: string }) => {
  const nuevoPics: IDestacadoPics[] | any = [
    {
      imagen: [nike, jordan, dou],
      id: 1,
      nombre: "air jordan 1 low SE",
    },
    {
      imagen: [nike, jordan, dou, jordan, dou, jordan],
      id: 2,
      nombre: "nike air force 1 white",
    },
    {
      imagen: [nike, jordan, dou],
      id: 31,
      nombre: "air force 1 pink",
    },
    {
      imagen: [nike, jordan, dou, jordan],
      id: 4,
      nombre: "air force 1 white pink",
    },
  ];
  const zapatillaEncontrada = nuevoPics.find(
    (zap: any) => zap.nombre === nombreZapatilla
  );

  const [imagenSeleccionada, setImagenSeleccionada] = useState(
    zapatillaEncontrada.imagen[0]
  );

  const toggleSelectedImage = (img:string) => {
    setImagenSeleccionada(img)
  };

  return (
    <div className={styles.container}>
      {zapatillaEncontrada ? (
        <>
          <div>
            <div className={styles.infoZapas}>
              <p className={styles.nombre}>{zapatillaEncontrada.nombre}</p>
              <p className={styles.genero}>
                {zapatillaEncontrada.genero
                  ? zapatillaEncontrada.genero
                  : "zapatillas jordan para hombre"}
              </p>
              <p className={styles.precio}>
                ${" "}
                {zapatillaEncontrada.precio
                  ? zapatillaEncontrada.precio
                  : "120.000"}
              </p>
              <p className={styles.genero}>Hasta 6x 20.000 sin interes</p>
            </div>
          </div>
          <div className={styles.divImagenesZapatillas}>
            <div className={styles.secundariasImagenes}>
              {zapatillaEncontrada.imagen.map((im: string, i: number) => {
                if (i >= 4) {
                  return;
                }
                return (
                  <div className={styles.divImgSec} onClick={() => toggleSelectedImage(im)}>
                    <Image
                      className={styles.imgSec}
                      src={im}
                      alt="imagen secundaria"
                    />
                  </div>
                );
              })}
            </div>
            <div className={styles.principalImagen}>
              <Image
                className={styles.imgPri}
                src={imagenSeleccionada}
                alt="principal imagen"
              />
            </div>
          </div>
          <div className={styles.selecTalleDiv}>
            <h4>seleccionar talle</h4>
          </div>
        </>
      ) : (
        <div>
          <p>Error: Zapatilla no encontrada</p>
        </div>
      )}
    </div>
  );
};

export default SingleZapatilla;
