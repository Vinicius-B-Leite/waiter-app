import React from 'react';
import * as S from './styles'
export default function FoodCategory({item, selectedCategory, changeFoodCategory}) {
    return (
        <S.Container selected={selectedCategory == item.description} onPress={() => changeFoodCategory(item.description)} >
          {item.icon}
        </S.Container>
    );
}