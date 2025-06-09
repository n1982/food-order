import {type FC, useContext} from "react";
import { Counter } from "../../Counter";
import { useCount } from "../../Counter/model/useCount";

import styles from "./Dish.module.css";
import {UserContext} from "../../App/model/UserContext.tsx";


interface DishProps {
  dishName: string;
}
export const Dish: FC<DishProps> = ({ dishName }) => {
  const { count, onDecrement, onIncrement } = useCount();
   const {user: {isAuthenticated} } = useContext(UserContext)


  return (
    <>
      <li className={styles.wrapper}>
        <span className={styles.name}>{dishName}</span>
        {isAuthenticated && <div className={styles.quantity}>
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


