import styles from "./SeleccionarTalle.module.css";

interface Props {
  tallesValidos: string[];
  toggleSelectedTalle: (talle: string) => void;
  selectedTalle: string[];
  genero: string;
}

const SeleccionarTalle = ({
  tallesValidos,
  toggleSelectedTalle,
  selectedTalle,
  genero,
}: Props) => {
  const talles = Array.from({ length: 45 - 34 + 1 }, (_, i) =>
    (34 + i).toString()
  );
  const tallesKid = Array.from({ length: 33 - 18 + 1 }, (_, i) =>
    (18 + i).toString()
  );

  return (
    <div className={styles.selecTalleDiv}>
      <div className={styles.divTitle}>
        <h4>Seleccionar talle</h4>
      </div>
      <div className={styles.containerTalle}>
        {(genero === "niño" || genero === "niña" ? tallesKid : talles).map(
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
