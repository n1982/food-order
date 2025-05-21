export type RestaurantId = string & { readonly brand: "RestaurantsId" };
export type MenuId = string & { readonly brand: "MenuId" };
export type ReviewId = string & { readonly brand: "ReviewId" };

export interface IDish {
  id: MenuId;
  name: string;
  price: number;
  ingredients: string[];
}

export interface IReview {
  id: ReviewId;
  user: string;
  text: string;
  rating: number;
}

export interface IRestaurant {
  id: RestaurantId;
  name: string;
  menu: IDish[];
  reviews: IReview[];
}
