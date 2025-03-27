import Image from "next/image";
import styles from "./ImagenesSingle.module.css";

const ImagenesSingle = ({
  zapatillaEncontrada,
  toggleSelectedImage,
  imagenSeleccionada,
}: any) => {
  return (
    <div className={styles.divImagenesZapatillas}>
      <div className={styles.secundariasImagenes}>
        {zapatillaEncontrada.fotos.map((im: string, i: number) => {
          if (i >= 5) {
            return;
          }
          return (
            <div
              key={i}
              className={styles.divImgSec}
              onClick={() => toggleSelectedImage(im)}
            >
              <Image
                className={styles.imgSec}
                src={im}
                alt="imagen secundaria"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
      <div className={styles.principalImagen}>
        <Image
          className={styles.imgPri}
          src={imagenSeleccionada}
          alt="principal imagen"
          width={1000}
          height={1000}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ImagenesSingle;
