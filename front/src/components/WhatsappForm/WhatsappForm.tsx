import { LogoCM } from "@/utils/LogoCM";
import styles from "./WhatsappForm.module.css";
import { FormEvent, useEffect, useState } from "react";
import {
  validateName,
  validatePhone,
  validateZipCode,
} from "@/helpers/validation";
import HeaderForm from "../HeaderForm/Headerform";

interface Props {
  isOpenEnviarWhatsapp: boolean;
  toggleEnviarWhatsappForm: () => void;
  talle: string | null;
  zapatillaName: string;
}

const WhatsappForm = ({
  isOpenEnviarWhatsapp,
  toggleEnviarWhatsappForm,
  talle,
  zapatillaName,
}: Props) => {
  const initialData = { name: "", surname: "", telephone: "", zipCode: "" };
  const initialDirty = {
    name: false,
    surname: false,
    telephone: false,
    zipCode: false,
  };
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(initialData);
  const [dirty, setDirty] = useState(initialDirty);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("enviar");
    window.location.href = `https://api.whatsapp.com/send?phone=541136021862&text=
        // Nombre:${data.name}%20${data.surname}
        // Codigo Postal:${data.zipCode}
        // Zapatilla:${zapatillaName}
        // Talle: ${talle}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setDirty({ ...dirty, [e.target.name]: true });
  };

  useEffect(() => {
    setError({
      name: validateName(data.name),
      surname: validateName(data.surname),
      zipCode: validateZipCode(data.zipCode),
      telephone: validatePhone(data.telephone),
    });
  }, [data]);
  return (
    <div
      className={`${styles.containerForm} ${
        isOpenEnviarWhatsapp ? styles.open : ""
      }`}
    >
    <HeaderForm toggleEnviarWhatsappForm={toggleEnviarWhatsappForm} />
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formDiv}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={handleChange}
            />
            {dirty.name ? (
              <p className={styles.inputError}>{error.name}</p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.formDiv}>
            <label htmlFor="surname">Apellido</label>
            <input
              type="text"
              name="surname"
              id="surname"
              value={data.surname}
              onChange={handleChange}
            />
            {dirty.surname ? (
              <p className={styles.inputError}>{error.surname}</p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.formDiv}>
            <label htmlFor="telephone">Telefono</label>
            <input
              type="text"
              name="telephone"
              id="telephone"
              value={data.telephone}
              onChange={handleChange}
            />
            {dirty.telephone ? (
              <p className={styles.inputError}>{error.telephone}</p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.formDiv}>
            <label htmlFor="zipCode">Codigo Postal</label>
            <input
              type="text"
              name="zipCode"
              id="zipCode"
              value={data.zipCode}
              onChange={handleChange}
            />
            {dirty.zipCode ? (
              <p className={styles.inputError}>{error.zipCode}</p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.formDiv}>
            <label htmlFor="zapatillaName">Zapatilla</label>
            <input
              className={styles.inputChoosen}
              type="text"
              name="zapatillaName"
              id="zapatillaName"
              value={zapatillaName}
              disabled={true}
            />
          </div>
          <div className={styles.formDiv}>
            <label htmlFor="talle">Talle</label>
            <input
              className={styles.inputChoosen}
              type="text"
              name="talle"
              id="talle"
              value={talle ? talle : ""}
              disabled={true}
            />
          </div>
          {error.name || error.surname || error.telephone || error.zipCode ? (
            <button className={styles.buttonError} disabled={true}>
              Enviar a Whatsapp
            </button>
          ) : (
            <button>Enviar a Whatsapp </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default WhatsappForm;
