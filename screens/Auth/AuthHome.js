import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import constants from '../../constants';
import AuthButton from "../../components/AuthButton";


const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;
const Image = styled.Image`
  width: ${constants.width / 2.5};
`;
const Touchable = styled.TouchableOpacity``;


const LoginLink = styled.View``;
const LoginLinkText = styled.Text`
  color: ${props => props.theme.MAIN_COLOR};
  margin-top: 20px;
  font-weight: 600;
`;

export default ({ navigation }) => (
  <View>
     <AuthButton
      text={"회원가입"}
      onPress={() => navigation.navigate("Signup")}
    />
    <Touchable onPress={() => navigation.navigate("Login")}>
      <LoginLink>
        <LoginLinkText>로그인</LoginLinkText>
      </LoginLink>
    </Touchable>
  </View>
);