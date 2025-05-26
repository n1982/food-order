import type { Dispatch, FC, SetStateAction } from "react";
import type { IRestaurant, RestaurantId } from "../../../types/app.types";
import "./Toolbar.css";

interface IToolbarProps {
  restaurants: IRestaurant[];
  setCurrentRestaurant: Dispatch<SetStateAction<IRestaurant>>;
  currentRestaurantId: RestaurantId | null;
}

const Toolbar: FC<IToolbarProps> = ({
  restaurants,
  setCurrentRestaurant,
  currentRestaurantId,
}) => {
  return (
    <div className='restaurant-toolbar'>
      <div className='restaurant-toolbar-scroll'>
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            className={`restaurant-tab ${
              restaurant.id === currentRestaurantId ? "active" : ""
            }`}
            onClick={() => setCurrentRestaurant(restaurant)}
          >
            {restaurant.name}
            {restaurant.id === currentRestaurantId && (
              <div className='active-indicator' />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
