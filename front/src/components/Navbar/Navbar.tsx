import styles from "./Navbar.module.css";
import MenuNavbar from "../MenuNavbar/MenuNavbar";
import { LogoCM } from "@/utils/LogoCM";
import Header from "../Header/Header";
import Header2 from "../Header-2/Header-2";

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
      <Header2 />
    </div>
  );
};

export default Navbar;
