import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>Header</header>
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
