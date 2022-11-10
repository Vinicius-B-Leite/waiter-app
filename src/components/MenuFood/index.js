import React from 'react';


import * as S from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function MenuFood({item}) {

    return (
        <S.Container>
            <S.Image
                source={item?.image}
            />
            <S.Name numberOfLines={1} >{item?.name}</S.Name>
            {/* <S.Description>{item?.description}</S.Description> */}
            <S.Price>R$ {item?.price.toFixed(2).replace('.', ',')}</S.Price>
            <S.AddCart>
                <Ionicons name='add-circle-sharp' size={18}/>
                <S.Quantity>0</S.Quantity>
            </S.AddCart>
        </S.Container>       
    );
}