"use client";
import styles from "./SingleZapatilla.module.css";
import { useEffect, useState } from "react";
import WhatsappForm from "../WhatsappForm/WhatsappForm";
import SinglePrimeraSeccion from "../SinglePrimeraSeccion/SinglePrimeraSeccion";
import { IZapatilla } from "@/helpers/interfaces";
import {
  FindOneByNameAction,
} from "@/actions/zapatillas.actions";

const SingleZapatilla = ({ nombreZapatilla }: { nombreZapatilla: string }) => {
  const [zapatillaEncontrada, setZapatillaEncontrada] = useState<IZapatilla>({
    nombre: "none",
    id: "none",
    precio: "none",
    marca: "nike",
    talle: ["none"],
    color: "none",
    destacado: false,
    nuevo: false,
    fotos: ["https://none.jpg"],
    genero: "none",
  });
  const [imagenSeleccionada, setImagenSeleccionada] = useState(
    zapatillaEncontrada.fotos[0]
  );

  useEffect(() => {
    const getZapatillas = async () => {
      const zapatilla: IZapatilla | null = await FindOneByNameAction(
        nombreZapatilla
      );

      if (zapatilla !== null) {
        setZapatillaEncontrada(zapatilla);
        setImagenSeleccionada(zapatilla.fotos[0]);
      }
    };

    getZapatillas();
  }, []);

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
      {!(zapatillaEncontrada.id === "none") ? (
        <>
          <div className={`${isOpenEnviarWhatsapp ? styles.divOpacity : ""}`}>
            <SinglePrimeraSeccion
              toggleSelectedImage={toggleSelectedImage}
              zapatillaEncontrada={zapatillaEncontrada}
              toggleSelectedTalle={toggleSelectedTalle}
              selectedTalle={selectedTalle}
              imagenSeleccionada={imagenSeleccionada}
              isOpenEnviarWhatsapp={isOpenEnviarWhatsapp}
              toggleEnviarWhatsappForm={toggleEnviarWhatsappForm}
            />
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
