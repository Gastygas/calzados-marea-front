import styles from "./Section-2.module.css"
import LoMasNuevo from "../LoMasNuevo/LoMasNuevo";

const Section2 = () => {
    return (
        <div className={styles.containerSection2}>
      <div>
        <h3>
          Lo Mas Nuevo
        </h3>
      </div>
      <LoMasNuevo />
    </div>
    )
};

export default Section2;