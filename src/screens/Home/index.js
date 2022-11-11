import React, { useEffect, useState } from 'react';
import * as S from './styles'
import Entypo from 'react-native-vector-icons/Entypo'

import { Dimensions, FlatList, View } from 'react-native';
import MenuFood from '../../components/MenuFood';
import HeaderFlatListHome from '../../components/HeaderFlatListHome';
import { menuFood } from '../../data';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('Hamburger')
    const [searchItens, setSearchItens] = useState()

    
    
    

    const changeFoodCategory = (description) => {
        setSelectedCategory(description)
    }

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
                    data={ searchItens || menuFood[selectedCategory]}
                    renderItem={({ item }) => <MenuFood item={item} />}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => <HeaderFlatListHome setSearchItens={setSearchItens} selectedCategory={selectedCategory} changeFoodCategory={changeFoodCategory}/>}
                    ItemSeparatorComponent={() => <View style={{width: 40}} />}
                />
            </S.Menufood>
        </S.Container>
    );
}


