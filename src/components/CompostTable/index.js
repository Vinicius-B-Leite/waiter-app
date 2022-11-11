import React from 'react';
import { Text, View } from 'react-native';

import * as S from './styles'
export default function CompostTable({number}) {
    console.log("🚀 ~ file: index.js ~ line 6 ~ CompostTable ~ number", number)
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
                <S.Char rotate={true}/>
                <S.Char rotate={true}/>
                <S.Char rotate={true}/>
            </S.Chars>
        </S.Container>
    );
}