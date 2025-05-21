import type { ReactNode } from "react";

import "./Layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='layout'>
      <header className='layout-header'>Header</header>
      <main className='layout-content'>{children}</main>
      <footer className='layout-footer'>footer</footer>
    </div>
  );
};

export default Layout;
