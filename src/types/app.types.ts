export type RestaurantId = string & { readonly brand: "RestaurantsId" };
export type MenuId = string & { readonly brand: "MenuId" };
export type ReviewId = string & { readonly brand: "ReviewId" };

interface Menu {
  id: MenuId;
  name: string;
  price: number;
  ingredients: string[];
}

interface Review {
  id: ReviewId;
  user: string;
  text: string;
  rating: number;
}

export interface Restauran {
  id: RestaurantId;
  name: string;
  menu: Menu[];
  reviews: Review[];
}
