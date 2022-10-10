import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import * as C from "./styles";

export default function App() {
  return (
    <C.Container>
      <C.Yellow></C.Yellow>
      <C.All>
        <C.TitleButton>
          <C.Title>BOOK A TABLE</C.Title>
          <Button title="Login as a guest" />
        </C.TitleButton>
        <View>
          <Text>Login as admin</Text>
        </View>
      </C.All>
    </C.Container>
  );
}
