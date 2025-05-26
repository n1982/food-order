import type { IRestaurant } from "../../../types/app.types";
import Menu from "../../Menu";
import ReviewList from "../../ReviewList";
import "./Restaurant.css";

interface RestaurantProps {
  restaurant: IRestaurant;
}
const Restaurant = ({
  restaurant: { id, name, menu, reviews },
}: RestaurantProps) => {
  return (
    <div className='restaurant-card'>
      <h1 key={id} className='restaurant-name'>
        {name}
      </h1>
      <div className='restaurant-content'>
        <Menu menu={menu} />
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};

export default Restaurant;
