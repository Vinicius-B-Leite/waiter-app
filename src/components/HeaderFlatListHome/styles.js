import { Dimensions } from 'react-native';
import styled from 'styled-components/native';


const {width, height} = Dimensions.get('screen')

export const InputArea = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #363636;
    margin: ${width / 40}px;
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
    marginVertical: 5%;
    align-items: center;
`