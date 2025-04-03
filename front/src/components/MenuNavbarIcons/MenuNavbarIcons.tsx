import styles from "./MenuNavbarIcons.module.css";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import BarraDeBusqueda from "../BarraDeBusqueda/BarraDeBusqueda";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useContext } from "react";
import { AuthContext } from "@/utils/authContext";


const MenuNavbarIcons = ({
  toggleMenu,
  toggleLupa,
  toggleShopping,
  toggleEnviarWhatsappForm,
  isOpenLupa,
  isOpenShopping,
  isOpenEnviarWhatsapp,
}: {
  toggleMenu: () => void;
  toggleLupa: () => void;
  toggleShopping: () => void;
  toggleEnviarWhatsappForm: () => void;
  isOpenLupa: boolean;
  isOpenShopping: boolean;
  isOpenEnviarWhatsapp: boolean
}) => {
  const shoppingContext = useContext(AuthContext);
  const cartCount = shoppingContext?.shoppingCart.length ?? 0;

  return (
    
    <div className={styles.divIcons}>
      <FiSearch size={25} className={styles.icons} onClick={toggleLupa} />
      <FiShoppingCart size={25} className={styles.icons} onClick={toggleShopping} />
      {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
      <FaBars size={30} className={styles.bars} onClick={toggleMenu} />
      <div className={`${styles.lupaDiv} ${isOpenLupa ? styles.open : ""}`}>
        <BarraDeBusqueda toggleLupa={toggleLupa}/>
      </div>
      <div className={`${styles.shoppingDiv} ${isOpenShopping ? styles.open : ""}`} >
        <ShoppingCart isOpenShopping={isOpenShopping} isOpenEnviarWhatsapp={isOpenEnviarWhatsapp} toggleShopping={toggleShopping} toggleEnviarWhatsappForm={toggleEnviarWhatsappForm} />
      </div>
    </div>
  );
};

export default MenuNavbarIcons;
