import {Layout} from "../../Layout";
import {Restaurants} from "../../Restaurants";

import "./App.css";
import {ThemeContextProvider} from "../model/ThemeContextProvider.tsx";
import {UserContextProvider} from "../model/UserContextProvider.tsx";
import {Provider} from "react-redux";
import {store} from "../../../redux/store.ts";

const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <Layout>
                        <Restaurants/>
                    </Layout>
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
};

export default App;
