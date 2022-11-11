import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen')
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
    z-index: 2;
    background-color: #242323;
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

export const Menufood = styled.View`
    flex: 1;
    margin: 5%;
`

export const InputArea = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #363636;
    margin: ${width / 30}px ${width / 17}px 0;
    paddingVertical: ${height / 120}px;
    paddingHorizontal: ${width / 30}px;
    border-radius: ${height / 40}px;
`
export const Input = styled.TextInput`
    margin-left: 3%;
    font-size: 16px;
    flex: 1;
`

export const FoodCategoryList = styled.View`
    width: 100%;
    margin-top: 6%;
    align-items: center;
`