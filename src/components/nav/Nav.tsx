import * as C from "./Styles";
import { FontAwesome } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

export default function Nav({ navigation }: StackScreenProps<ParamListBase>) {
  return (
    <C.Nav>
      <FontAwesome
        name="calendar"
        size={30}
        color="#292727"
        onPress={() => navigation.navigate("Books")}
      />
      <C.Home>
        <FontAwesome
          name="home"
          size={35}
          color="#292727"
          onPress={() => navigation.navigate("Home")}
        />
      </C.Home>
      <FontAwesome
        name="gear"
        size={35}
        color="#292727"
        onPress={() => navigation.navigate("Settings")}
      />
    </C.Nav>
  );
}
