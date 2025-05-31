import { useState } from "react";
import type { IRestaurant } from "../../../types/app.types";
import { restaurants } from "../../../materials/mock";
import Toolbar from "../../Toolbar";
import Restaurant from "../../Restaurant";

const Restaurants = () => {
  const [currentRestaurant, setCurrentRestaurant] = useState<IRestaurant>(
    restaurants[0]
  );
  return (
    <>
      <Toolbar
        restaurants={restaurants}
        setCurrentRestaurant={setCurrentRestaurant}
        currentRestaurantId={currentRestaurant?.id ?? null}
      />
      <Restaurant restaurant={currentRestaurant} />
      <Restaurant restaurant={currentRestaurant} />
    </>
  );
};

export default Restaurants;
