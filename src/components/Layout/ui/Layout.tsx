import {type FC, type ReactNode, useRef} from "react";
import {ProgressBar} from "../../ProgressBar";
import styles from "./Layout.module.css";

interface ILayoutProps {
    children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({children}) => {
    const headerRef = useRef<HTMLDivElement>(null)

    return (
        <div className={styles.layout}>
            <header ref={headerRef} className={styles.header}>Header</header>
            <ProgressBar elementRef={headerRef} />
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>footer</footer>
        </div>
    );
};
