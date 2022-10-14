import { View, Text, Pressable, TextInput } from "react-native";
import { Tables, DataNewTable, DataEditTable } from "../../types";
import { AntDesign } from "@expo/vector-icons";
import { TablesAv } from "../home/Styles";
import { useEffect, useState } from "react";
import * as C from "./Styles";
import api from "../../api";

type Props = {
  table: Tables;
  setETablePress: (e: boolean) => void;
  setIsAdm: (e: boolean) => void;
  isEditCreate: Number;
  isAdm: boolean;
};

export default function EditDelTable({
  table,
  setETablePress,
  isEditCreate,
  setIsAdm,
  isAdm,
}: Props) {
  const [dataTable, setdataTable] = useState<DataNewTable>({
    table_num: null,
    chairs: null,
    price: null,
  });
  const [dataTableEdit, setDataTableEdit] = useState<DataEditTable>({
    id: table.id,
    table_numE: table.table_num,
    chairsE: table.chairs,
    priceE: table.price,
  });

  const { table_num, chairs, price } = dataTable;
  const { table_numE, chairsE, priceE } = dataTableEdit;

  const handleEditCreate = () => {
    if (isEditCreate == 1) {
      if (!table_num || !chairs || !price) {
        alert("Please add all fields!");
      } else {
        api.post("/newTable", { table_num, chairs, price });
        setETablePress(false);
      }
    } else {
      if (!table_numE || !chairsE || !priceE) {
        alert("Please add all fields!");
      } else {
        const tableE = {
          table_num: table_numE,
          chairs: chairsE,
          price: priceE,
        };

        const { table_num, chairs, price } = tableE;

        api.put(`/updateTable/${table.id}`, { table_num, chairs, price });
        setETablePress(false);
      }
    }
  };

  const handleDeleteTable = () => {
    api.delete(`/deleteTable/${table.id}`);
    setETablePress(false);
  };

  return (
    <C.Container>
      <View>
        <AntDesign
          style={{ alignSelf: "flex-end", paddingTop: 10, paddingRight: 10 }}
          name="down"
          size={25}
          color="#FFF"
          onPress={() => setETablePress(false)}
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
                Table{" "}
                {isEditCreate
                  ? table_num?.toString()
                  : table_numE.toString() !== "NaN"
                  ? table_numE.toString()
                  : ""}{" "}
                -{" "}
                {isEditCreate
                  ? chairs?.toString()
                  : chairsE.toString() !== "NaN"
                  ? chairsE.toString()
                  : ""}{" "}
                Chairs
              </Text>
              <Text
                style={{
                  fontFamily: "POPPINSR",
                  fontSize: 16,
                  color: "#727272",
                }}
              >
                $
                {isEditCreate
                  ? price?.toString()
                  : priceE.toString() !== "NaN"
                  ? priceE.toString()
                  : ""}
                .00
              </Text>
            </View>
          </TablesAv>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <C.Input
              placeholder="Table num"
              keyboardType={"numeric"}
              defaultValue={
                !isEditCreate
                  ? table_numE.toString() == "NaN"
                    ? ""
                    : table_numE.toString()
                  : ""
              }
              onChangeText={(e: string) =>
                isEditCreate
                  ? setdataTable((prevState) => ({
                      ...prevState,
                      table_num: parseInt(e),
                    }))
                  : setDataTableEdit((prevState) => ({
                      ...prevState,
                      table_numE: parseInt(e),
                    }))
              }
            />
            <C.Input
              placeholder="Chairs"
              keyboardType={"numeric"}
              defaultValue={
                !isEditCreate
                  ? chairsE.toString() == "NaN"
                    ? ""
                    : chairsE.toString()
                  : ""
              }
              onChangeText={(e: string) =>
                isEditCreate
                  ? setdataTable((prevState) => ({
                      ...prevState,
                      chairs: parseInt(e),
                    }))
                  : setDataTableEdit((prevState) => ({
                      ...prevState,
                      chairsE: parseInt(e),
                    }))
              }
            />
            <C.Input
              placeholder="Price"
              keyboardType={"numeric"}
              defaultValue={
                !isEditCreate
                  ? priceE.toString() == "NaN"
                    ? ""
                    : priceE.toString()
                  : ""
              }
              onChangeText={(e: string) =>
                isEditCreate
                  ? setdataTable((prevState) => ({
                      ...prevState,
                      price: parseInt(e),
                    }))
                  : setDataTableEdit((prevState) => ({
                      ...prevState,
                      priceE: parseInt(e),
                    }))
              }
            />
          </View>
        </View>
        <C.FinishBtn onPress={handleEditCreate}>
          <Text
            style={{ fontFamily: "POPPINSM", fontSize: 16, color: "#727272" }}
          >
            {isEditCreate ? "Create" : "Edit"}
          </Text>
        </C.FinishBtn>
        {!isEditCreate && (
          <C.deleteBtn onPress={handleDeleteTable}>
            <Text
              style={{ fontFamily: "POPPINSM", fontSize: 16, color: "#fff" }}
            >
              Delete
            </Text>
          </C.deleteBtn>
        )}
      </View>
    </C.Container>
  );
}
