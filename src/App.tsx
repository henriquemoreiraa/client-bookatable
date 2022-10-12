import { StatusBar } from "expo-status-bar";
import { Button, Pressable, Text, View } from "react-native";
import * as C from "./AppStyles";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import Home from "./components/home/Home";

export function EnterPage({ navigation }: StackScreenProps<ParamListBase>) {
  const [fonstLoaded] = useFonts({
    DMSERIF: require("../assets/fonts/DMSerifText-Regular.ttf"),
    POPPINSB: require("../assets/fonts/Poppins-Bold.ttf"),
    POPPINSR: require("../assets/fonts/Poppins-Regular.ttf"),
    POPPINSM: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fonstLoaded) {
    return null;
  }

  return (
    <C.Container>
      <View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#000",
            height: "50%",
            position: "relative",
          }}
        >
          <C.Yellow></C.Yellow>
        </View>
        <C.TitleButton>
          <C.Title>BOOK A TABLE</C.Title>
          <C.Button onPress={() => navigation.navigate("Home")}>
            <Text
              style={{
                color: "#fff",
                marginLeft: 15,
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              Login as guest
            </Text>
            <View
              style={{
                height: 41,
                width: 41,
                backgroundColor: "#fff",
                borderRadius: 40,
                marginRight: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="arrow-forward" size={25} color="#292727" />
            </View>
          </C.Button>
        </C.TitleButton>
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "300", color: "#292727" }}>
          Login as admin
        </Text>
      </View>
    </C.Container>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Enter Page
      "
      >
        <Stack.Screen name="Enter Page" component={EnterPage} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
