import styles from "./Section-1.module.css"
import jordan from "../../../assets/jordan.jpg"
import Image from "next/image";

const Section1 = () => {
    return(
        <div>
            <div>
                <h3>Destacado</h3>
            </div>
            <div>
                <Image src={jordan} alt="zapatilla jordan" ></Image>
            </div>
        </div>
    )
};

export default Section1;