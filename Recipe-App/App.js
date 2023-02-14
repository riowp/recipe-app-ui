import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Stacks from "./navigation/stack";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <StatusBar />
        <Stacks />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
