import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>Header</header>

      {children}
      <div>footer</div>
    </div>
  );
};

export default Layout;
