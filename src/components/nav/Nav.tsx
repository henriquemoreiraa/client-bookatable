import * as C from "./Styles";
import { FontAwesome } from "@expo/vector-icons";

export default function Nav() {
  return (
    <C.Nav>
      <FontAwesome name="calendar" size={30} color="#292727" />
      <C.Home>
        <FontAwesome name="home" size={35} color="#292727" />
      </C.Home>
      <FontAwesome name="gear" size={35} color="#292727" />
    </C.Nav>
  );
}
