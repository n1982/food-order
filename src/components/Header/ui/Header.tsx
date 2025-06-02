import {forwardRef, useContext} from "react";
import styles from "./Header.module.css";
import {Button} from "../../Button";
import {ThemeContext} from "../../App/model/ThemeContext.ts";


export const Header = forwardRef<HTMLDivElement>((_, ref) => {
    const {toggleTheme} = useContext(ThemeContext)

    return (
        <header ref={ref} className={styles.header}>
            <span>Header</span>
            <div className={styles.button_wrapper}>
                <Button className={styles.button} title={'Theme'} onClick={toggleTheme}/>
                <Button className={styles.button} title={'Login'}/>
            </div>
        </header>
    );
});

Header.displayName = 'Header';
