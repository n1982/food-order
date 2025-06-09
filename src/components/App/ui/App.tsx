import {Layout} from "../../Layout";
import {Restaurants} from "../../Restaurants";

import "./App.css";
import {ThemeContextProvider} from "../model/ThemeContext.tsx";
import {UserContextProvider} from "../model/UserContext.tsx";


const App = () => {

    return (
        <ThemeContextProvider>
            <UserContextProvider>
                <Layout>
                    <Restaurants/>
                </Layout>
            </UserContextProvider>
        </ThemeContextProvider>
    )
};

export default App;
