import styles from "./Section-1.module.css";
import Sections from "../Sections/Sections";


const Section1 = () => {
  return (
    <div className={styles.containerSection1}>
      <div>
        <h3>Lo mas Destacado</h3>
      </div>
      <Sections type="destacado"/>
    </div>
  );
};

export default Section1;
