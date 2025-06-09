import {createContext, type FC, type ReactNode, useState} from "react";

export interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

interface ThemeContextProviderProps {
    children: ReactNode;
}

const ThemeContext  = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {}
});

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<string>('light')
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };
    return <ThemeContext value={{theme, toggleTheme}}> {children} </ThemeContext>
}