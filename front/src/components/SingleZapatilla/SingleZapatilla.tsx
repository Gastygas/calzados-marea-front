"use client";
import styles from "./SingleZapatilla.module.css";
import { useEffect, useState } from "react";
import SinglePrimeraSeccion from "../SinglePrimeraSeccion/SinglePrimeraSeccion";
import { IZapatilla } from "@/helpers/interfaces";
import { FindOneByNameAction } from "@/actions/zapatillas.actions";
import ZapatillaNotFound from "../ZapatillaNotFound/ZapatillaNotFound";
import Loading from "@/helpers/loading";

const SingleZapatilla = ({ nombreZapatilla }: { nombreZapatilla: string }) => {
  const [zapatillaEncontrada, setZapatillaEncontrada] = useState<IZapatilla>();
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getZapatilla = async () => {
      setIsLoading(true); 

      let zapatilla: IZapatilla | null = await FindOneByNameAction(
        nombreZapatilla
      );
      
      if(!zapatilla) {
        zapatilla = await FindOneByNameAction(
          nombreZapatilla.toLocaleLowerCase()
        );
      }

      if (zapatilla) {
        setZapatillaEncontrada(zapatilla);
        setImagenSeleccionada(zapatilla.fotos[0]);
      }
      setIsLoading(false)
    };
    getZapatilla();
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
  if(isLoading) return <Loading/>
  if(!zapatillaEncontrada) return <ZapatillaNotFound />
  
  return (
        <div className={styles.container}>
          <SinglePrimeraSeccion
            toggleSelectedImage={toggleSelectedImage}
            zapatillaEncontrada={zapatillaEncontrada}
            toggleSelectedTalle={toggleSelectedTalle}
            selectedTalle={selectedTalle}
            imagenSeleccionada={imagenSeleccionada}
          />
        </div>
  );
};

export default SingleZapatilla;
