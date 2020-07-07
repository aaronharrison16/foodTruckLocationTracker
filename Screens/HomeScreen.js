import React from 'react'
import { View } from 'react-native'

import { HeaderText } from '../Components'

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <HeaderText>From the HomeScreen</HeaderText>
    </View>
  )
}

export default HomeScreen