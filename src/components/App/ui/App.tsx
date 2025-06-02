import {useState} from "react";
import {Layout} from "../../Layout";
import {Restaurants} from "../../Restaurants";

import "./App.css";
import {ThemeContext} from "../model/ThemeContext.ts";
import {UserContext} from "../model/UserContext.ts";


const App = () => {
    const [theme, setTheme] = useState<string>('light')
    const [user, setUser] = useState<string | null>(null)

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };
    return (
        <ThemeContext value={{theme, toggleTheme}}>
            <UserContext value={{user, setUser}}>
                <Layout>
                    <Restaurants/>
                </Layout>
            </UserContext>
        </ThemeContext>
    )
};

export default App;
