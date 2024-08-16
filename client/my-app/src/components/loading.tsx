import { PulseLoader } from "react-spinners"
import styles from "@/app/pages/interface/style.module.css"


export const MyLoading = () => {
    return (
        <div className={styles.loading}>
            <PulseLoader color="#3de59d"/>
        </div>
    )
}
