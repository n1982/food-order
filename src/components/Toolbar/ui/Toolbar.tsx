import type { Dispatch, FC, SetStateAction } from "react";
import type { IRestaurant, RestaurantId } from "../../../types/app.types";
import styles from "./Toolbar.module.css";

interface IToolbarProps {
  restaurants: IRestaurant[];
  setCurrentRestaurant: Dispatch<SetStateAction<IRestaurant>>;
  currentRestaurantId: RestaurantId | null;
}

export const Toolbar: FC<IToolbarProps> = ({
  restaurants,
  setCurrentRestaurant,
  currentRestaurantId,
}) => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbar_scroll}>
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            className={`${styles.tab} ${
              restaurant.id === currentRestaurantId ? `${styles.active}` : ""
            }`}
            onClick={() => setCurrentRestaurant(restaurant)}
          >
            {restaurant.name}
            {restaurant.id === currentRestaurantId && (
              <div className={styles.active_indicator} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
