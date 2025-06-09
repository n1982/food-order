import type { Ref } from "react";
import { LoginButton } from "../../LoginButton/";
import { ThemeButton } from "../../ThemeButton";
import styles from "./Header.module.css";

type HeaderProps = {
  ref?: Ref<HTMLDivElement>;
};

export const Header = ({ ref }: HeaderProps) => {
  return (
    <header ref={ref} className={styles.header}>
      <span>Header</span>
      <div className={styles.button_wrapper}>
        <LoginButton />
        <ThemeButton />
      </div>
    </header>
  );
};
