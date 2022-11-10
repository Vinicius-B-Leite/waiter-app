import React, { useState } from 'react';
import * as S from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FoodCategory from '../../components/FoodCategory';
import { Dimensions, FlatList, View } from 'react-native';
import MenuFood from '../../components/MenuFood';


export default function Home() {



    const menuFood = [
        {
            id: '1',
            name: 'X-Salada',
            description: 'Hamburger 200g, pão, queijo, cebola roxa, alface e tomate',
            image: require('../../assets/h1.png'),
            price: 14
        },
        {
            id: '2',
            name: 'Cheddar Supremo',
            description: 'Hamburger 200g, pão e muito cheddar',
            image: require('../../assets/h2.png'),
            price: 20
        },
        {
            id: '3',
            name: 'X-Batman Cavaleiro das Trevas',
            description: 'Hamburger 200g, pão, queijo e bacon',
            image: require('../../assets/h3.png'),
            price: 18
        },
        {
            id: '4',
            name: 'X-Bacon',
            description: 'Hamburger 200g, pão e bacon',
            image: require('../../assets/h4.png'),
            price: 15
        },
        {
            id: '5',
            name: 'Combo Casal',
            description: 'Hamburger 200g, pão, queijo, cebola roxa, alface e tomate cada',
            image: require('../../assets/h5.png'),
            price: 31
        },
        {
            id: '6',
            name: 'Combo Casal',
            description: 'Hamburger 200g, pão, queijo, cebola roxa, alface e tomate cada',
            image: require('../../assets/h5.png'),
            price: 31
        },
        {
            id: '7',
            name: 'Combo Casal',
            description: 'Hamburger 200g, pão, queijo, cebola roxa, alface e tomate cada',
            image: require('../../assets/h5.png'),
            price: 31
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

            <S.Menufood>
                <FlatList
                    data={menuFood}
                    renderItem={({ item }) => <MenuFood item={item} />}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={HeaderFlatList}
                    ItemSeparatorComponent={() => <View style={{width: 40}} />}
                />
            </S.Menufood>
        </S.Container>
    );
}



function HeaderFlatList() {
    const [selectedCategory, setSelectedCategory] = useState('1')

    const foodCaregory = [
        {
            id: '1',
            description: 'Hamburger',
            icon: <FontAwesome5 name='hamburger' size={28} color={selectedCategory === '1' ? '#f97e20' : '#ffff'} />
        },
        {
            id: '2',
            description: 'Bebidas',
            icon: <Entypo name='drink' size={28} color={selectedCategory === '2' ? '#f97e20' : '#ffff'} />
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
        <>
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
        </>
    )
}