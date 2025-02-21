import styles from "./BarraDeBusquedaMasBuscados.module.css"
import Link from "next/link";

const BarraDeBusquedaMasBuscados = () => {
    return (
        <div className={styles.masBuscado}>
        <h4>Lo mas buscado</h4>
        <Link href={`/calzado-jordan`}>Jordan</Link>
        <Link href={`/calzado-nike`}>Nike</Link>
        <Link href={`/calzado-adidas`}>Adidas</Link>
        <Link href={`/calzado-puma`}>Puma</Link>
        <Link href={`/calzado-hombre`}>Hombre</Link>
      </div>
    )
};

export default BarraDeBusquedaMasBuscados
