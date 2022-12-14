import React, { useCallback, useContext, useEffect, useState } from 'react';


import * as S from './styles'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { ImageBackground } from 'react-native';
import { OrderContext } from '../../contexts/orderContext';
import { useFocusEffect } from '@react-navigation/native';



export default function ItemMenuFood({ item }) {

    const { handleAddItem, order } = useContext(OrderContext)
    let index = order[item.type]?.indexOf(item)
    const [quantity, setQuantity] = useState(0)

    useFocusEffect(
        useCallback(() => {
            setQuantity(order[item.type][index]?.quantity ? order[item.type][index]?.quantity : 0)
        }, [])
    )

    return (
        <S.Container>
            <ImageBackground source={require('../../assets/backgroundItens.png')} resizeMode="cover" style={{ position: 'absolute', zIndex: -1, top: 0, left: '12%', width: '100%', height: '85%' }} blurRadius={50} />
            <S.Image
                source={item?.image}
            />
            <S.Name numberOfLines={1} >{item?.name}</S.Name>
            {/* <S.Description>{item?.description}</S.Description> */}
            <S.Price>R$ {item?.price?.toFixed(2).replace('.', ',')}</S.Price>

            <S.AddCart onPress={() => {
                handleAddItem(item)
                setQuantity(oldQ => oldQ + 1)
            }}>
                <Ionicons name='add-circle-sharp' size={18} />
                <S.Quantity>{quantity}</S.Quantity>
            </S.AddCart>
        </S.Container>
    );
}