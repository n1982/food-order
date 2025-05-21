import { restaurants } from "../../../materials/mock";
import Dish from "../../Dish/";
import Layout from "../../Layout";
import Restaurant from "../../Restaurant";
import Review from "../../Review";

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
            <h3>Меню</h3>
            <ul>
              {menu.map(({ id, name }) => (
                <Dish key={id} name={name} />
              ))}
            </ul>
            <h3>Отзывы</h3>
            <ul>
              {reviews.map(({ id, text }) => (
                <Review key={id} text={text} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default App;
