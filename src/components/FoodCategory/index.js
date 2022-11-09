import React from 'react';
import * as S from './styles'
export default function FoodCategory({item, selectedCategory}) {
    return (
        <S.Container >
          {item.icon}
        </S.Container>
    );
}