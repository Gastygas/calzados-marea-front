import { TALLES_KIDS, TALLES_NUMERICOS, TALLES_ROPA } from "@/helpers/talles";
import styles from "./SeleccionarTalle.module.css";

interface Props {
  tallesValidos: string[];
  toggleSelectedTalle: (talle: string) => void;
  selectedTalle: string[];
  genero: string;
  tipo: string | undefined;
}

const SeleccionarTalle = ({
  tallesValidos,
  toggleSelectedTalle,
  selectedTalle,
  genero,
  tipo,
}: Props) => {

  if (tipo === "otros") return null;


  let tallesBase: string[] = [];

  if (tipo === "ropa") {
    tallesBase = TALLES_ROPA;
  } else {
    tallesBase =
      genero === "niño" || genero === "niña"
        ? TALLES_KIDS
        : TALLES_NUMERICOS;
  }

  return (
    <div className={styles.selecTalleDiv}>
      <div className={styles.divTitle}>
        <h4>Seleccionar talle</h4>
      </div>
      <div className={styles.containerTalle}>
        {tallesBase.map(
          (talle) => {
            return tallesValidos.includes(talle) ? (
              <div
                key={talle}
                className={
                  selectedTalle.includes(talle)
                    ? styles.talleSelected
                    : styles.divTalle
                }
                onClick={() => toggleSelectedTalle(talle)}
              >
                {talle}
              </div>
            ) : (
              <div key={talle} className={styles.disableTalle}>
                {talle}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default SeleccionarTalle;
