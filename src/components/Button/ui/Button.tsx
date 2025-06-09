import { type FC, useContext } from "react";

import classNames from "classnames";

import styles from "./Button.module.css";
import { ThemeContext } from "../../App/model/ThemeContext.ts";

interface IButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = ({
  title,
  disabled,
  className,
  onClick,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <button
        className={classNames(className, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
        disabled={disabled}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};
