import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const Nav = styled.View`
  height: 64px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
`;

export const BookBtn = styled.Pressable`
  background-color: #f2ae30;
  display: flex;
  width: 94px;
  height: 47px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const TablesAv = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  background-color: #fff;
  padding: 15px;
  border-radius: 20px;
  elevation: 2;
  shadowcolor: "black";
  shadowopacity: 1;
  shadowradius: 10px;
`;
