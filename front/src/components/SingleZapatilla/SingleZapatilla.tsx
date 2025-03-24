import styles from "./SingleZapatilla.module.css";
import jordan from "../../../assets/jordan.jpg";
import nike from "../../../assets/air force white.jpg";
import dou from "../../../assets/taylor-smith-aDZ5YIuedQg-unsplash.jpg";
import Section1 from "../Section-1/Section-1";
import { useState } from "react";
import BotonSingleZapatilla from "../BotonSingleZapatilla/BotonSingleZapatilla";
import WhatsappForm from "../WhatsappForm/WhatsappForm";
import SinglePrimeraSeccion from "../SinglePrimeraSeccion/SinglePrimeraSeccion";

const SingleZapatilla = ({ nombreZapatilla }: { nombreZapatilla: string }) => {
  const nuevoPics: any = [
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
  const [isOpenEnviarWhatsapp, setIsOpenEnviarWhatsapp] =
    useState<boolean>(false);

  const toggleEnviarWhatsappForm = () => {
    setIsOpenEnviarWhatsapp(!isOpenEnviarWhatsapp);
  };
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
          <div className={`${isOpenEnviarWhatsapp ? styles.divOpacity : ""}`}>
            <SinglePrimeraSeccion toggleSelectedImage={toggleSelectedImage} zapatillaEncontrada={zapatillaEncontrada} toggleSelectedTalle={toggleSelectedTalle} selectedTalle={selectedTalle} imagenSeleccionada={imagenSeleccionada}/>
            <BotonSingleZapatilla
              isOpenEnviarWhatsapp={isOpenEnviarWhatsapp}
              toggleEnviarWhatsappForm={toggleEnviarWhatsappForm}
              selectedTalle={selectedTalle}
            />
            <Section1 />
          </div>
          <WhatsappForm
            isOpenEnviarWhatsapp={isOpenEnviarWhatsapp}
            toggleEnviarWhatsappForm={toggleEnviarWhatsappForm}
            talle={selectedTalle}
            zapatillaName={zapatillaEncontrada.nombre}
          />
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
