export type RestaurantId = string & { readonly brand: "RestaurantsId" };
export type DishId = string & { readonly brand: "DishId" };
export type ReviewId = string & { readonly brand: "ReviewId" };
export type UserId = string & { readonly brand: "UserId" };

export interface IDish {
  id: DishId;
  name: string;
  price: number;
  ingredients: string[];
}

export interface IReview {
  id: ReviewId;
  userId: UserId;
  text: string;
  rating: number;
}

export interface IRestaurant {
  id: RestaurantId;
  name: string;
  menu: DishId[];
  reviews: ReviewId[];
}

export interface IUser{
  id: UserId;
  name: string,
}