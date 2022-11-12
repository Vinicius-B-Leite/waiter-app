import React, { useContext, useState } from 'react';
import CompostTable from '../../components/CompostTable';
import SimpleTable from '../../components/SimpleTable';
import { TablesContext } from '../../contexts/tablesContext';
import * as S from './styles'

export default function Tables({ route, navigation }) {

  const selectTable = route?.params?.selectTable

  const [idTableSelected, setIdTableSelected] = useState('')
  const { handleSelectTable } = useContext(TablesContext)
  const tablesProps = selectTable ? {
    idTableSelected,
    setIdTableSelected
  } : {}

  return (
    <S.Container>
      <S.Header>
        <S.MainRoom>
          <S.NameRoom color='#242323' weight='bold'>Salão Principal</S.NameRoom>
        </S.MainRoom>

        <S.SecondRoom>
          <S.NameRoom color='#fff' >Terraço</S.NameRoom>
        </S.SecondRoom>
      </S.Header>
      <S.Row>
        <SimpleTable number={1} tablesProps={tablesProps}/>
        <CompostTable number={2} tablesProps={tablesProps}/>
        <SimpleTable rotate={true} tablesProps={tablesProps} number={3}/>
      </S.Row>
      <S.Row>
        <SimpleTable number={4} tablesProps={tablesProps} />
        <CompostTable number={5} tablesProps={tablesProps} />
        <SimpleTable rotate={true} tablesProps={tablesProps} number={6} />
      </S.Row>
      <S.Row>
        <SimpleTable number={7} tablesProps={tablesProps} />
        <CompostTable number={8} tablesProps={tablesProps} />
        <SimpleTable rotate={true} tablesProps={tablesProps} number={9} />
      </S.Row>

      {
        selectTable && <S.SelectTableButton onPress={() => {
          handleSelectTable(idTableSelected)
          navigation.goBack()
        }}>
          <S.TextSelectedTableButton>Selecionar mesa</S.TextSelectedTableButton>
        </S.SelectTableButton>
      }
    </S.Container>

  );
}