import styled from "styled-components/native";

const black = "#292727";

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ededea;
  height: 100%;
`;

export const TitleButton = styled.View`
  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 92px;
  text-align: center;
  font-family: "DMSERIF";
  line-height: 93px;
  color: ${black};
`;

export const Yellow = styled.View`
  background-color: #fff6b6;
  height: 450px;
  width: 450px;
  border-radius: 500;
  position: absolute;
  top: -150;
  left: -55;
  elevation: 5;
  shadowcolor: "black";
  shadowopacity: 0.5;
  shadowradius: 10;
`;

export const Button = styled.Pressable`
  background-color: ${black};
  border-radius: 59px;
  width: 198px;
  height: 57px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
