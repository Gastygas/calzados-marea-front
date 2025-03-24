import Link from "next/link";
import styles from "./ProductosEncotrados.module.css"
import Image from "next/image";
import { IZapatilla } from "@/helpers/interfaces";

const ProductosEncontrados = ({zapatillasEncontradas} : {zapatillasEncontradas : IZapatilla[]}) => {

    return (
        <div className={styles.productosContainer}>
            {zapatillasEncontradas.map((item: any) => (
              <div className={styles.slide} key={item.id}>
                <Link href={`/calzado-${item.nombre}`}>
                  <Image
                    className={styles.imagenDestacada}
                    width={100}
                    height={100}
                    src={item.fotos[0]}
                    alt="zapatilla"
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
            ))}
        </div>
    )
};

export default ProductosEncontrados