import styles from "./MenuNavbarIcons.module.css";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import BarraDeBusqueda from "../BarraDeBusqueda/BarraDeBusqueda";


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
        <BarraDeBusqueda toggleLupa={toggleLupa}/>
      </div>
    </div>
  );
};

export default MenuNavbarIcons;
