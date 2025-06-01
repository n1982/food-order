import type { FC } from "react";
import type { IDish } from "../../../types/app.types";
import { Dish } from "../../Dish";

import styles from "./Menu.module.css";

interface IMenuProps {
  menu: IDish[];
}
export const Menu: FC<IMenuProps> = ({ menu }) => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Меню</h3>
      <ul className={styles.list}>
        {menu.map(({ id, name }) => (
          <Dish key={id} name={name} />
        ))}
      </ul>
    </section>
  );
};
