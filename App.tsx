// import { StatusBar } from "expo-status-bar";
// import { Button, Pressable, Text, View } from "react-native";
// import * as C from "./styles";
// import { useFonts } from "expo-font";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import DropShadow from "react-native-drop-shadow";

// export default function App() {
//   const [fonstLoaded] = useFonts({
//     DMSERIF: require("./assets/fonts/DMSerifText-Regular.ttf"),
//   });

//   if (!fonstLoaded) {
//     return null;
//   }

//   return (
//     <C.Container>
//       <View>
//         <View
//           style={{
//             width: "100%",
//             backgroundColor: "#000",
//             height: "50%",
//             position: "relative",
//           }}
//         >
//           <C.Yellow></C.Yellow>
//         </View>
//         <C.TitleButton>
//           <C.Title>BOOK A TABLE</C.Title>
//           <C.Button>
//             <Text
//               style={{
//                 color: "#fff",
//                 marginLeft: 15,
//                 fontSize: 16,
//                 fontWeight: "700",
//               }}
//             >
//               Login as guest
//             </Text>
//             <View
//               style={{
//                 height: 41,
//                 width: 41,
//                 backgroundColor: "#fff",
//                 borderRadius: 40,
//                 marginRight: 10,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Ionicons name="arrow-forward" size={25} color="#292727" />
//             </View>
//           </C.Button>
//         </C.TitleButton>
//       </View>
//       <View>
//         <Text style={{ fontSize: 16, fontWeight: "300", color: "#292727" }}>
//           Login as admin
//         </Text>
//       </View>
//     </C.Container>
//   );
// }

// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
