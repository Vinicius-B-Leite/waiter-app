import React from 'react';
import { FlatList, View } from 'react-native';
import WaitingItem from '../../components/WaitingItem'
import * as S from './styles'


export default function WaitingList() {
  const waitingListArray = [
    {
      chair: '1',
      typeChair: 'simple',
      totalValue: 80.99,
      hamburgers: [
        {
          name: 'X-Salada',
          quantity: 2
        }
      ],
      drinks: [
        {
          name: 'coca-cola',
          quantity: 2
        }
      ],
      frenchFries: undefined,
      dessert: undefined
    },
    {
      chair: '6',
      typeChair: 'compost',
      totalValue: 150,
      hamburgers: [
        {
          name: 'X-Cheddar Supremo',
          quantity: 1
        },
        {
          name: 'X-Bacon',
          quantity: 1
        }
      ],
      drinks: [
        {
          name: 'pepsi 2L',
          quantity: 1
        }
      ],
      frenchFries: [
        {
          type: 'média',
          quantity: 1
        }
      ],
      dessert: [
        {
          name: 'sorvete',
          quantity: 2
        }
      ]
    }
  ]
  return (
    <S.Container>
      <S.Title>Lista de espera</S.Title>
      <FlatList
          data={waitingListArray}
          renderItem={({item}) => <WaitingItem item={item} />}
      />
    </S.Container>
  );
}