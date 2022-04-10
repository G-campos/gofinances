import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px 18px;
  
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  
  margin-bottom: 8px;
`;