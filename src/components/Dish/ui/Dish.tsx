import type { FC } from "react";
import { Counter } from "../../Counter";
import { useCount } from "../../Counter/model/useCount";

import styles from "./Dish.module.css";
import {useAuth} from "../../App/model/useAuth.ts";

interface DishProps {
  dishName: string;
}
export const Dish: FC<DishProps> = ({ dishName }) => {
  const { count, onDecrement, onIncrement } = useCount();
  const {isUserLogin} = useAuth()


  return (
    <>
      <li className={styles.wrapper}>
        <span className={styles.name}>{dishName}</span>
        {isUserLogin && <div className={styles.quantity}>
          <Counter
              count={count}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
          />
        </div>}
      </li>
    </>
  );
};


