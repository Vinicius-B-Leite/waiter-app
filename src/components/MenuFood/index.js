import React from 'react';


import * as S from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ImageBackground } from 'react-native';


export default function MenuFood({item}) {

    return (
        <S.Container>
            <ImageBackground source={require('../../assets/backgroundItens.png')} resizeMode="cover" style={{position: 'absolute', zIndex: -1, top: 0, left: '12%', width: '100%', height: '85%'}} blurRadius={50}  />
            <S.Image
                source={item?.image}
            />
            <S.Name numberOfLines={1} >{item?.name}</S.Name>
            {/* <S.Description>{item?.description}</S.Description> */}
            <S.Price>R$ {item?.price?.toFixed(2).replace('.', ',')}</S.Price>
            <S.AddCart>
                <Ionicons name='add-circle-sharp' size={18}/>
                <S.Quantity>0</S.Quantity>
            </S.AddCart>
        </S.Container>       
    );
}