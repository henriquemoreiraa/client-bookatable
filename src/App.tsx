import { useFonts } from "expo-font";
import { useState } from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/home/Home";
import Settings from "./components/Settings/Settings";
import Books from "./components/Books/Books";

const Stack = createStackNavigator();

function App() {
  const [fonstLoaded] = useFonts({
    DMSERIF: require("../assets/fonts/DMSerifText-Regular.ttf"),
    POPPINSB: require("../assets/fonts/Poppins-Bold.ttf"),
    POPPINSR: require("../assets/fonts/Poppins-Regular.ttf"),
    POPPINSM: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fonstLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home
      "
      >
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{ a: false }}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Books" component={Books} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
