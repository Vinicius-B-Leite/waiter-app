import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: ${Dimensions.get('screen').height / 8}px;
    flex-direction: row;
    margin: 5% 0;
`;
export const ImageItem = styled.Image`
    width: 40%;
    height: 100%;
`;
export const Main = styled.View`
    flex: 1;
`;
export const Name = styled.Text`
    font-size: 15px;
    color: #fff;
    line-height: ${Dimensions.get('screen').height / 30}px;
`;
export const Price = styled.Text`
    font-size: 19px;
    color: #fff;
    line-height: ${Dimensions.get('screen').height / 25}px;
    font-weight: bold;
    color: #f97e20;
`;
export const ButtonQuantity = styled.View`
    flex-direction: row;
    background-color: #474747;
    align-items: center;
    border-radius: ${Dimensions.get('screen').width}px;
    width: 40%;
    justify-content: space-between;
    margin-top: 5%;
`;

export const IconContainerButton = styled.TouchableOpacity`
    flex: 1;
    padding: 0 10%;
`

export const TextButtonQuantity = styled.Text`
    font-size: 15px;
    margin: 0 4%;
`;