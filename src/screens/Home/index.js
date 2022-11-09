import React, { useState } from 'react';
import * as S from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FoodCategory from '../../components/FoodCategory';
import { Dimensions, FlatList, View } from 'react-native';


export default function Home() {

    const [selectedCategory, setSelectedCategory] = useState('1')
    const foodCaregory = [
        {
            id: '1',
            description: 'Hamburger',
            icon: <FontAwesome5 name='hamburger' size={28} color={selectedCategory === '1' ? '#f97e20': '#ffff'}/>
        },
        {
            id: '2',
            description: 'Bebidas',
            icon: <Entypo name='drink' size={28} color={selectedCategory === '2' ? '#f97e20' : '#ffff'}/>
        },
        {
            id: '3',
            description: 'Batatas',
            icon: <MaterialCommunityIcons name='french-fries' size={28} />
        },
        {
            id: '4',
            description: 'Sobremesa',
            icon: <Ionicons name='ice-cream' size={28} />
        },
    ]
    return (
        <S.Container>
            <S.Header>
                <S.Menu>
                    <S.MenuRow />
                    <S.MenuRow />
                    <S.MenuRow />
                </S.Menu>
                <Entypo name='shopping-cart' size={27} color='#d3d3d3' />
            </S.Header>

            <S.InputArea>
                <Feather name='search' size={18} />
                <S.Input placeholder='Pesquisar' />
            </S.InputArea>

            <S.FoodCategoryList>
                <FlatList
                    data={foodCaregory}
                    renderItem={({ item }) => <FoodCategory item={item} selectedCategory={selectedCategory} />}
                    horizontal
                    ItemSeparatorComponent={() => <View style={{ width: Dimensions.get('screen').width * 0.04 }} />}
                />
            </S.FoodCategoryList>
        </S.Container>
    );
}