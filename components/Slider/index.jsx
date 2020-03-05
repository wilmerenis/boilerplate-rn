import React from 'react'
import { FlatList, View, Text } from 'react-native'

import Card from './Card'
import { Wrapper, Title } from './index.style'

export default function SliderMovies({ dataSource  }) {
  console.log(dataSource)
  return(
    <Wrapper>
      <Title>Popular</Title>
      <FlatList
        data={dataSource}
        horizontal
        renderItem={({item}) => <Card {...item} />}
        keyExtractor={item => item.id.toString()}
      />
    </Wrapper>
  )
}