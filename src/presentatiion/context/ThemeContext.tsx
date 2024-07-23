import { createContext, PropsWithChildren } from "react";
import { ligthColors, ThemeColors } from "../config/theme/theme";



type ThemeColor = 'light' | 'dark';


interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;

    setTheme: (theme: ThemeColor) => void;
}


export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const setTheme = (theme: ThemeColor) => {
        console.log(theme);
    };

    return (
        <ThemeContext.Provider 
        value={{
            currentTheme: 'light',
            colors: ligthColors,
            setTheme: setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
}
