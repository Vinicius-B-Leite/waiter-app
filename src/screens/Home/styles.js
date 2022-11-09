import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #242323;
`;

export const Header = styled.View`
    width: 100%;
    height: 10%;
    padding: 5%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Menu = styled.View`
    width: 8%;
    height: 100%;
    justify-content: space-around;
`
export const MenuRow = styled.View`
    width: 100%;
    height: 15%;
    background-color: #d3d3d3;
`

export const InputArea = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #363636;
    margin: 5% 7%;
    paddingHorizontal: 3%;
    border-radius: ${Dimensions.get('screen').height / 53}px;
`
export const Input = styled.TextInput`
    margin-left: 3%;
`

export const FoodCategoryList = styled.View`
    marginHorizontal: 8%;
    marginVertical: 3%;
    width: 100%;
`