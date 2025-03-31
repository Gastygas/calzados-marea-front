import styles from "./SeleccionarTalle.module.css";

interface Props {
  tallesValidos: string[];
  toggleSelectedTalle: (talle:string) => void;
  selectedTalle:string[];

}

const SeleccionarTalle = ({ tallesValidos,toggleSelectedTalle,selectedTalle }: Props) => {

  const talles = [
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47"
  ];

  return (
    <div className={styles.selecTalleDiv}>
      <div className={styles.divTitle}>
        <h4>Seleccionar talle</h4>
      </div>
      <div className={styles.containerTalle}>
        {talles.map((talle) => {
          return tallesValidos.includes(talle) ? (
            <div
              key={talle}
              className={`${
                selectedTalle.includes(talle) ? styles.talleSelected : styles.divTalle
              }`}
              onClick={() => toggleSelectedTalle(talle)}
            >
              {talle}
            </div>
          ) : (
            <div key={talle} className={styles.disableTalle}>
              {talle}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeleccionarTalle;
