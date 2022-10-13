import { View, Text, Pressable, TextInput } from "react-native";
import { Tables, DataBookTable } from "../../types";
import { AntDesign } from "@expo/vector-icons";
import { TablesAv } from "../home/Styles";
import { useEffect, useState } from "react";
import * as C from "./Styles";
import api from "../../api";

type Props = {
  table: Tables;
  setBookPress: (e: boolean) => void;
};

export default function BookTable({ table, setBookPress }: Props) {
  const [nextseven, setNextSeven] = useState<String[]>([]);
  const [dataBookTable, setDataBookTable] = useState<DataBookTable>({
    name: "",
    date: "",
    hour: "",
    tableId: table.id,
  });

  const date = new Date();
  let today = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let daysInMonth = new Date(year, month, 0).getDate();

  useEffect(() => {
    let allDaysAvaiable = [];

    for (let i = 0; i < 7; i++) {
      if (today === daysInMonth) {
        month += 1;
        today = 1;
      }

      const todayS = today < 10 ? "0" + today.toString() : today.toString();
      const monthS = month < 10 ? "0" + month.toString() : month.toString();

      allDaysAvaiable.push(todayS + "/" + monthS);
      today += 1;
    }

    let filteredDays: String[] = [];

    if (table.Book.length >= 1) {
      for (let i = 0; i < table.Book.length; i++) {
        const dateNotAv = table.Book[i].date.slice(0, 5);

        filteredDays = allDaysAvaiable.filter((e) => {
          if (dateNotAv !== e) {
            return e;
          }
        });

        allDaysAvaiable = filteredDays;
      }

      setNextSeven(filteredDays);
    } else {
      setNextSeven(allDaysAvaiable);
    }
  }, []);

  const handleBookTable = () => {
    const { name, date, hour, tableId } = dataBookTable;

    if (!name || !date || !hour) {
      alert("Please add all fields!");
    } else {
      api.post("/bookTable", { name, date, hour, tableId });

      setBookPress(false);
    }
  };

  return (
    <C.Container>
      <View>
        <AntDesign
          style={{ alignSelf: "flex-end", paddingTop: 10, paddingRight: 10 }}
          name="down"
          size={25}
          color="#FFF"
          onPress={() => setBookPress(false)}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "94%",
        }}
      >
        <View>
          <TablesAv key={table.id as React.Key}>
            <View>
              <Text
                style={{
                  fontFamily: "POPPINSR",
                  fontSize: 16,
                  color: "#292727",
                }}
              >
                Table {table.table_num.toString()} - {table.chairs.toString()}{" "}
                Chairs
              </Text>
              <Text
                style={{
                  fontFamily: "POPPINSR",
                  fontSize: 16,
                  color: "#727272",
                }}
              >
                ${table.price.toString()}.00
              </Text>
            </View>
          </TablesAv>
          <C.Input
            placeholder="Your name"
            onChangeText={(e: string) =>
              setDataBookTable((prevState) => ({
                ...prevState,
                name: e,
              }))
            }
          />
          <C.TablesOP>
            <Text
              style={{
                fontFamily: "POPPINSR",
                fontSize: 20,
                color: "#292727",
                borderBottomColor: "#d4d4d4",
                borderBottomWidth: 1,
                width: "100%",
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              {year}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              {nextseven.map((d) => (
                <Pressable
                  onPress={() =>
                    setDataBookTable((prevState) => ({
                      ...prevState,
                      date: `${d}/${year}`,
                    }))
                  }
                  key={d as React.Key}
                >
                  <Text
                    key={d as React.Key}
                    style={{
                      fontFamily: "POPPINSR",
                      fontSize: 16,
                      color: "#292727",
                      borderBottomWidth:
                        dataBookTable.date.slice(0, 5) == d ? 3 : 0,
                    }}
                  >
                    {d}
                  </Text>
                </Pressable>
              ))}
            </View>
          </C.TablesOP>
          <C.TablesOP>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              {["12:00", "02:00", "04:00", "06:00", "08:00"].map((h) => (
                <Pressable
                  onPress={() =>
                    setDataBookTable((prevState) => ({
                      ...prevState,
                      hour: h,
                    }))
                  }
                >
                  <Text
                    key={h}
                    style={{
                      fontFamily: "POPPINSR",
                      fontSize: 16,
                      color: "#292727",
                      borderBottomWidth: dataBookTable.hour == h ? 3 : 0,
                    }}
                  >
                    {h}
                  </Text>
                </Pressable>
              ))}
            </View>
          </C.TablesOP>
        </View>
        <C.FinishBtn onPress={handleBookTable}>
          <Text
            style={{ fontFamily: "POPPINSM", fontSize: 16, color: "#727272" }}
          >
            FINISH
          </Text>
        </C.FinishBtn>
      </View>
    </C.Container>
  );
}
