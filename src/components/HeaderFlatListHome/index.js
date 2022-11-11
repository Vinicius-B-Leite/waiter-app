import React, { useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FoodCategory from '../FoodCategory'
import Entypo from 'react-native-vector-icons/Entypo'

import * as S from './styles'
import { menuFood } from '../../data';





export default function HeaderFlatListHome({selectedCategory, changeFoodCategory, setSearchItens}) {

    const [searchMenuItem, setSearchMenuItem] = useState('')

    const foodCaregory = [
        {
            id: '1',
            description: 'Hamburger',
            icon: <FontAwesome5 name='hamburger' size={28} color={selectedCategory === 'Hamburger' ? '#f97e20' : '#ffff'} />
        },
        {
            id: '2',
            description: 'Bebidas',
            icon: <Entypo name='drink' size={28} color={selectedCategory === 'Bebidas' ? '#f97e20' : '#ffff'} />
        },
        {
            id: '3',
            description: 'Batatas',
            icon: <MaterialCommunityIcons name='french-fries' size={28} color={selectedCategory === 'Batatas' ? '#f97e20' : '#ffff'} />
        },
        {
            id: '4',
            description: 'Sobremesa',
            icon: <Ionicons name='ice-cream' size={28} color={selectedCategory === 'Sobremesa' ? '#f97e20' : '#ffff'} />
        },
    ]
    const handleSearch = (text) => {
        let data = []
        let hamburger = menuFood.Hamburger.filter(i => {
            if(i.name.includes(text)){
                i['type'] = 'Hamburger'
                return i
            }
        })
        let drinks = menuFood.Bebidas.filter(i => {
            if(i.name.includes(text)){
                i['type'] = 'Bebidas'
                return i
            }
        })

        data = [...hamburger, ...drinks]
        setSearchItens(data)
        
    }


    return (
        <>
            <S.InputArea>
                <Feather name='search' size={21} />
                <S.Input placeholder='Pesquisar' onChangeText={(text) => {
                    setSearchMenuItem(text)
                    handleSearch(text)}
                } />
            </S.InputArea>

            <S.FoodCategoryList>
                <FlatList
                    data={foodCaregory}
                    renderItem={({ item }) => <FoodCategory item={item} selectedCategory={selectedCategory} changeFoodCategory={changeFoodCategory}/>}
                    horizontal
                    ItemSeparatorComponent={() => <View style={{ width: Dimensions.get('screen').width * 0.04 }} />}
                />
            </S.FoodCategoryList>
        </>
    );
}