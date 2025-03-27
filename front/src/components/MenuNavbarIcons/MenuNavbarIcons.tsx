import styles from "./MenuNavbarIcons.module.css";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import BarraDeBusqueda from "../BarraDeBusqueda/BarraDeBusqueda";
import ShoppingCart from "../ShoppingCart/ShoppingCart";


const MenuNavbarIcons = ({
  toggleMenu,
  toggleLupa,
  toggleShopping,
  isOpenLupa,
  isOpenShopping,
}: {
  toggleMenu: () => void;
  toggleLupa: () => void;
  toggleShopping: () => void;
  isOpenLupa: boolean;
  isOpenShopping: boolean;
}) => {
  return (
    <div className={styles.divIcons}>
      <FiSearch size={25} className={styles.icons} onClick={toggleLupa} />
      <FiShoppingCart size={25} className={styles.icons} onClick={toggleShopping} />
      <FaBars size={30} className={styles.bars} onClick={toggleMenu} />
      <div className={`${styles.lupaDiv} ${isOpenLupa ? styles.open : ""}`}>
        <BarraDeBusqueda toggleLupa={toggleLupa}/>
      </div>
      <div className={`${styles.shoppingDiv} ${isOpenShopping ? styles.open : ""}`} >
        <ShoppingCart toggleShopping={toggleShopping} />
      </div>
    </div>
  );
};

export default MenuNavbarIcons;
