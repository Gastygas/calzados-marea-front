import ImagenesSingle from "../ImagenesSingle/ImagenesSingle";
import SeleccionarTalle from "../SeleccionarTalle/SeleccionarTalle";
import styles from "./SinglePrimeraSeccion.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settingsSingle } from "@/utils/settingsCarrousel";
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
                        <div>
                          <div className="flex">
                            <p className="text-[13px] md:text-[20px] font-bold  mr-3">Mayor: </p>
                            <p className="text-[13px] md:text-[20px] text-[#525252] font-bold line-through mr-3">
                              $ {zapatillaEncontrada.oldPrecioMayor}
                            </p>
                            <p className="text-[13px] md:text-[20px] text-[#056505] font-bold">
                              $ {zapatillaEncontrada.precioMayor}
                            </p>
                          </div>
                          <div className="flex">
                            <p className="text-[13px] md:text-[20px] font-bold  mr-3">Menor: </p>
                            <p className="text-[13px] md:text-[20px] text-[#525252] font-bold line-through mr-3">
                              $ {zapatillaEncontrada.oldPrecioMenor}
                            </p>
                            <p className="text-[13px] md:text-[20px] text-[#056505] font-bold">
                              $ {zapatillaEncontrada.precioMenor}
                            </p>
                          </div>
                        </div>

                      ) : (
                        <>
                          <div className="flex">
                            <p className="text-[13px] md:text-[20px] font-bold  mr-3">Mayor: </p>
                            <p className="text-[13px] md:text-[20px] text-[#056505] font-bold">
                              $ {zapatillaEncontrada.precioMayor}
                            </p>
                          </div>
                          <div className="flex">
                            <p className="text-[13px] md:text-[20px] font-bold  mr-3">Menor: </p>
                            <p className="text-[13px] md:text-[20px] text-[#056505] font-bold">
                              $ {zapatillaEncontrada.precioMenor}
                            </p>
                          </div>
                        </>
                      )}
              {/* <p className={styles.genero}>
                Hasta 6x{" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {" "}
                  20.000
                </span>{" "}
                sin interes
              </p> */}
              <p className={styles.genero}>
                Stock disponible:{" "}
                <span className="font-bold text-black">
                  {zapatillaEncontrada.stock}
                </span>
              </p>
            </div>
          </div>
          <div className="sticky md:top-36 ">
            <div className="bg-white rounded-md shadow-md p-4">
              <SeleccionarTalle
                genero={zapatillaEncontrada.genero}
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
                        <div>
                          <div className="flex">
                            <p className="text-[13px] md:text-[17px] font-bold  mr-3">Mayor: </p>
                            <p className="text-[13px] md:text-[17px] text-[#525252] font-bold line-through mr-3">
                              $ {zapatillaEncontrada.oldPrecioMayor}
                            </p>
                            <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                              $ {zapatillaEncontrada.precioMayor}
                            </p>
                          </div>
                          <div className="flex">
                            <p className="text-[13px] md:text-[17px] font-bold  mr-3">Menor: </p>
                            <p className="text-[13px] md:text-[17px] text-[#525252] font-bold line-through mr-3">
                              $ {zapatillaEncontrada.oldPrecioMenor}
                            </p>
                            <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                              $ {zapatillaEncontrada.precioMenor}
                            </p>
                          </div>
                        </div>

                      ) : (
                        <>
                          <div className="flex">
                            <p className="text-[13px] md:text-[17px] font-bold  mr-3">Mayor: </p>
                            <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                              $ {zapatillaEncontrada.precioMayor}
                            </p>
                          </div>
                          <div className="flex">
                            <p className="text-[13px] md:text-[17px] font-bold  mr-3">Menor: </p>
                            <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                              $ {zapatillaEncontrada.precioMenor}
                            </p>
                          </div>
                        </>
                      )}
              {/* <p className={styles.genero}>
                Hasta 6x{" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {" "}
                  20.000
                </span>{" "}
                sin interes
              </p> */}
            </div>
          </div>
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
          <SeleccionarTalle
            genero={zapatillaEncontrada.genero}
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
      <div className="p-7 sm:mt-44  md:-mt-[80vh]">
        <div className="min-h-[200px]">
          <h4 className="font-normal text-3xl">Descripción</h4>
          <div className="max-w-[550px] ">
            {zapatillaEncontrada.description ? (
              <p className="mt-5 text-xl w-full break-words whitespace-pre-wrap">
                {" "}
                {zapatillaEncontrada.description}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="w-80 rounded-xl overflow-hidden shadow-md bg-white text-gray-800 ">
          <div className="grid grid-cols-2 divide-x divide-gray-200 w-fit">
            <div className="bg-gray-50 px-4 py-2 space-y-4 font-semibold text-sm text-black">
              <p>Color</p>
              <p>Marca</p>
              <p>Género</p>
              <p>Material</p>
              <p>Tipo</p>
            </div>
            <div className="px-4 py-2 space-y-4 text-sm capitalize">
              <p>{zapatillaEncontrada.color}</p>
              <p>{zapatillaEncontrada.marca}</p>
              <p>{zapatillaEncontrada.genero}</p>
              <p>{zapatillaEncontrada.material}</p>
              <p>{zapatillaEncontrada.tipo || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePrimeraSeccion;
