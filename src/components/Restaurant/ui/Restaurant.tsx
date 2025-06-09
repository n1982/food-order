import { type FC, useContext } from "react";
import type { IRestaurant } from "../../../types/app.types";
import { Menu } from "../../Menu";
import { ReviewForm } from "../../ReviewForm";
import { ReviewList } from "../../ReviewList";
import { UserContext } from "../../App/model/UserContext.ts";
import styles from "./Restaurant.module.css";

interface IRestaurantProps {
  restaurant: IRestaurant;
}

export const Restaurant: FC<IRestaurantProps> = ({
  restaurant: { name, menu, reviews },
}) => {
  const {
    user: { isAuthenticated },
  } = useContext(UserContext);
  if (!name) {
    return null;
  }
  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.content}>
        {!!menu && <Menu menu={menu} />}
        {!!reviews && <ReviewList reviews={reviews} />}
      </div>
      <div>{isAuthenticated && <ReviewForm />}</div>
    </div>
  );
};
