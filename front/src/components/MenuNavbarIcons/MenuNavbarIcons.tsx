import styles from "./MenuNavbarIcons.module.css";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../../assets/cm logo.png";
import Link from "next/link";

const MenuNavbarIcons = ({
  toggleMenu,
  toggleLupa,
  isOpenLupa,
}: {
  toggleMenu: () => void;
  toggleLupa: () => void;
  isOpenLupa: boolean;
}) => {
  return (
    <div className={styles.divIcons}>
      <FaBars size={30} className={styles.bars} onClick={toggleMenu} />
      <FiSearch size={30} className={styles.lupa} onClick={toggleLupa} />
      <div className={`${styles.lupaDiv} ${isOpenLupa ? styles.open : ""}`}>
        <div className={styles.divBarraDeBusqueda}>
          <div className={styles.divLogo}>
            <Image src={Logo} alt="Logo Calzados Marea" width={50} />
          </div>
          <div className={styles.barraDeBusqueda}>
            <div className={styles.barraDiv}>
              <FiSearch size={25} />
              <input type="text" placeholder="¿Que estas buscando?" />
            </div>
            <button>Buscar</button>
          </div>
          <button onClick={toggleLupa} className={styles.cerrarButton}>
            Cerrar
          </button>
        </div>
        <div className={styles.masBuscado}>
          <h4>Lo mas buscado</h4>
          <Link href={`/calzado-jordan`}>Jordan</Link>
          <Link href={`/calzado-nike`}>Nike</Link>
          <Link href={`/calzado-adidas`}>Adidas</Link>
          <Link href={`/calzado-puma`}>Puma</Link>
          <Link href={`/calzado-hombre`}>Hombre</Link>
        </div>
      </div>
    </div>
  );
};

export default MenuNavbarIcons;
