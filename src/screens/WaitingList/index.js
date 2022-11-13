import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import WaitingItem from '../../components/WaitingItem'
import { OrderContext } from '../../contexts/orderContext';
import * as S from './styles'


export default function WaitingList() {
  const { awaitingOrderList } = useContext(OrderContext)
  return (
    <S.Container>
      <S.Title>Lista de espera</S.Title>
      <FlatList
        data={awaitingOrderList}
        renderItem={({ item }) => <WaitingItem item={item} />}
      />
    </S.Container>
  );
}