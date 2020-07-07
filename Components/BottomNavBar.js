import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { NavBarIcon } from '../Components'

const BottomNavBar = ({ state, descriptors, navigation }) => {
  const { colors } = useTheme()

  const onChangeScreen = (screenName, screenIndex) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: screenName
    });

    if (!(screenIndex === state.index) && !event.defaultPrevented) {
      navigation.navigate(screenName);
    }
  }

  const screenIsActive = (screenIndex) => {
    if (state.index === screenIndex) {
      return true
    }
    return false
  }

  return (
    <View style={styles.navBarContainer}>
    <View style={{
      backgroundColor: colors.background,
      ...styles.navBar
    }}>
      <NavBarIcon
        onPress={() => onChangeScreen('Home', 0)}
        active={screenIsActive(0)}
        icon='home'
      />
      <NavBarIcon
        onPress={() => onChangeScreen('Landing', 1)}
        active={screenIsActive(1)}
        icon='truck'
      />
      <NavBarIcon
        onPress={() => onChangeScreen('Settings', 2)}
        active={screenIsActive(2)}
        icon='settings'
      />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navBarContainer:{
    height: 55
  },
  navBar: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  navIcon: {
    opacity: 0.5
  }
})

export { BottomNavBar }
