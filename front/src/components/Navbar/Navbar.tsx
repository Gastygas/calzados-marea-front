import styles from "./Navbar.module.css"
import MenuNavbar from "../MenuNavbar/MenuNavbar";
import { LogoCM } from "@/utils/LogoCM";

const Navbar = () => {

    return(
        <div className={styles.containerNav}>
            <div>
                <LogoCM/>
            </div>
            <MenuNavbar/>
        </div>
    )

}

export default Navbar;