import "react-native-gesture-handler";

import { Navigator } from "./src/presentatiion/navigator/Navigatior";

import { ThemeProvider } from "./src/presentatiion/context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
}
