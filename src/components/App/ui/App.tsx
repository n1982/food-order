import { Layout } from "../../Layout";
import { Restaurants } from "../../Restaurants";

import "./App.css";
import { ThemeContextProvider } from "../model/ThemeContextProvider.tsx";
import { UserContextProvider } from "../model/UserContextProvider.tsx";

const App = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <Restaurants />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
