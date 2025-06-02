import {forwardRef} from "react";
import styles from "./Header.module.css";
import {Button} from "../../Button";


export const Header = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <header ref={ref} className={styles.header}>
            <span>Header</span>
            <div className={styles.button_wrapper}>
                <Button className={styles.button} title={'Theme'}/>
                <Button className={styles.button} title={'Login'}/>
            </div>
        </header>
    );
});

Header.displayName = 'Header';
