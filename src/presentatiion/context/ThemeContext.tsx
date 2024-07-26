import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { darkColors, ligthColors, ThemeColors } from "../config/theme/theme";
import { Appearance, AppState, useColorScheme } from "react-native";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";



type ThemeColor = 'light' | 'dark';


interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;
    setTheme: (theme: ThemeColor) => void;
}


export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({ children }: PropsWithChildren) => {

    const colorScheme = useColorScheme();
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

    const isDark = currentTheme === 'dark';
    const colors = isDark ? darkColors : ligthColors;


    /* useEffect(() => {
        console.log('colorScheme..........',colorScheme);
        if (colorScheme === 'dark') {	
            setCurrentTheme('dark');
        }else{
            setCurrentTheme('light');
        }
    }, [colorScheme])
 */

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
          const colorScheme = Appearance.getColorScheme();
            console.log('colorScheme..........',colorScheme);
            setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');

        });
    
        return () => {
          subscription.remove();
        };
      }, []);    



    const setTheme = (theme: ThemeColor) => {
        console.log('theme',theme);
        setCurrentTheme(theme);
    };

    console.log('current',currentTheme);

    return (
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme }>
        <ThemeContext.Provider 
        value={{
            currentTheme: currentTheme,
            isDark: isDark,
            colors: colors,
            setTheme: setTheme
        }}>
            {children}
        </ThemeContext.Provider>
        </NavigationContainer>
    );
}


