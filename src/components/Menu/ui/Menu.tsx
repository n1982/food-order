import type { FC } from "react";
import type { IDish } from "../../../types/app.types";
import Dish from "../../Dish";

interface IMenuProps {
  menu: IDish[];
}
const Menu: FC<IMenuProps> = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ id, name }) => (
          <Dish key={id} name={name} />
        ))}
      </ul>
    </>
  );
};
export default Menu;
