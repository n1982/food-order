import {useContext} from "react";
import {ThemeContext, type ThemeContextType} from "./ThemeContext.ts";

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('не найден контекст');
    }
    return context;
}