import { forwardRef } from "react";
import { LoginButton } from "../../LoginButton/ui/LoginButton.tsx";
import styles from "./Header.module.css";
import { ThemeButton } from "../../ThemeButton";

export const Header = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <header ref={ref} className={styles.header}>
      <span>Header</span>
      <div className={styles.button_wrapper}>
        <LoginButton />
        <ThemeButton />
      </div>
    </header>
  );
});

Header.displayName = "Header";
