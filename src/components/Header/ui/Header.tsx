import {forwardRef, useContext} from "react";
import styles from "./Header.module.css";
import {Button} from "../../Button";
import {ThemeContext} from "../../App/model/ThemeContext.ts";
import {useAuth} from "../../App/model/useAuth.ts";


export const Header = forwardRef<HTMLDivElement>((_, ref) => {
    const {toggleTheme} = useContext(ThemeContext)
    const {setUser, isUserLogin} = useAuth()



    return (
        <header ref={ref} className={styles.header}>
            <span>Header</span>
            <div className={styles.button_wrapper}>
                <Button className={styles.button} title={'Theme'} onClick={toggleTheme}/>
                {!isUserLogin && <Button className={styles.button} title={'Вход'} onClick={() => setUser('nick')}/>}
                {isUserLogin && <Button className={styles.button} title={'Выход'} onClick={() => setUser(null)}/>}
            </div>
        </header>
    );
});

Header.displayName = 'Header';
