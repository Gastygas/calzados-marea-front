import styles from "./BotonSingleZapatilla.module.css"

const BotonSingleZapatilla = ({selectedTalle,toggleEnviarWhatsappForm,isOpenEnviarWhatsapp} : {selectedTalle:string|null, toggleEnviarWhatsappForm:() => void,isOpenEnviarWhatsapp:boolean}) => {
    return (
        <div className={styles.containerButon}
        >
           <div className={styles.divButton}>
            {!isOpenEnviarWhatsapp ? (selectedTalle ? (
                <button onClick={toggleEnviarWhatsappForm}>Enviar a Whatsapp</button>
            ) : (
                <button disabled >Selecciona el talle</button>
            )) : ""}
            </div> 
        </div>
    );
};

export default BotonSingleZapatilla