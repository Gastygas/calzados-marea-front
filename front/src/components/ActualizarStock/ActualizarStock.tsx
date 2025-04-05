import styles from "./ActualizarStock.module.css"

const ActualizarStock = ({toggleActualizarStock}:{toggleActualizarStock:() => void}) => {
    return (
        <div>
            actualizar stock!
            <button onClick={toggleActualizarStock}>Atras</button>
        </div>
    )
}

export default ActualizarStock;