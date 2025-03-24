import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";
import styles from "./MenuNavbarList.module.css";
const MenuNavbarList = () => {
  return (
    <ul className={styles.list}>
      <Link href="/buscar/hombre" className={styles.items}>
        <li className={styles.item}>Hombre</li>
        <MdNavigateNext size={30} className={styles.nextIcon} />
      </Link>
      <Link href="/buscar/mujer" className={styles.items}>
        <li className={styles.item}>Mujer</li>
        <MdNavigateNext size={30} className={styles.nextIcon} />
      </Link>
      <Link href="/buscar/nino" className={styles.items}>
        <li className={styles.item}>Niño/a</li>
        <MdNavigateNext size={30} className={styles.nextIcon} />
      </Link>
      <Link href="/buscar/nuevo" className={styles.items}>
        <li className={styles.item}>Nuevo</li>
        <MdNavigateNext size={30} className={styles.nextIcon} />
      </Link>
    </ul>
  );
};

export default MenuNavbarList;
