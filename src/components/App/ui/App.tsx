import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import Layout from "../../Layout";
import Restaurant from "../../Restaurant";
import Toolbar from "../../Toolbar";
import type { IRestaurant } from "../../../types/app.types";

import "./App.css";

const App = () => {
  const [currentRestaurant, setCurrentRestaurant] = useState<IRestaurant>(
    restaurants[0]
  );

  return (
    <Layout>
      <>
        <Toolbar
          restaurants={restaurants}
          setCurrentRestaurant={setCurrentRestaurant}
          currentRestaurantId={currentRestaurant?.id ?? null}
        />
        <Restaurant restaurant={currentRestaurant} />
      </>
    </Layout>
  );
};

export default App;
