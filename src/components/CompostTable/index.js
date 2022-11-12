import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { TablesContext } from '../../contexts/tablesContext';

import * as S from './styles'
export default function CompostTable({number, tablesProps}) {

    const { tablesSelecteds } = useContext(TablesContext)
    const isSelected =  tablesSelecteds.includes(number.toString())
    const isSelecting = tablesProps?.idTableSelected?.toString() == number.toString()


    return (
        <S.Container onPress={() => tablesProps?.setIdTableSelected(number.toString())}>

            <S.Number 
                isSelected={isSelected}>{number}</S.Number>

            <S.Chars>
                {
                    [1, 2, 3].map(i => <S.Char key={i} 
                        isSelected={isSelected}
                        isSelecting={isSelecting}/>)
                }
            </S.Chars>

            <S.Table 
                isSelected={isSelected}
                isSelecting={isSelecting}        
            />

            <S.Chars>
                {
                    [0, 1, 2].map(i => <S.Char key={i}
                        rotate={true} 
                        isSelected={isSelected}
                        isSelecting={isSelecting}    
                    />)
                }
            </S.Chars>
            
        </S.Container>
    );
}