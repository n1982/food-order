import type { FC } from "react";
import type { IDish } from "../../../types/app.types";
import Dish from "../../Dish";

import "./Menu.css";

interface IMenuProps {
  menu: IDish[];
}
const Menu: FC<IMenuProps> = ({ menu }) => {
  return (
    <section className='menu-container'>
      <h3 className='menu-title'>Меню</h3>
      <ul className='menu-list'>
        {menu.map(({ id, name }) => (
          <Dish key={id} name={name} />
        ))}
      </ul>
    </section>
  );
};
export default Menu;
