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
      {/* ================= DESKTOP ================= */}
      <div className="flex flex-row justify-around relative min-h-[150vh] mb-[7vw] max-md:hidden">
        <ImagenesSingle
          imagenSeleccionada={imagenSeleccionada}
          toggleSelectedImage={toggleSelectedImage}
          zapatillaEncontrada={zapatillaEncontrada}
        />

        <div className="pt-[2vw] flex flex-col relative">
          <div>
            <div className="w-full text-left">
              <p className="text-[24px] font-semibold capitalize tracking-[0.5px]">
                {zapatillaEncontrada.nombre}
              </p>

              <p className="text-[#525252] text-[19.5px] capitalize">
                {zapatillaEncontrada.genero === "unisex"
                  ? `zapatillas ${zapatillaEncontrada.marca} unisex`
                  : `zapatillas ${zapatillaEncontrada.marca} para ${zapatillaEncontrada.genero}`}
              </p>

              {zapatillaEncontrada.oferta ? (
                <div>
                  <div className="flex">
                    <p className="text-[13px] md:text-[20px] font-bold mr-3">
                      Mayor:
                    </p>
                    <p className="text-[13px] md:text-[20px] text-[#525252] font-bold line-through mr-3">
                      $ {zapatillaEncontrada.oldPrecioMayor}
                    </p>
                    <p className="text-[13px] md:text-[20px] text-[#056505] font-bold">
                      $ {zapatillaEncontrada.precioMayor}
                    </p>
                  </div>

                  <div className="flex">
                    <p className="text-[13px] md:text-[20px] font-bold mr-3">
                      Menor:
                    </p>
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
                    <p className="text-[13px] md:text-[20px] font-bold mr-3">
                      Mayor:
                    </p>
                    <p className="text-[13px] md:text-[20px] text-[#056505] font-bold">
                      $ {zapatillaEncontrada.precioMayor}
                    </p>
                  </div>

                  <div className="flex">
                    <p className="text-[13px] md:text-[20px] font-bold mr-3">
                      Menor:
                    </p>
                    <p className="text-[13px] md:text-[20px] text-[#056505] font-bold">
                      $ {zapatillaEncontrada.precioMenor}
                    </p>
                  </div>
                </>
              )}

              <p className="text-[#525252] text-[19.5px] capitalize">
                Stock disponible:{" "}
                <span className="font-bold text-black">
                  {zapatillaEncontrada.stock}
                </span>
              </p>
            </div>
          </div>

          <div className="sticky md:top-36">
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

      {/* ================= MOBILE ================= */}
      <div className="hidden max-md:block h-screen">
        <div className="pt-[2vw] flex flex-col relative">
          <div>
            <div className="w-full text-left">
              <p className="text-[24px] font-semibold capitalize tracking-[0.5px]">
                {zapatillaEncontrada.nombre}
              </p>

              <p className="text-[#525252] text-[19.5px] capitalize">
                {zapatillaEncontrada.genero === "unisex"
                  ? `zapatillas ${zapatillaEncontrada.marca} unisex`
                  : `zapatillas ${zapatillaEncontrada.marca} para ${zapatillaEncontrada.genero}`}
              </p>

              {zapatillaEncontrada.oferta ? (
                <div>
                  <div className="flex">
                    <p className="text-[13px] md:text-[17px] font-bold mr-3">
                      Mayor:
                    </p>
                    <p className="text-[13px] md:text-[17px] text-[#525252] font-bold line-through mr-3">
                      $ {zapatillaEncontrada.oldPrecioMayor}
                    </p>
                    <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                      $ {zapatillaEncontrada.precioMayor}
                    </p>
                  </div>

                  <div className="flex">
                    <p className="text-[13px] md:text-[17px] font-bold mr-3">
                      Menor:
                    </p>
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
                    <p className="text-[13px] md:text-[17px] font-bold mr-3">
                      Mayor:
                    </p>
                    <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                      $ {zapatillaEncontrada.precioMayor}
                    </p>
                  </div>

                  <div className="flex">
                    <p className="text-[13px] md:text-[17px] font-bold mr-3">
                      Menor:
                    </p>
                    <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                      $ {zapatillaEncontrada.precioMenor}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {zapatillaEncontrada.fotos.length > 1 ? (
            <Slider {...settingsSingle}>
              {zapatillaEncontrada.fotos.map((zapa: string, i: any) => (
                <div
                  key={i}
                  className="mt-[1vw] h-[50vw] w-[50vw]"
                >
                  <Image
                    className="object-cover w-[75vw] h-[50vw]"
                    src={zapa}
                    width={1000}
                    height={1000}
                    alt="foto de zapatilla"
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="mt-[1vw] h-[50vw] w-[50vw]">
              <Image
                className="object-cover w-[75vw] h-[50vw]"
                src={zapatillaEncontrada.fotos[0]}
                width={1000}
                height={1000}
                alt="foto de zapatilla"
                loading="lazy"
              />
            </div>
          )}

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
      <div className="-mt-32 mb-10 md:mt-0 md:mb-0">
        {/* ================= DESCRIPCIÓN ================= */}
          <div className="p-7 md:-mt-[80vh]">
            <div className="min-h-[200px]">
              <h4 className="font-normal text-3xl">Descripción</h4>

              <div className="max-w-[550px]">
                {zapatillaEncontrada.description ? (
                  <p className="mt-5 text-xl w-full break-words whitespace-pre-wrap">
                    {zapatillaEncontrada.description}
                  </p>
                ) : (
                  <p className="mt-5 text-xl w-full break-words whitespace-pre-wrap">
                    No tenemos descripción para esta zapatilla todavia.
                  </p>
                )}
              </div>
            </div>
          </div>
        <div>
          <div className="ml-7 w-80 rounded-xl overflow-hidden shadow-md bg-white text-gray-800">
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
    </div>

  );
};

export default SinglePrimeraSeccion;