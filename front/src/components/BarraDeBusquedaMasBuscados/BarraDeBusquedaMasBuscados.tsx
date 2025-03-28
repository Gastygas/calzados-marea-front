import styles from "./BarraDeBusquedaMasBuscados.module.css"
import Link from "next/link";

const BarraDeBusquedaMasBuscados = ({toggleLupa, toggleShopping, isOpenShopping}:{toggleLupa?:() => void; toggleShopping?:() => void; isOpenShopping?:boolean}) => {
    return (
        <div className={styles.masBuscado}>
        <h4>Lo mas buscado</h4>
        <Link href={`/buscar/jordan`} onClick={isOpenShopping ? toggleShopping : toggleLupa}>Jordan</Link>
        <Link href={`/buscar/nike`} onClick={isOpenShopping ? toggleShopping : toggleLupa}>Nike</Link>
        <Link href={`/buscar/adidas`} onClick={isOpenShopping ? toggleShopping : toggleLupa}>Adidas</Link>
        <Link href={`/buscar/puma`} onClick={isOpenShopping ? toggleShopping : toggleLupa}>Puma</Link>
        <Link href={`/buscar/hombre`} onClick={isOpenShopping ? toggleShopping : toggleLupa}>Hombre</Link>
      </div>
    )
};

export default BarraDeBusquedaMasBuscados
