import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./src/presentatiion/navigator/Navigatior";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "./src/presentatiion/context/ThemeContext";

const AppState = ({ children }: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <ThemeProvider>{children}</ThemeProvider>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AppState>
      <Navigator/> 
    </AppState>
  );
}
