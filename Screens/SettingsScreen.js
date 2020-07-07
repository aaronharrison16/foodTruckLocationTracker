import React from 'react'
import { View } from 'react-native'

import { HeaderText } from '../Components'

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <HeaderText>From the SettingsScreen</HeaderText>
    </View>
  )
}

export default SettingsScreen