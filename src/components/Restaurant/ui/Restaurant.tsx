import type { FC } from "react";
import type { IRestaurant } from "../../../types/app.types";
import { Menu } from "../../Menu";
import { ReviewForm } from "../../ReviewForm";
import { ReviewList } from "../../ReviewList";
import styles from "./Restaurant.module.css";

interface IRestaurantProps {
  restaurant: IRestaurant;
}
export const Restaurant: FC<IRestaurantProps> = ({
  restaurant: { id, name, menu, reviews },
}) => {
  if (!name) {
    return null;
  }
  return (
    <div className={styles.card}>
      <h1 key={id} className={styles.name}>
        {name}
      </h1>
      <div className={styles.content}>
        {!!menu && <Menu menu={menu} />}
        {!!reviews && <ReviewList reviews={reviews} />}
      </div>
      <div>
        <ReviewForm />
      </div>
    </div>
  );
};
