import ImagenesSingle from "../ImagenesSingle/ImagenesSingle";
import SeleccionarTalle from "../SeleccionarTalle/SeleccionarTalle";
import styles from "./SinglePrimeraSeccion.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings, settingsSingle } from "@/utils/settingsCarrousel";
import Image from "next/image";
import { IZapatilla } from "@/helpers/interfaces";
import BotonSingleZapatilla from "../BotonSingleZapatilla/BotonSingleZapatilla";

interface Props {
  zapatillaEncontrada: IZapatilla;
  toggleSelectedTalle: (talle: string) => void;
  selectedTalle: string[];
  imagenSeleccionada: any;
  toggleSelectedImage: (img: any) => void;
}

const SinglePrimeraSeccion = ({
  zapatillaEncontrada,
  toggleSelectedTalle,
  selectedTalle,
  imagenSeleccionada,
  toggleSelectedImage,
}: Props) => {
  return (
    <div>
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
               {zapatillaEncontrada.oferta ? (
                  <div className="flex items-center">
                    <p className="text-[14px] md:text-[17px] text-[#525252] font-bold line-through mr-3">
                      $ {zapatillaEncontrada.oldPrice || "10.000"}
                    </p>
                    <p className="text-[16px] md:text-[20px] text-[#056505] font-bold">
                      $ {zapatillaEncontrada.precio}
                    </p>
                  </div>
                ) : (
                  <p className="text-[14px] md:text-[20px] text-[#056505] font-bold">
                    $ {zapatillaEncontrada.precio}
                  </p>
                )}
              {/* <p className={styles.genero}>
                Hasta 6x{" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {" "}
                  20.000
                </span>{" "}
                sin interes
              </p> */}
          <p className={styles.genero}>Stock disponible: <span className="font-bold text-black">{zapatillaEncontrada.stock}</span></p>
            </div>
          </div>
          <SeleccionarTalle
            toggleSelectedTalle={toggleSelectedTalle}
            selectedTalle={selectedTalle}
            tallesValidos={zapatillaEncontrada.talle}
          />
          <BotonSingleZapatilla
            selectedTalle={selectedTalle}
            zapatilla={zapatillaEncontrada}
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
               {zapatillaEncontrada.oferta ? (
                  <div className="flex items-center">
                    <p className="text-[16px] md:text-[17px] text-[#525252] font-bold line-through mr-3">
                      $ {zapatillaEncontrada.oldPrice || "10.000"}
                    </p>
                    <p className="text-[20px] md:text-[17px] text-[#056505] font-bold">
                      $ {zapatillaEncontrada.precio}
                    </p>
                  </div>
                ) : (
                  <p className="text-[14px] md:text-[17px] text-[#056505] font-bold">
                    $ {zapatillaEncontrada.precio}
                  </p>
                )}
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
          <div className=" ">

          <Slider {...settingsSingle}>
            {zapatillaEncontrada.fotos.map((zapa: string, i: any) => (
              <div className={styles.divImagenSingle} key={i}>
                <Image
                  className={styles.imagenSingle}
                  src={zapa}
                  width={1000}
                  height={1000}
                  alt={`foto de zapatilla`}
                  loading="lazy"
                  />
              </div>
            ))}
          </Slider>
            </div>

          <SeleccionarTalle
            toggleSelectedTalle={toggleSelectedTalle}
            selectedTalle={selectedTalle}
            tallesValidos={zapatillaEncontrada.talle}
          />
          <BotonSingleZapatilla
            selectedTalle={selectedTalle}
            zapatilla={zapatillaEncontrada}
          />
        </div>
      </div>
      <div className="p-7 min-h-[400px]">
        <h4 className="font-normal text-3xl">Descripción</h4>
          {zapatillaEncontrada.description 
            ? (
          
        <p className="mt-5 text-xl"> {zapatillaEncontrada.description}
        </p>
        ): 
        (
          <p className="mt-10 text-xl text-center">Esta zapatilla no tiene descripción, mil disculpas</p>
        )
      }
      </div>
    </div>
  );
};

export default SinglePrimeraSeccion;
