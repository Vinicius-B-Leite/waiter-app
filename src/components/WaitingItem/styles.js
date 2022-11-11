import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: ${Dimensions.get('screen').height / 8}px;
    flex-direction: row;
    align-items: center;
    margin-top: 5%;
`;

export const ChairNumber = styled.Text`
    font-size: 28px;
    color: #fff;
    margin: 0 5%;
`
export const TotalValue = styled.Text``
export const Itens = styled.Text``

