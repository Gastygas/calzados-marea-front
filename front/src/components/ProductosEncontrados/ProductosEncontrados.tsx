import Link from "next/link";
import { IDestacadoPics } from "../Section-1/Section-1";
import styles from "./ProductosEncotrados.module.css"
import Image from "next/image";

interface Props {
  productos: IDestacadoPics[];
}

const ProductosEncontrados = ({productos}: Props) => {
    return (
        <div className={styles.productosContainer}>
            {productos.map((item: any) => (
              <div className={styles.slide} key={item.id}>
                <Link href={`/calzado-${item.nombre}`}>
                  <Image
                    className={styles.imagenDestacada}
                    width={1000}
                    src={item.imagen}
                    alt="zapatilla"
                  />
                  <div className={styles.infoZapas}>
                    <p className={styles.nombre}>{item.nombre}</p>
                    <p className={styles.genero}>
                      {item.genero
                        ? item.genero
                        : "zapatillas jordan para hombre"}
                    </p>
                    <p className={styles.precio}>
                      $ {item.precio ? item.precio : "120.000"}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
    )
};

export default ProductosEncontrados