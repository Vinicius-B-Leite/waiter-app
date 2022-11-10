import React from 'react';
import { Text, View } from 'react-native';

import * as S from './styles'
export default function CompostTable({number}) {
    return (
        <S.Container>
            <S.Number>{number}</S.Number>
            <S.Chars>
                <S.Char/>
                <S.Char/>
                <S.Char/>
            </S.Chars>
            <S.Table/>
            <S.Chars>
                <S.Char/>
                <S.Char/>
                <S.Char/>
            </S.Chars>
        </S.Container>
    );
}