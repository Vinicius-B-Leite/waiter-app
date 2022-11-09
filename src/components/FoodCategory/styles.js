import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #363636;
    padding: ${Dimensions.get('screen').width * 0.05}px;
    border-radius: ${Dimensions.get('screen').width * 0.05}px;
`;