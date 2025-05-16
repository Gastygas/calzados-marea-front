import { LogoCM } from "@/utils/LogoCM";
import styles from "./WhatsappForm.module.css";
import { FormEvent, useEffect, useState } from "react";
import {
  validateName,
  validatePhone,
  validateProvincia,
  validateCiudad,
} from "@/helpers/validation";
import HeaderForm from "../HeaderForm/Headerform";

interface Props {
  isOpenEnviarWhatsapp: boolean;
  toggleEnviarWhatsappForm: () => void;
  talles: string[];
  zapatillasNames: string[];
}

const WhatsappForm = ({
  isOpenEnviarWhatsapp,
  toggleEnviarWhatsappForm,
  talles,
  zapatillasNames,
}: Props) => {
  const initialData = {
    name: "",
    surname: "",
    telephone: "",
    provincia: "",
    ciudad: "",
  };
  const initialDirty = {
    name: false,
    surname: false,
    telephone: false,
    provincia: false,
    ciudad: false,
  };
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(initialData);
  const [dirty, setDirty] = useState(initialDirty);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("enviar");
    window.location.href = `https://api.whatsapp.com/send?phone=541164960034&text=
        // Nombre:${data.name}%20${data.surname}
        // Provincia:${data.provincia}
        // Ciudad:${data.ciudad}
        // Zapatillas:${zapatillasNames.map((zap: string) => zap)}
        // Talles: ${talles}`;
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
      provincia: validateProvincia(data.provincia),
      telephone: validatePhone(data.telephone),
      ciudad: validateCiudad(data.ciudad),
    });
  }, [data]);
  return (
    <div className={`${isOpenEnviarWhatsapp ? styles.overlay : ""}`}>
      <div
        className={`${styles.containerForm} ${
          isOpenEnviarWhatsapp ? styles.open : ""
        }`}
      >
        <HeaderForm toggleEnviarWhatsappForm={toggleEnviarWhatsappForm} />
        <div className="overflow-y-scroll max-h-[70vh]">
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
              <label htmlFor="provincia">Provincia</label>
              <input
                type="text"
                name="provincia"
                id="provincia"
                value={data.provincia}
                onChange={handleChange}
              />
              {dirty.provincia ? (
                <p className={styles.inputError}>{error.provincia}</p>
              ) : (
                ""
              )}
            </div>
            <div className={styles.formDiv}>
              <label htmlFor="ciudad">Ciudad</label>
              <input
                type="text"
                name="ciudad"
                id="ciudad"
                value={data.ciudad}
                onChange={handleChange}
              />
              {dirty.ciudad ? (
                <p className={styles.inputError}>{error.ciudad}</p>
              ) : (
                ""
              )}
            </div>
            <div className={styles.formDiv}>
              <label htmlFor="zapatillaName">Zapatillas</label>
              <input
                className={styles.inputChoosen}
                type="text"
                name="zapatillaName"
                id="zapatillaName"
                value={zapatillasNames.map((zap: string) => zap)}
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
                value={talles.map((zap: string) => zap)}
                disabled={true}
              />
            </div>
            {error.name ||
            error.surname ||
            error.telephone ||
            error.provincia ||
            error.ciudad ? (
              <button className={styles.buttonError} disabled={true}>
                Enviar a Whatsapp
              </button>
            ) : (
              <button>Enviar a Whatsapp </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default WhatsappForm;
