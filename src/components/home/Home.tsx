import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";
import api from "../../api";
import * as C from "./Styles";
import Nav from "../nav/Nav";
import { Tables, Books } from "../../types";

export default function Home({ navigation }: StackScreenProps<ParamListBase>) {
  const [data, setData] = useState<Tables>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/allTables");
      setData(data);
    })();
  }, []);

  console.log(data);

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
                borderLeftColor: "#71FF00",
                borderLeftWidth: 4,
                paddingLeft: 10,
                color: "#292727",
                fontFamily: "POPPINSM",
                height: 30,
              }}
            >
              List of avaiable tables
            </Text>
            <Ionicons name="arrow-forward" size={25} color="#292727" />
          </View>
        </View>
        <Text>{data[0].id}</Text>
      </View>
      <Nav />
    </C.Container>
  );
}
