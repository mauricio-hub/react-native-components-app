import { createContext, PropsWithChildren, useState } from "react";
import { darkColors, ligthColors, ThemeColors } from "../config/theme/theme";



type ThemeColor = 'light' | 'dark';


interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;
    setTheme: (theme: ThemeColor) => void;
}


export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({ children }: PropsWithChildren) => {

    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');


    const setTheme = (theme: ThemeColor) => {
        console.log('theme',theme);
        setCurrentTheme(theme);
    };

    console.log('current',currentTheme);

    return (
        <ThemeContext.Provider 
        value={{
            currentTheme: currentTheme,
            isDark: (currentTheme === 'light'),
            colors:(currentTheme === 'light' ?  ligthColors : darkColors),
            setTheme: setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
}


