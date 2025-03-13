import { LogoCM } from "@/utils/LogoCM";
import styles from "./HeaderForm.module.css";

const HeaderForm = ({
  toggleEnviarWhatsappForm,
}: {
  toggleEnviarWhatsappForm: () => void;
}) => {
  return (
    <>
      <div className={styles.headerForm}>
        <LogoCM />
        <h4>completa el formulario</h4>
        <button onClick={toggleEnviarWhatsappForm}>cerrar</button>
      </div>
      <div className={styles.headerFormResponsive}>
        <div className={styles.divHeaderResponsive}>
          <LogoCM />
          <button onClick={toggleEnviarWhatsappForm}>cerrar</button>
        </div>
        <h4>completa el formulario</h4>
      </div>
    </>
  );
};

export default HeaderForm;
