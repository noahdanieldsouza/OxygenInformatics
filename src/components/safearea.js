import styled from "styled-components";
import { StatusBar,  SafeAreaView, } from "react-native";

export const SafeArea = styled(SafeAreaView)`

${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
