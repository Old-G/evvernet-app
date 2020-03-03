import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <LogoText>EVVER</LogoText>
      <TitleBar>
        <Avatar source={require("./assets/avatar.jpg")} />
        <Title>Welcome back,</Title>
        <Name>Meng</Name>
      </TitleBar>
    </Container>
  );
}
const LogoText = styled.Text`
  margin-top: 50px;
  margin-left: 130px;
  font-size: 36px;
  font-weight: 500;
  color: linear-gradient(
    to right,
    rgba(48, 203, 221, 1),
    rgba(48, 203, 221, 1)
  );
`;


const Avatar = styled.Image` 
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 15px;
  padding-left: 80px;
`;
