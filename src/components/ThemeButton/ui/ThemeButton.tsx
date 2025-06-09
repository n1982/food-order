import { Button } from "../../Button";
import { useContext } from "react";
import { ThemeContext } from "../../App/model/ThemeContext.ts";
import styles from "./ThemeButton.module.css";

export const ThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Button className={styles.button} title={"Theme"} onClick={toggleTheme} />
  );
};
