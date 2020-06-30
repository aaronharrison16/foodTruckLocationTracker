import React from 'react'
import { View, Text } from 'react-native'

const NavBar = props => {
  return (
    <View style={{width: '100%', height: 50, backgroundColor: 'steelblue', justifyContent: 'space-between', flexDirection: 'row', padding: 8, alignItems: 'center' }}>
      <Text>NAVBAR</Text>
    </View>
  )
}

export default NavBar