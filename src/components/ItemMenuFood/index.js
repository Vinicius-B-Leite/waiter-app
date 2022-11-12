import React, { useState } from 'react';


import * as S from './styles'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { ImageBackground } from 'react-native';



export default function ItemMenuFood({ item, setFoods }) {

    const [quantity, setQuantity] = useState(item.quantity || 0)

    const addSelectedItens = (oldF) => {

        let type = item.type
        let index = oldF[type].indexOf(item)
        let data = item
        data.quantity = item.quantity + 1 || 1
        oldF[type][index] = data
        
        setQuantity(oldQuantity => oldQuantity + 1)

        return oldF
    }

    return (
        <S.Container>
            <ImageBackground source={require('../../assets/backgroundItens.png')} resizeMode="cover" style={{ position: 'absolute', zIndex: -1, top: 0, left: '12%', width: '100%', height: '85%' }} blurRadius={50} />
            <S.Image
                source={item?.image}
            />
            <S.Name numberOfLines={1} >{item?.name}</S.Name>
            {/* <S.Description>{item?.description}</S.Description> */}
            <S.Price>R$ {item?.price?.toFixed(2).replace('.', ',')}</S.Price>

            <S.AddCart onPress={() => setFoods((oldF) => addSelectedItens(oldF))}>
                <Ionicons name='add-circle-sharp' size={18} />
                <S.Quantity>{quantity}</S.Quantity>
            </S.AddCart>
        </S.Container>
    );
}