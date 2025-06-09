import {forwardRef, useContext} from "react";
import styles from "./Header.module.css";
import {Button} from "../../Button";
import {UserContext} from "../../App/model/UserContext.ts";
import {ThemeContext} from "../../App/model/ThemeContext.ts";


export const Header = forwardRef<HTMLDivElement>((_, ref) => {
    const {toggleTheme} = useContext(ThemeContext)
    const {user, toggleUser} = useContext(UserContext)


    return (
        <header ref={ref} className={styles.header}>
            <span>Header</span>
            <div className={styles.button_wrapper}>
                <Button className={styles.button} title={'Theme'} onClick={toggleTheme}/>
                {!user.isAuthenticated &&
                    <Button className={styles.button} title={'Вход'} onClick={() => toggleUser()}/>}
                {user.userName && <Button className={styles.button} title={'Выход'} onClick={() => toggleUser()}/>}
            </div>
        </header>
    );
});

Header.displayName = 'Header';
