import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { OrderContext } from '../../contexts/orderContext';



import * as S from './styles'



export default function OrderItem({ item }) {

    const { handleAddItem, hadleRemoveItem } = useContext(OrderContext)

    return (
        <S.Container>
            <S.ImageItem
                source={item?.image}
                resizeMode='contain'
            />
            <S.Main>
                <View>
                    <S.Name>{item?.name}</S.Name>
                    <S.Price>R$ {item?.price?.toFixed(2).replace('.', ',')}</S.Price>
                </View>

                <S.ButtonQuantity>

                    <S.IconContainerButton onPress={() => hadleRemoveItem(item)}>
                        <Ionicons name='remove-circle' size={17} color='#fff' />
                    </S.IconContainerButton>

                    <S.TextButtonQuantity>{item?.quantity}</S.TextButtonQuantity>

                    <S.IconContainerButton onPress={() => handleAddItem(item)}>
                        <Ionicons name='add-circle' size={17} color='#fff' />
                    </S.IconContainerButton>

                </S.ButtonQuantity>
            </S.Main>
        </S.Container>
    );
}