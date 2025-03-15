import styles from "./Navbar.module.css";
import MenuNavbar from "../MenuNavbar/MenuNavbar";
import { LogoCM } from "@/utils/LogoCM";
import Header from "../Header/Header";

const Navbar = () => {
  return (
    <div className={styles.divNav}>
      <Header />
      <div className={styles.containerNav}>
        <div>
          <LogoCM width={40} />
        </div>
        <MenuNavbar />
      </div>
    </div>
  );
};

export default Navbar;
