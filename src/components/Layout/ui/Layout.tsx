import type { FC, ReactNode } from "react";

import styles from "./Layout.module.css";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.layout_header}>Header</header>
      <main className={styles.layout_content}>{children}</main>
      <footer className={styles.layout_footer}>footer</footer>
    </div>
  );
};
