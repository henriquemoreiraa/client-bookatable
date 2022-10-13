import * as C from "../home/Styles";
import { Input, FinishBtn } from "../BookTable/Styles";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StackScreenProps } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";
import Nav from "../nav/Nav";
import { useState } from "react";
import { adm } from "./adm";

export default function Settings({
  navigation,
  route,
}: StackScreenProps<ParamListBase>) {
  const [password, setPassword] = useState("");

  const handleAdmin = () => {
    if (!password) {
      alert("Type the password");
    } else if (password !== adm) {
      alert("Wrong password!");
    } else {
      navigation.navigate("Home", { isAdmin: true });
    }
  };

  return (
    <C.Container>
      <View
        style={{
          padding: 10,
        }}
      >
        <View>
          <Text
            style={{ fontSize: 16, color: "#727272", fontFamily: "POPPINSR" }}
          >
            BOOK A TABLE
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 21,
                fontWeight: "500",
                color: "#292727",
                fontFamily: "POPPINSM",
                height: 30,
              }}
            >
              Enter as admin
            </Text>
            <Ionicons name="arrow-forward" size={25} color="#292727" />
          </View>
        </View>
        <View>
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={(e: string) => setPassword(e)}
          />
          <C.EnterBtn onPress={handleAdmin}>
            <Text
              style={{ fontFamily: "POPPINSM", fontSize: 16, color: "#FFF" }}
            >
              Enter
            </Text>
          </C.EnterBtn>
        </View>
      </View>

      <Nav navigation={navigation} route={{ key: "", name: "" }} />
    </C.Container>
  );
}
