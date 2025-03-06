import styles from "./SingleZapatilla.module.css";
import jordan from "../../../assets/jordan.jpg";
import nike from "../../../assets/air force white.jpg";
import dou from "../../../assets/taylor-smith-aDZ5YIuedQg-unsplash.jpg";
import Section1, { IDestacadoPics } from "../Section-1/Section-1";
import Image from "next/image";
import { CustomNextArrow, CustomPrevArrow } from "@/utils/icons";
import { useState } from "react";
import SeleccionarTalle from "../SeleccionarTalle/SeleccionarTalle";
import ImagenesSingle from "../ImagenesSingle/ImagenesSingle";
import BotonSingleZapatilla from "../BotonSingleZapatilla/BotonSingleZapatilla";

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
      imagen: [nike, jordan, dou, jordan, dou, jordan],
      id: 4,
      nombre: "air force 1 white pink",
      talle: ["36", "37", "38", "40", "41", "42", "47"],
    },
  ];
  const zapatillaEncontrada = nuevoPics.find(
    (zap: any) => zap.nombre === nombreZapatilla
  );

  const [imagenSeleccionada, setImagenSeleccionada] = useState(
    zapatillaEncontrada.imagen[0]
  );
  const [selectedTalle, setSelectedTalle] = useState<string | null>(null);

  const toggleSelectedTalle = (talle: string) => {
    setSelectedTalle(talle);
  };
  const toggleSelectedImage = (img: string) => {
    setImagenSeleccionada(img);
  };

  return (
    <div className={styles.container}>
      {zapatillaEncontrada ? (
        <>
          <div className={styles.containerImgYTalle}>
            <ImagenesSingle
              imagenSeleccionada={imagenSeleccionada}
              toggleSelectedImage={toggleSelectedImage}
              zapatillaEncontrada={zapatillaEncontrada}
            />
            <div className={styles.titleAndTalleDiv}>
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
                  <p className={styles.genero}>
                    Hasta 6x{" "}
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      {" "}
                      20.000
                    </span>{" "}
                    sin interes
                  </p>
                </div>
              </div>
              <SeleccionarTalle
                toggleSelectedTalle={toggleSelectedTalle}
                selectedTalle={selectedTalle}
                tallesValidos={zapatillaEncontrada.talle}
              />
            </div>
          </div>
          <BotonSingleZapatilla selectedTalle={selectedTalle}/>
          <Section1/>
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
