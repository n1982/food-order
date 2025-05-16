type RestaurantsId = string & { readonly brand: "RestaurantsId" };
type MenuId = string & { readonly brand: "MenuId" };
type ReviewId = string & { readonly brand: "ReviewId" };

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

export interface Restaurants {
  id: RestaurantsId;
  name: string;
  menu: Menu[];
  reviews: Review[];
}
