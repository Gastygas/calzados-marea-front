import Sections from "../Sections/Sections";
import styles from "./Section-3.module.css"

const Section3 = () => {
 return (
        <div className={styles.containerSection2}>
      <div>
        <h3>
          Las Mejores Ofertas
        </h3>
      </div>
      <Sections type="oferta"/>
    </div>
    )
};

export default Section3