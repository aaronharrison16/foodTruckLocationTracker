import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'

const Drawer = createDrawerNavigator()

function RootContainer () {
  return (
    <NavigationContainer>
      <Drawer.Navigator edgeWidth={75}>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Settings' component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
