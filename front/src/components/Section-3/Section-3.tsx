import Sections from "../Sections/Sections";
import styles from "./Section-3.module.css"

const Section3 = () => {
 return (
        <div className={styles.containerSection2}>
      <div>
        <h3>
          Ofertas
        </h3>
      </div>
      <Sections type="nuevo"/>
    </div>
    )
};

export default Section3