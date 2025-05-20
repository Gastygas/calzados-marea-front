import Link from "next/link";
import styles from "./ProductosEncotrados.module.css";
import Image from "next/image";
import { IZapatilla } from "@/helpers/interfaces";
import BusquedaNotFound from "../BusquedaNotFound/BusquedaNotFound";

const ProductosEncontrados = ({
  zapatillasEncontradas,
}: {
  zapatillasEncontradas: IZapatilla[];
}) => {
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
                <p className={styles.precio}>$ {item.precio}</p>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductosEncontrados;
