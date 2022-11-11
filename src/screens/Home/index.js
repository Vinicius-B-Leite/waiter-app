import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles'
import Entypo from 'react-native-vector-icons/Entypo'

import { Dimensions, FlatList, View, Animated } from 'react-native';
import MenuFood from '../../components/MenuFood';
import { menuFood } from '../../data';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FoodCategory from '../../components/FoodCategory'


const { width, height } = Dimensions.get('screen')


export default function Home() {

    const [selectedCategory, setSelectedCategory] = useState('Hamburger')
    const scrollY = useRef(new Animated.Value(0)).current
    const inputRef = useRef()

    const [foods, setFoods] = useState(menuFood)
    const [searchItens, setSearchItens] = useState('')
    const [searchInput, setSearchInput] = useState('')


    const handleSearch = () => {
        let data = []
        let hamburger = menuFood.Hamburger.filter(i => {
            if (i.name.includes(searchInput)) {
                i['type'] = 'Hamburger'
                return i
            }
        })
        let drinks = menuFood.Bebidas.filter(i => {
            if (i.name.includes(searchInput)) {
                i['type'] = 'Bebidas'
                return i
            }
        })

        data = [...hamburger, ...drinks]
        setSearchItens(data)

    }

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


    const changeFoodCategory = (description) => {
        setSelectedCategory(description)
    }
    console.log(inputRef?.current?.isFocused(), searchItens, foods[selectedCategory])

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

            <Animated.View
                style={{
                    marginTop: scrollY.interpolate({
                        inputRange: [0, 40, 80, 110, 140, 180],
                        outputRange: ['5%', '0%', '-5%', '-10%', '-15%', '-21%'],
                        extrapolate: 'clamp'
                    }),
                    zIndex: -1
                }}
            >
                <S.InputArea>
                    <Feather name='search' size={21} />
                    <S.Input
                        ref={inputRef}
                        placeholder='Pesquisar'
                        value={searchInput}
                        onChangeText={(text) => {
                            setSearchInput(text)
                            handleSearch()
                        }
                        } />
                </S.InputArea>


            </Animated.View>

            <S.Menufood>
                <Animated.FlatList
                    style={{
                        flex: 1,
                        backgroundColor: '#242323',
                        zIndex: 2
                    }}
                    data={searchInput?.length > 0 ? searchItens : foods[selectedCategory]}
                    renderItem={({ item }) => <MenuFood item={item} />}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 40 }} />}
                    ListHeaderComponent={() => (
                        <S.FoodCategoryList>
                            <FlatList
                                data={foodCaregory}
                                renderItem={({ item }) => <FoodCategory item={item} selectedCategory={selectedCategory} changeFoodCategory={changeFoodCategory} />}
                                horizontal
                                ItemSeparatorComponent={() => <View style={{ width: Dimensions.get('screen').width * 0.04 }} />}
                            />
                        </S.FoodCategoryList>
                    )}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    y: scrollY
                                }
                            }
                        }
                    ],
                        {
                            useNativeDriver: false
                        }
                    )}
                />
            </S.Menufood>
        </S.Container>
    );
}


