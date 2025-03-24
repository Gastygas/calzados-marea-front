"use client";
import styles from "./MenuNavbar.module.css";
import Logo from "../../../assets/cm logo.png";
import Image from "next/image";
import { useState } from "react";
import MenuNavbarIcons from "../MenuNavbarIcons/MenuNavbarIcons";
import MenuNavbarList from "../MenuNavbarList/MenuNavbarList";

const MenuNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLupa, setIsOpenLupa] = useState(false)
  const [isOpenShopping, setIsOpenShopping] = useState(false)

  const toggleLupa = ():void => {
    setIsOpenLupa(!isOpenLupa);
  };
  const toggleMenu = ():void => {
    setIsOpen(!isOpen);
  };
  const toggleShopping = ():void => {
    setIsOpenShopping(!isOpenShopping);
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
        <MenuNavbarList/>
      </div>
      <MenuNavbarIcons toggleMenu={toggleMenu} toggleLupa={toggleLupa} isOpenLupa={isOpenLupa} toggleShopping={toggleShopping} isOpenShopping={isOpenShopping} />
    </div>
  );
};

export default MenuNavbar;
