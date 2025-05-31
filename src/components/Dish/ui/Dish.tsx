import type { FC } from "react";
import { Counter } from "../../Counter";
import { useCount } from "../../Counter/model/useCount";

import "./Dish.css";

interface DishProps {
  name: string;
}
export const Dish: FC<DishProps> = ({ name }) => {
  const { count, onDecrement, onIncrement } = useCount();
  return (
    <>
      <li className='dish-item'>
        <span className='dish-name'>{name}</span>
        <div className='dish-controls'>
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

export default Dish;
