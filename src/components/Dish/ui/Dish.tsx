import type { FC } from "react";
import { Counter } from "../../Counter";
import { useCount } from "../../Counter/model/useCount";

import styles from "./Dish.module.css";

interface DishProps {
  name: string;
}
export const Dish: FC<DishProps> = ({ name }) => {
  const { count, onDecrement, onIncrement } = useCount();
  return (
    <>
      <li className={styles.wrapper}>
        <span className={styles.name}>{name}</span>
        <div className={styles.quantity}>
          <Counter
            count={count}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        </div>
      </li>
    </>
  );
};


