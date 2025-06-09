import {type FC, type ReactNode, useState} from "react";
import {ThemeContext} from "./ThemeContext.ts";


interface ThemeContextProviderProps {
    children: ReactNode;
}


export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<string>('light')
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };
    return <ThemeContext value={{theme, toggleTheme}}> {children} </ThemeContext>
}