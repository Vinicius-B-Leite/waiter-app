import React from 'react';
import { View } from 'react-native';

import * as S from './styles'

export default function SimpleTable({ rotate, number }) {
    return (
        <S.Container rotate={rotate}>
            <S.Number rotate={rotate}>{number}</S.Number>
            <S.Table />
            <View style={{ flex: 1, justifyContent: 'space-evenly', marginLeft: '5%' }}>
                <S.Char />
                <S.Char />
            </View>
        </S.Container>
    );
}