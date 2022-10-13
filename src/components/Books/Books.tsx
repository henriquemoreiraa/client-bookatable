import { StackScreenProps } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState, useEffect } from "react";
import * as C from "../home/Styles";
import { Books } from "../../types";
import Nav from "../nav/Nav";
import api from "../../api";

export default function BooksT({
  navigation,
}: StackScreenProps<ParamListBase>) {
  const [bData, setBData] = useState<Books[]>([]);
  const date = new Date();
  let today = date.getDate();

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/allBookedTables");
      const bdata: Books[] = data;

      let filteredData = bdata.filter((e) => {
        const dayN = e.date.slice(0, 2);

        if (parseInt(dayN) >= today) {
          return e;
        }
      });

      setBData(filteredData);
    })();
  }, []);

  return (
    <C.Container>
      <ScrollView
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
              All booked tables
            </Text>
            <Ionicons name="arrow-forward" size={25} color="#292727" />
          </View>
        </View>
        {bData.map((t) => (
          <C.TablesAv key={t.id as React.Key}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "POPPINSM",
                  color: "#F2AE30",
                }}
              >
                {t.name}
              </Text>
              <Text
                style={{
                  fontFamily: "POPPINSR",
                  fontSize: 16,
                  color: "#292727",
                }}
              >
                Table {t.table.table_num.toString()} -{" "}
                {t.table.chairs.toString()} Chairs
              </Text>
              <Text
                style={{
                  fontFamily: "POPPINSR",
                  fontSize: 16,
                  color: "#727272",
                }}
              >
                ${t.table.price.toString()}.00
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "POPPINSR",
                  fontSize: 16,
                  color: "#292727",
                  textAlign: "right",
                }}
              >
                {t.date}
              </Text>
              <Text
                style={{
                  fontFamily: "POPPINSR",
                  fontSize: 16,
                  color: "#727272",
                  textAlign: "right",
                }}
              >
                {t.hour} PM
              </Text>
            </View>
          </C.TablesAv>
        ))}
      </ScrollView>

      <Nav navigation={navigation} route={{ key: "", name: "" }} />
    </C.Container>
  );
}
