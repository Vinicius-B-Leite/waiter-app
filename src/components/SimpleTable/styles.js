import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';


const { width, height } = Dimensions.get('screen')

const CONTAINER_WIDTH = width / 15

export const Container = styled.TouchableOpacity`
    width: ${CONTAINER_WIDTH}%;
    height: 90%;
    flex-direction: row;
    ${props => props.rotate && css`
        transform: rotate(180deg);
        margin-right: 8%;
    `}
`;

export const Table = styled.View`
    ${props => props.isSelecting ? css`
        background-color: #f97e20 ;
    `: css`
        background-color: ${props.isSelected ? '#171717' : '#474747'} ;
    
    `}
    margin: 5% 0;   
    height: 90%;
    width: 60%;
    border-radius: ${CONTAINER_WIDTH}px;
`

export const Char = styled.View`
    ${props => props.isSelecting ? css`
        background-color: #f97e20 ;
    `: css`
        background-color: ${props.isSelected ? '#171717' : '#474747'} ;
    
    `}
    height: 25%;
    width: 50%;
    border-top-right-radius: ${CONTAINER_WIDTH / 2.5}px;
    border-bottom-right-radius: ${CONTAINER_WIDTH / 2.5}px;
`
export const Number = styled.Text`
    font-size: ${CONTAINER_WIDTH / 1.2}px;
    color: ${props => props.isSelected ? '#474747' : '#fff'};
    position: absolute;
    top: 35%;
    left: 25%;
    z-index: 5;
    ${props => props.rotate && css`
        transform: rotate(180deg);
    `}
`