import * as C from "../home/Styles";
import { FontAwesome } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { View, Text } from "react-native";
import Nav from "../nav/Nav";

export default function Settings({
  navigation,
}: StackScreenProps<ParamListBase>) {
  return (
    <C.Container>
      <View></View>

      <Nav navigation={navigation} route={{ key: "", name: "" }} />
    </C.Container>
  );
}
