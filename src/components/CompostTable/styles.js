import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';


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
    border-top-right-radius: ${width / 40}px;
    border-top-left-radius: ${width / 40}px;
    ${props => props.rotate && css`
        transform: rotate(180deg);
    `}

`

export const Number = styled.Text`
    font-size: 20px;
    color: #fff;
    position: absolute;
    top: 35%;
    left: 45%;
    z-index: 5;
`