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
        {zapatillaEncontrada.imagen.map((im: string, i: number) => {
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
        />
      </div>
    </div>
  );
};

export default ImagenesSingle;