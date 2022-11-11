import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: #363636;
    padding: ${Dimensions.get('screen').width * 0.04}px;
    border-radius: ${Dimensions.get('screen').width * 0.05}px;
    ${props => props.selected && css`
        border-width: 1.5px;
        border-color: #f97e20;
    `}
`;