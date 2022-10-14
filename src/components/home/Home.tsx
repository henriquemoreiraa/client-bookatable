import React from "react";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import api from "../../api";
import * as C from "./Styles";
import Nav from "../nav/Nav";
import { Tables } from "../../types";
import BookTable from "../BookTable/BookTable";
import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import EditDelTable from "../EditDelTable/EditDelTable";

type Props = {
  isAdmin: boolean;
};

const empTable = {
  id: "",
  table_num: 0,
  chairs: 0,
  price: 0,
  Book: [],
};

export default function Home({
  navigation,
  route,
}: StackScreenProps<ParamListBase>) {
  const [data, setData] = useState<Tables[]>([]);
  const [selectedTable, setSelectedTable] = useState<Tables>();
  const [bookPress, setBookPress] = useState(false);
  const [eTablePress, setETablePress] = useState(false);
  const [isEditCreate, setIsEditCreate] = useState(0);
  const [isAdm, setIsAdm] = useState(false);

  const { isAdmin }: any = route.params;

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/allTables");
      const reverse = data.reverse();
      setData(reverse);
    })();

    if (isAdmin) {
      setIsAdm(true);
    }
  }, [isAdmin, isAdm]);

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

          {isAdm && (
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 30 }}
            >
              <Text
                style={{
                  fontSize: 21,
                  fontWeight: "500",
                  color: "#292727",
                  fontFamily: "POPPINSM",
                  marginRight: 10,
                }}
              >
                Create new Table
              </Text>
              <AntDesign
                onPress={() => (
                  setETablePress(true),
                  setSelectedTable(empTable),
                  setIsEditCreate(1)
                )}
                name="pluscircle"
                size={30}
                color="#F2AE30"
              />
            </View>
          )}
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
            {!isAdm ? (
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
            ) : (
              <C.EditTableBtn
                onPress={() => (
                  setSelectedTable(t), setETablePress(true), setIsEditCreate(0)
                )}
              >
                <FontAwesome name="pencil" size={20} color="#fff" />
              </C.EditTableBtn>
            )}
          </C.TablesAv>
        ))}
      </View>
      {selectedTable && bookPress && (
        <BookTable table={selectedTable} setBookPress={setBookPress} />
      )}
      {selectedTable && eTablePress && (
        <EditDelTable
          table={selectedTable}
          isEditCreate={isEditCreate}
          setETablePress={setETablePress}
          setIsAdm={setIsAdm}
          isAdm={isAdm}
        />
      )}
      <Nav navigation={navigation} route={{ key: "", name: "" }} />
    </C.Container>
  );
}
