import React from 'react';
import { View } from 'react-native';

import SimpleTable from '../SimpleTable'
import CompostTable from '../CompostTable'


import * as S from './styles'
export default function WaitingItem({item}) {
    const getItensQuantity = (local) =>{
        let total = 0
        item?.[local]?.forEach(i => {
            total += i.quantity
        })
        return total
    }

    let totalItens = getItensQuantity('Hamburgers') + getItensQuantity('Drinks') + getItensQuantity('DrenchFries') + getItensQuantity('Dessert')
    return (
        <S.Container>
            <S.ChairNumber>{item?.chair}</S.ChairNumber>
            <View style={{flex: 1}}>
                <S.TotalValue>R$ {item?.totalValue.toFixed(2).replace('.', ',')}</S.TotalValue>
                <S.Itens> {totalItens} iten(s)</S.Itens>
            </View>
            {
                item?.typeChair === 'simple' ? (
                    <SimpleTable number={''} rotate={item?.totalValue % 2 == 0 ? true : false}/>
                ) :
                    <CompostTable number={''} />
            }   
        </S.Container>
        
    );
}