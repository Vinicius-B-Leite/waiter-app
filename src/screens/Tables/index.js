import React from 'react';
import CompostTable from '../../components/CompostTable';
import SimpleTable from '../../components/SimpleTable';
import * as S from './styles'

export default function Tables() {
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
        <SimpleTable number={1}/>
        <CompostTable number={2}/>
        <SimpleTable rotate={true} number={3}/>
      </S.Row>
      <S.Row>
        <SimpleTable number={4}/>
        <CompostTable number={5}/>
        <SimpleTable rotate={true} number={6}/>
      </S.Row>
      <S.Row>
        <SimpleTable number={7}/>
        <CompostTable number={8}/>
        <SimpleTable rotate={true} number={9}/>
      </S.Row>
    </S.Container>
      
  );
}