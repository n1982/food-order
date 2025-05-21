import type { FC } from "react";

interface DishProps {
  name: string;
}
const Dish: FC<DishProps> = ({ name }) => {
  return <li>{name}</li>;
};

export default Dish;
