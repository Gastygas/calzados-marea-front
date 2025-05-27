'use client'
import { LogoCM } from "@/utils/LogoCM";
import styles from "./Footer.module.css";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.headerFooter}>
        <LogoCM width={80} />
        <h4>Calzados Marea</h4>
      </div>
      <div className={styles.socialMedia}>
        <a target="blank" href="/">
          <FaInstagram className={styles.logos} />
        </a>
        <button
          onClick={() => {
            window.location.href = `https://api.whatsapp.com/send?phone=541164960034`;
          }}
        >
          <FaWhatsapp className={styles.logos} />
        </button>
        <a target="_blank" href="/">
          <FaTiktok className={styles.logos} />
        </a>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2025 Calzados Marea. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
