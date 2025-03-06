import styles from "./BotonSingleZapatilla.module.css"

const BotonSingleZapatilla = ({selectedTalle} : {selectedTalle:string|null}) => {
    return (
        <div className={styles.containerButon}
        >
           <div className={styles.divButton}>
            {selectedTalle ? (
                <button>Enviar a Whatsapp</button>

            ) : (
                <button disabled >Selecciona el talle</button>
            )}
            </div> 
        </div>
    );
};

export default BotonSingleZapatilla