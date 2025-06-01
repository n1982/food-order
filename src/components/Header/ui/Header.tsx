import {forwardRef} from "react";
import styles from "./Header.module.css";


export const Header = forwardRef<HTMLDivElement> ((_, ref) => {
    return (
        <header  ref={ref} className={styles.header}>Header</header>
    );
});

Header.displayName = 'Header';
