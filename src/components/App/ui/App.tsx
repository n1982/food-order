import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import Layout from "../../Layout";
import Restaurant from "../../Restaurant";
import Toolbar from "../../Toolbar";
import type { IRestaurant } from "../../../types/app.types";

const App = () => {
  const [currentRestaurant, setCurrentRestaurant] =
    useState<IRestaurant | null>(null);

  return (
    <Layout>
      <>
        <Toolbar
          restaurants={restaurants}
          setCurrentRestaurant={setCurrentRestaurant}
          currentRestaurantId={currentRestaurant?.id ?? null}
        />
        {currentRestaurant && <Restaurant restaurant={currentRestaurant} />}
      </>
    </Layout>
  );
};

export default App;
