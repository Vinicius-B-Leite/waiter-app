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
