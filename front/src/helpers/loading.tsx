import Image from "next/image";
import styles from "./loading.module.css"

const Loading = () => {
    return(
        <div className={styles.loading}>
            <Image src={`https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif`} loading="lazy" alt="loading..." width={100} height={100} unoptimized />
        </div>
    )
};

export default Loading;