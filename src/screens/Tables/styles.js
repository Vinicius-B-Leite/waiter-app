import { Dimensions } from 'react-native';
import styled from 'styled-components/native';


const {width, height} = Dimensions.get('screen')

const FONT_SIZE = height / 40

export const Container = styled.View`
    flex: 1;
    background-color: #242323;
`;

export const Header = styled.View`
    padding: 5%;
    flex-direction: row;
    position: relative;
`
export const MainRoom = styled.View`
    background-color: #f97e20;
    padding: 3%;
    width: 60%;
    justify-content: center;
    align-items: center;
    border-radius: ${width / 5}px;
    z-index: 2;
`
export const SecondRoom = styled.View`
    background-color: #171717;
    padding: ${height / 60}px;
    width: ${width / 1.8}px;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 3%;
    top: 38%;
    border-radius: ${width / 5}px;

`
export const NameRoom = styled.Text.attrs({
    numberOfLines: 1
})`
    font-size: ${FONT_SIZE}px;
    color: ${props => props.color};
    font-weight: ${props => props.weight || 'normal'};
`

export const Row = styled.View`
    flex-direction: row;
    width: 100%;
    height: ${height / 6}px;
    margin: 5%;
    justify-content: space-between;
    align-items: center;
`

export const SelectTableButton = styled.TouchableOpacity`
    width: 90%;
    position: absolute;
    bottom: 5%;
    left: 5%;
    background-color: transparent;
    border-width: 2px;
    border-color: #f97e20;
    justify-content: center;
    align-items: center;
    padding: 5%;
    border-radius: ${width}px;
`

export const TextSelectedTableButton = styled.Text`
    color: #f97e20;
    font-size: 18px;
    font-weight: bold;
`
