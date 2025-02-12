import Image from "next/image";
import Logo from "../../../assets/cm logo.png"
import styles from "./Navbar.module.css"
import MenuNavbar from "../MenuNavbar/MenuNavbar";

const Navbar = () => {

    return(
        <div className={styles.containerNav}>
            <div className="">
                <Image src={Logo} alt="Logo Calzados Marea" width={40}/>
            </div>
            <MenuNavbar/>
        </div>
    )

}

export default Navbar;