"use client";
import styles from "./MenuNavbar.module.css";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Logo from "../../../assets/cm logo.png";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import { useState } from "react";

const MenuNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.containerMenuNavbar}>
      <div className={`${styles.divList} ${isOpen ? styles.open : ""}`}>
        <div className={styles.headerResponsive}>
          <Image src={Logo} alt="Logo Calzados Marea" width={40} />
          <button onClick={toggleMenu}>
            Cerrar
          </button>
        </div>
        <ul className={styles.list}>
          <Link href="/calzado-hombre" className={styles.items}>
            <li className={styles.item}>Hombre</li>
            <MdNavigateNext size={30} className={styles.nextIcon} />
          </Link>
          <Link href="/calzado-mujer" className={styles.items}>
            <li className={styles.item}>Mujer</li>
            <MdNavigateNext size={30} className={styles.nextIcon} />
          </Link>
          <Link href="/calzado-niño" className={styles.items}>
            <li className={styles.item}>Niño/a</li>
            <MdNavigateNext size={30} className={styles.nextIcon} />
          </Link>
          <Link href="/calzado-nuevo" className={styles.items}>
            <li className={styles.item}>Nuevo</li>
            <MdNavigateNext size={30} className={styles.nextIcon} />
          </Link>
        </ul>
      </div>
      <div className={styles.divIcons}>
        <FaBars size={30} className={styles.bars} onClick={toggleMenu} />
        <FiSearch size={30} className={styles.lupa} />
      </div>
    </div>
  );
};

export default MenuNavbar;
