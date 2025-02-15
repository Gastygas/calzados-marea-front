import styles from "./MenuNavbarIcons.module.css";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

const MenuNavbarIcons = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <div className={styles.divIcons}>
      <FaBars size={30} className={styles.bars} onClick={toggleMenu} />
      <FiSearch size={30} className={styles.lupa} />
    </div>
  );
};

export default MenuNavbarIcons;
