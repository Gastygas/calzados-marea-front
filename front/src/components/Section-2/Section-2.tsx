import styles from "./Section-2.module.css"
import Sections from "../Sections/Sections";

const Section2 = () => {
    return (
        <div className={styles.containerSection2}>
      <div>
        <h3>
          Lo Mas Nuevo
        </h3>
      </div>
      <Sections type="nuevo" />
    </div>
    )
};

export default Section2;