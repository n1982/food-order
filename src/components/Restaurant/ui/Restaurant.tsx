import type { IRestaurant } from "../../../types/app.types";
import Menu from "../../Menu";
import { ReviewForm } from "../../ReviewForm";
import ReviewList from "../../ReviewList";
import "./Restaurant.css";

interface RestaurantProps {
  restaurant: IRestaurant;
}
const Restaurant = ({
  restaurant: { id, name, menu, reviews },
}: RestaurantProps) => {
  if (!name) {
    return null;
  }
  return (
    <div className='restaurant-card'>
      <h1 key={id} className='restaurant-name'>
        {name}
      </h1>
      <div className='restaurant-content'>
        {!!menu && <Menu menu={menu} />}
        {!!reviews && <ReviewList reviews={reviews} />}
      </div>
      <div className='review-content'>
        <ReviewForm />
      </div>
    </div>
  );
};

export default Restaurant;
