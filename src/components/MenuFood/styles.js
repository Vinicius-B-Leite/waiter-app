import { Dimensions } from 'react-native';
import styled from 'styled-components/native';


const { width, height } = Dimensions.get('screen')

const NAME_SIZE = width / 23


export const Container = styled.View`
    background-color: #363636;
    width: ${width / 2.5}px;
    height:  ${height / 3.5}px;
    padding: ${width / 20}px;
    margin:  ${height / 30}px 10px;
`;
export const Image = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: 100%;
    height: ${height / 10}px;
`;
export const Name = styled.Text`
    font-weight: bold;
    font-size: ${NAME_SIZE}px;
    padding: 5% 0;
`;
export const Price = styled.Text`
    font-style: italic;
    color: #f97e20;
    padding: 5% 0 10%;
`;
export const Description = styled.Text``;
export const AddCart = styled.TouchableOpacity`
    background-color: #474747;
    flex-direction: row;
    justify-content: space-between;
    width: 55%;
    padding: 2.2% 6%;
    border-radius: ${width * 0.1}px;
`;
export const Quantity = styled.Text`
    margin-right: 5%;
`;