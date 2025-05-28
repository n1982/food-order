import type { ReactNode } from "react";

import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <header className={styles.layout_header}>Header</header>
      <main className={styles.layout_content}>{children}</main>
      <footer className={styles.layout_footer}>footer</footer>
    </div>
  );
};

export default Layout;
