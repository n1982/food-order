interface RestaurantProps {
  name: string;
}
const Restaurant = ({ name }: RestaurantProps) => {
  return <h1 key={"1"}>{name}</h1>;
};

export default Restaurant;
