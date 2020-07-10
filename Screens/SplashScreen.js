import React from 'react'
import { View } from 'react-native'
import { HeaderText } from '../Components'
import { connect } from 'react-redux'

const SplashScreen = props => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <HeaderText>SplashScreen Loading...</HeaderText>
    </View>
  )
}

const mapStateToProps = () => {

  return {}
}

export default connect(mapStateToProps, null)(SplashScreen)
