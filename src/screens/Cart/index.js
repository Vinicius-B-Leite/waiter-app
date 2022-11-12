import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import OrderItem from '../../components/OrderItem';
import { OrderContext } from '../../contexts/orderContext';
import * as S from './styles'


export default function Cart({ navigation }) {
    const { totalValue, allItens } = useContext(OrderContext)
    const [data, setData] = useState([...allItens])


    return (
        <S.Container>
            <S.Header>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-outline' size={30} color='#fff' />
                </TouchableOpacity>
                <S.HeaderTitle>Pedido</S.HeaderTitle>
            </S.Header>

            <S.Itens
                data={allItens}
                renderItem={({ item }) => <OrderItem item={item} />}
            />

            <S.ValueContainer>
                <S.TotalValue>Total:</S.TotalValue>
                <S.TotalValue>R$ {totalValue.toFixed(2).replace('.', ',')}</S.TotalValue>
            </S.ValueContainer>

            <S.ButtonGoToTables>
                <S.TextGoToTables>Selecionar mesa</S.TextGoToTables>
            </S.ButtonGoToTables>
        </S.Container>
    );
}