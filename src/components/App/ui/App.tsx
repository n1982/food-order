import { Layout } from "../../Layout";
import { ProgressBar } from "../../ProgressBar";
import { Restaurants } from "../../Restaurants";

import "./App.css";

const App = () => {
  return (
    <Layout>
      <ProgressBar />
      <Restaurants />
    </Layout>
  );
};

export default App;
