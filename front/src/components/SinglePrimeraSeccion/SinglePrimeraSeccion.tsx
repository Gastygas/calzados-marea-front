import ImagenesSingle from "../ImagenesSingle/ImagenesSingle";
import SeleccionarTalle from "../SeleccionarTalle/SeleccionarTalle";
import styles from "./SinglePrimeraSeccion.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings3 } from "@/utils/settingsCarrousel";
import Image from "next/image";
import { IZapatilla } from "@/helpers/interfaces";
import BotonSingleZapatilla from "../BotonSingleZapatilla/BotonSingleZapatilla";

interface Props {
  zapatillaEncontrada: IZapatilla;
  toggleSelectedTalle: (talle: string) => void;
  selectedTalle: string | null;
  imagenSeleccionada: any;
  toggleSelectedImage: (img: any) => void;
  isOpenEnviarWhatsapp:boolean;
  toggleEnviarWhatsappForm: () => void;
}

const SinglePrimeraSeccion = ({
  zapatillaEncontrada,
  toggleSelectedTalle,
  selectedTalle,
  imagenSeleccionada,
  toggleSelectedImage,
  isOpenEnviarWhatsapp,
  toggleEnviarWhatsappForm,
}: Props) => {
  return (
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
                {zapatillaEncontrada.genero === "unisex"
                  ? `zapatillas ${zapatillaEncontrada.marca} unisex`
                  : `zapatillas ${zapatillaEncontrada.marca} para ${zapatillaEncontrada.genero}`}
              </p>
              <p className={styles.precio}>$ {zapatillaEncontrada.precio}</p>
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
          <BotonSingleZapatilla
            isOpenEnviarWhatsapp={isOpenEnviarWhatsapp}
            toggleEnviarWhatsappForm={toggleEnviarWhatsappForm}
            selectedTalle={selectedTalle}
          />
        </div>
      </div>
      <div className={styles.containerImgYTalleResponsive}>
        <div className={styles.titleAndTalleDiv}>
          <div>
            <div className={styles.infoZapas}>
              <p className={styles.nombre}>{zapatillaEncontrada.nombre}</p>
              <p className={styles.genero}>
                {zapatillaEncontrada.genero === "unisex"
                  ? `zapatillas ${zapatillaEncontrada.marca} unisex`
                  : `zapatillas ${zapatillaEncontrada.marca} para ${zapatillaEncontrada.genero}`}
              </p>
              <p className={styles.precio}>$ {zapatillaEncontrada.precio}</p>
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
          <Slider {...settings3}>
            {zapatillaEncontrada.fotos.map((zapa: any, i: any) => (
              <div className={styles.divImagenSingle} key={i}>
                <Image
                  className={styles.imagenSingle}
                  src={zapa}
                  alt="zapatilla"
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </Slider>

          <SeleccionarTalle
            toggleSelectedTalle={toggleSelectedTalle}
            selectedTalle={selectedTalle}
            tallesValidos={zapatillaEncontrada.talle}
          />
          <BotonSingleZapatilla
            isOpenEnviarWhatsapp={isOpenEnviarWhatsapp}
            toggleEnviarWhatsappForm={toggleEnviarWhatsappForm}
            selectedTalle={selectedTalle}
          />
        </div>
      </div>
    </>
  );
};

export default SinglePrimeraSeccion;
