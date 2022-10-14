import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: #f2ae30;
  position: absolute;
  bottom: 0;
  z-index: 1;
  border-radius: 10px;
  padding: 10px;
  padding-bottom: 25px;
`;

export const FinishBtn = styled.Pressable`
  background-color: #fff;
  display: flex;
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0px;
`;

export const deleteBtn = styled.Pressable`
  background-color: #f24730;
  display: flex;
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
`;

export const TablesOP = styled.View`
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: #fff;
  padding: 15px;
  border-radius: 20px;
  elevation: 2;
  shadowcolor: "black";
  shadowopacity: 1;
  shadowradius: 10px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  height: 54px;
  width: 100px;
  border-radius: 10px;
  margin-top: 20px;
  font-family: "POPPINSR";
  font-size: 16px;
  elevation: 1;
  shadowcolor: "black";
  shadowopacity: 1;
  shadowradius: 10px;
  text-align: center;
`;
