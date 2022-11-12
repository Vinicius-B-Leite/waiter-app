import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #242323;
    padding: 5%;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding-bottom: 10%;
`
export const HeaderTitle = styled.Text`
    font-size: 20px;
    color: #fff;
    margin-left: 30%;
`

export const Itens = styled.FlatList`
    flex: 1;
`

export const ValueContainer = styled.View`
    height: ${Dimensions.get('screen').height / 5}px;
    flex-direction: row;
    justify-content: space-between;
`
export const TotalValue = styled.Text`
    font-size: 17px;
    color: #fff;
`


export const ButtonGoToTables = styled.TouchableOpacity`
    background-color: #f97e20;
    justify-content: center;
    align-items: center;
    padding: 4%;
    position: absolute;
    bottom: 5%;
    left: 5%;
    width: 100%;
    border-radius: ${Dimensions.get('screen').width}px;
`
export const TextGoToTables = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
`