"use client";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { settings } from "@/utils/settingsCarrousel";
import { useEffect, useState } from "react";
import { IZapatilla } from "@/helpers/interfaces";
import Loading from "@/helpers/loading";
import { FindSpecificsAction } from "@/actions/zapatillas.actions";

const Sections = ({ type }: { type: string }) => {
  const [zapatillaEncontradas, setZapatillasEncontradas] = useState<
    IZapatilla[] | []
  >([]);

  useEffect(() => {
    const getZapatillas = async () => {
      const zapatillas: IZapatilla[] | null = await FindSpecificsAction(type);

      if (zapatillas !== null) {
        setZapatillasEncontradas(zapatillas);
      }
    };

    getZapatillas();
  }, []);

  return (
    <>
      <div>
        <div className="mx-auto w-[90%]">
          {zapatillaEncontradas.length === 0 ? (
            <Loading />
          ) : (
            <Slider {...settings}>
              {zapatillaEncontradas.map((item: IZapatilla) => (
                <div key={item.id}>
                  <Link href={`/calzado/${item.nombre}`}>
                    <Image
                      className="h-36 w-36 md:w-64 md:h-[300px] rounded-md object-center"
                      width={1000}
                      height={1000}
                      src={item.fotos[0]}
                      alt={`zapatilla ${item.nombre}`}
                      loading="lazy"
                    />
                    <div className="w-full text-start p-[1vw]">
                      <p className="text-sm md:text-[19px] font-semibold capitalize">
                        {item.nombre}
                      </p>
                      <p className="text-[10px] w-[80%] md:w-full md:text-base text-[#525252] capitalize">
                        {item.genero === "unisex"
                          ? `zapatillas ${item.marca} unisex`
                          : `zapatillas ${item.marca} para ${item.genero}`}
                      </p>
                      {type === "oferta" ? (
                        <div className="flex">
                        <p className="text-[13px] md:text-[17px] text-[#525252] font-bold line-through mr-3">
                          $ {item.oldPrice}
                        </p>
                        <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                          $ {item.precio}
                        </p>
                        </div>
                      ) : (
                        <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                          $ {item.precio}
                        </p>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default Sections;
