import type { FC } from "react";
import Counter from "../../Counter";

import "./Dish.css";

interface DishProps {
  name: string;
}
const Dish: FC<DishProps> = ({ name }) => {
  return (
    <>
      <li className='dish-item'>
        <span className='dish-name'>{name}</span>
      </li>
      <div className='dish-controls'>
        <Counter />
      </div>
    </>
  );
};

export default Dish;
