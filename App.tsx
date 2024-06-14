import 'react-native-gesture-handler';
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from './src/presentatiion/navigator/Navigatior';
export default function App() {
  return (
    <NavigationContainer>
     <Navigator/>
    </NavigationContainer>
  );
}
