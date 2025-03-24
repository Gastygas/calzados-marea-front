import styles from "./Section-1.module.css";
import LoMasDestacado from "../LoMasDestacado/LoMasDestacado";
import { Suspense } from "react";


const Section1 = () => {
  return (
    <div className={styles.containerSection1}>
      <div>
        <h3>Lo mas Destacado</h3>
      </div>
      <Suspense>
        <LoMasDestacado />
      </Suspense>
    </div>
  );
};

export default Section1;
