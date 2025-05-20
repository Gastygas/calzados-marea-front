"use client";
import styles from "./SingleZapatilla.module.css";
import { useEffect, useState } from "react";
import SinglePrimeraSeccion from "../SinglePrimeraSeccion/SinglePrimeraSeccion";
import { IZapatilla } from "@/helpers/interfaces";
import { FindOneByNameAction } from "@/actions/zapatillas.actions";
import ZapatillaNotFound from "../ZapatillaNotFound/ZapatillaNotFound";

const SingleZapatilla = ({ nombreZapatilla }: { nombreZapatilla: string }) => {
  const [zapatillaEncontrada, setZapatillaEncontrada] = useState<IZapatilla>();
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string>("");

  useEffect(() => {
    const getZapatillas = async () => {
      const zapatilla: IZapatilla | null = await FindOneByNameAction(
        nombreZapatilla
      );

      if (zapatilla) {
        setZapatillaEncontrada(zapatilla);
        setImagenSeleccionada(zapatilla.fotos[0]);
      }
    };
    getZapatillas();
  }, []);

  const [selectedTalle, setSelectedTalle] = useState<string[]>([]);

  const toggleSelectedTalle = (talle: string) => {
    setSelectedTalle((prevTalles) =>
      prevTalles.includes(talle)
        ? prevTalles.filter((t) => t !== talle) 
        : [...prevTalles, talle] 
    );
  };
  const toggleSelectedImage = (img: string) => {
    setImagenSeleccionada(img);
  };
  
  if(!zapatillaEncontrada) return <ZapatillaNotFound />
  
  return (
    <>
        <div className={styles.container}>
          <SinglePrimeraSeccion
            toggleSelectedImage={toggleSelectedImage}
            zapatillaEncontrada={zapatillaEncontrada}
            toggleSelectedTalle={toggleSelectedTalle}
            selectedTalle={selectedTalle}
            imagenSeleccionada={imagenSeleccionada}
          />
        </div>
        
    </>
  );
};

export default SingleZapatilla;
