import { LogoCM } from "@/utils/LogoCM";
import styles from "./Footer.module.css";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.headerFooter}>
        <LogoCM width={80} />
        <h4>Calzados Marea</h4>
      </div>
      <div className={styles.socialMedia}>
        <Link target="_blank" href="">
          <FaInstagram className={styles.logos} />
        </Link>
        <Link target="_blank" href="">
          <FaFacebookF className={styles.logos} />
        </Link>
        <Link target="_blank" href="">
          <FaWhatsapp className={styles.logos} />
        </Link>
      </div>
      <div className={styles.copyright}>
      <p>&copy; 2025 Calzados Marea. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
