import {forwardRef} from "react";
import styles from "./Header.module.css";


export const Header = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <header ref={ref} className={styles.header}>
            <span>Header</span>
            <div className={styles.button_wrapper}>
            <button className={styles.button}>Theme</button>
            <button className={styles.button}>Login</button>

            </div>
        </header>
    );
});

Header.displayName = 'Header';
