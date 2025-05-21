import { restaurants } from "../../../materials/mock";
import Dish from "../../Dish/";
import Layout from "../../Layout";
import Menu from "../../Menu";
import Restaurant from "../../Restaurant";
import ReviewList from "../../ReviewList";

const App = () => {
  return (
    <Layout>
      <div>
        <div>toolbar</div>
        {restaurants.map(({ id, name, menu, reviews }) => (
          <div
            key={id}
            style={{
              paddingLeft: "5px",
              marginBottom: "5px",
              border: "thin solid black",
            }}
          >
            <Restaurant name={name} />
            <Menu menu={menu} />
            <ReviewList reviews={reviews} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default App;
