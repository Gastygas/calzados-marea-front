import styles from "./BarraDeBusquedaMasBuscados.module.css"
import Link from "next/link";

const BarraDeBusquedaMasBuscados = ({toggleLupa, toggleShopping, isOpenShopping}:{toggleLupa?:() => void; toggleShopping?:() => void; isOpenShopping?:boolean}) => {
    return (
        <div className={styles.masBuscado}>
        <h4>Lo mas buscado</h4>
        <Link href={`/buscar/oferta`} onClick={isOpenShopping ? toggleShopping : toggleLupa}>Oferta</Link>
        <Link href={`/buscar/todo`} onClick={isOpenShopping ? toggleShopping : toggleLupa}>Todo</Link>
        <Link href={`/buscar/jordan`} onClick={isOpenShopping ? toggleShopping : toggleLupa}>Jordan</Link>
        <Link href={`/buscar/nike`} onClick={isOpenShopping ? toggleShopping : toggleLupa}>Nike</Link>
        <Link href={`/buscar/adidas`} onClick={isOpenShopping ? toggleShopping : toggleLupa}>Adidas</Link>
      </div>
    )
};

export default BarraDeBusquedaMasBuscados
