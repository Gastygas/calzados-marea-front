import Link from "next/link";
import styles from "./ProductosEncotrados.module.css";
import Image from "next/image";
import { IZapatilla } from "@/helpers/interfaces";
import BusquedaNotFound from "../BusquedaNotFound/BusquedaNotFound";
import Loading from "@/helpers/loading";

const ProductosEncontrados = ({
  zapatillasEncontradas,
  isLoading
}: {
  zapatillasEncontradas: IZapatilla[];
  isLoading:boolean;
}) => {

  if(isLoading){
    return <Loading />
  }

  return (
    <div className={styles.productosContainer}>
      {zapatillasEncontradas.length === 0 ? (
        <BusquedaNotFound />
      ) : (
        zapatillasEncontradas.map((item: IZapatilla) => (
          <div className={styles.slide} key={item.id}>
            <Link href={`/calzado/${item.nombre}`}>
              <Image
                className={styles.imagenDestacada}
                width={1000}
                height={1000}
                src={item.fotos[0]}
                alt={`zapatilla ${item.nombre}`}
                loading="lazy"
              />
              <div className={styles.infoZapas}>
                <p className={styles.nombre}>{item.nombre}</p>
                <p className={styles.genero}>
                  {item.genero === "unisex"
                    ? `zapatillas ${item.marca} unisex`
                    : `zapatillas ${item.marca} para ${item.genero}`}
                </p>
                {item.oferta ? (
                        <div>
                          <div className="flex">
                            <p className="text-[13px] md:text-[17px] font-bold  mr-3">Mayor: </p>
                            <p className="text-[13px] md:text-[17px] text-[#525252] font-bold line-through mr-3">
                              $ {item.oldPrecioMayor}
                            </p>
                            <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                              $ {item.precioMayor}
                            </p>
                          </div>
                          <div className="flex">
                            <p className="text-[13px] md:text-[17px] font-bold  mr-3">Menor: </p>
                            <p className="text-[13px] md:text-[17px] text-[#525252] font-bold line-through mr-3">
                              $ {item.oldPrecioMenor}
                            </p>
                            <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                              $ {item.precioMenor}
                            </p>
                          </div>
                        </div>

                      ) : (
                        <>
                          <div className="flex">
                            <p className="text-[13px] md:text-[17px] font-bold  mr-3">Mayor: </p>
                            <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                              $ {item.precioMayor}
                            </p>
                          </div>
                          <div className="flex">
                            <p className="text-[13px] md:text-[17px] font-bold  mr-3">Menor: </p>
                            <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                              $ {item.precioMenor}
                            </p>
                          </div>
                        </>
                      )}
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductosEncontrados;
