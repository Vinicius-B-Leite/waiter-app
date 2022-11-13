import React, { useContext } from 'react';
import { View } from 'react-native';
import { TablesContext } from '../../contexts/tablesContext';

import * as S from './styles'

export default function SimpleTable({ rotate, number, tablesProps }) {

    const { tablesSelecteds } = useContext(TablesContext)
    const isSelected = tablesSelecteds.includes(number.toString())
    const isSelecting = tablesProps?.idTableSelected?.toString() === number.toString()

    const handleSelectTable = () => {
        if (tablesProps.setIdTableSelected){
            tablesProps.setIdTableSelected(number.toString())
        }
    }

    return (
        <S.Container 
            rotate={rotate} 
            onPress={() => handleSelectTable()}
        >
            <S.Number 
                rotate={rotate} 
                isSelected={isSelected}
                >{number}</S.Number>

            <S.Table 
                isSelected={isSelected} 
                isSelecting={isSelecting}    
            />

            <View style={{ flex: 1, justifyContent: 'space-evenly', marginLeft: '5%' }}>
                <S.Char 
                    isSelected={isSelected}
                    isSelecting={isSelecting}
                />
                <S.Char 
                    isSelected={isSelected}
                    isSelecting={isSelecting}        
                />
            </View>
            
        </S.Container>
    );
}