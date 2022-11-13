import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import SimpleTable from '../SimpleTable'
import CompostTable from '../CompostTable'


import * as S from './styles'



export default function WaitingItem({ item }) {
    console.log("🚀 ~ file: index.js ~ line 13 ~ WaitingItem ~ item", item)
    const [totalItens, setTotalItens] = useState()

    const getItensQuantity = () => {
        let keys = ['Hamburger', 'Drinks', 'FrenchFries', 'Dessert']
        let total = 0

        keys.forEach(key => {
            item[key]?.forEach(i => {
                if (i) {
                    total++
                }
            })
        })
        return total
    }

    useEffect(() => {
        setTotalItens(getItensQuantity())
    }, [])

    return (
        <S.Container>
            <S.ChairNumber>{item?.chair}</S.ChairNumber>
            <View style={{ flex: 1 }}>
                <S.TotalValue>R$ {item?.totalValue.toFixed(2).replace('.', ',')}</S.TotalValue>
                <S.Itens> {totalItens} iten(s)</S.Itens>
            </View>
            {
                item?.typeChair === 'simple' ? (
                    <SimpleTable number={''} rotate={item?.totalValue % 2 == 0 ? true : false} />
                ) :
                    <CompostTable number={''} />
            }
        </S.Container>

    );
}