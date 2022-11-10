import { Dimensions } from 'react-native';
import styled from 'styled-components/native';


const { width, height } = Dimensions.get('screen')
 

export const Container = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Table = styled.View`
    background-color: #474747;
    width: 100%;
    height: 45%;
    border-radius: ${width / 20}px;
`
export const Chars = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
`

export const Char = styled.View`
    background-color: #474747;
    width: 20%;
    height: 50%;
    border-top-right-radius: ${width / 30}px;
    border-top-left-radius: ${width / 30}px;
`