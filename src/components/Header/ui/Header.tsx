import {forwardRef} from "react";
import styles from "./Header.module.css";


export const Header = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <header ref={ref} className={styles.header}>
            <span>Header</span>
            <button className={styles.button}>Login</button>
        </header>
    );
});

Header.displayName = 'Header';
