import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import api from "../../api";
import * as C from "./Styles";
import Nav from "../nav/Nav";
import { Tables } from "../../types";
import BookTable from "../BookTable/BookTable";
import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export default function Home({ navigation }: StackScreenProps<ParamListBase>) {
  const [data, setData] = useState<Tables[]>([]);
  const [selectedTable, setSelectedTable] = useState<Tables>();
  const [bookPress, setBookPress] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/allTables");
      setData(data);
    })();
  }, []);

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

        {data.map((t) => (
          <C.TablesAv key={t.id as React.Key}>
            <View>
              <Text
                style={{
                  fontFamily: "POPPINSR",
                  fontSize: 16,
                  color: "#292727",
                }}
              >
                Table {t.table_num.toString()} - {t.chairs.toString()} Chairs
              </Text>
              <Text
                style={{
                  fontFamily: "POPPINSR",
                  fontSize: 16,
                  color: "#727272",
                }}
              >
                ${t.price.toString()}.00
              </Text>
            </View>
            <C.BookBtn
              onPress={() => (setSelectedTable(t), setBookPress(true))}
            >
              <Text
                style={{
                  fontFamily: "POPPINSM",
                  fontSize: 16,
                  color: "#FFF",
                }}
              >
                Book
              </Text>
            </C.BookBtn>
          </C.TablesAv>
        ))}
      </View>
      {selectedTable && bookPress && (
        <BookTable table={selectedTable} setBookPress={setBookPress} />
      )}
      <Nav navigation={navigation} route={{ key: "", name: "" }} />
    </C.Container>
  );
}
