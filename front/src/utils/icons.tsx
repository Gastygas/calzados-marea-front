import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./icons.module.css"


export const CustomPrevArrow = (props: any) => {
    const {style, onClick } = props;
    return (
      <IoIosArrowBack
        className={styles.arrowLeft}
        style={{
          ...style,
        }}
        onClick={onClick}
      />
    );
  };
  
  export const CustomNextArrow = (props: any) => {
    const { style, onClick } = props;
    return (
      <IoIosArrowForward
        className={styles.arrowRight}
        style={{
            ...style,
        }}
        onClick={onClick}
      />
    );
  };