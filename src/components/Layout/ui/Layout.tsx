import type { FC, ReactNode } from "react";

import styles from "./Layout.module.css";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>Header</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
};
