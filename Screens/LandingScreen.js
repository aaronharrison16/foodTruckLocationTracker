import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

import { PrimaryButton, HeaderText } from '../Components'

const LandingScreen = () => {
  const { colors } = useTheme()
  
  const onSignUpPress = () => {
    console.log('onSignUpPress')
  }
  const onLogInPress = () => {
    console.log('onLogInPress')
  }

  return (
    <>
      <View style={styles.infoContainer}>
        <HeaderText>From the LandingScreen</HeaderText>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          onPress={onSignUpPress}
          style={styles.button}
        >
          Sign up
        </PrimaryButton>

        <PrimaryButton
          onPress={onLogInPress}
          style={styles.button}
          color={colors.secondary}
          outlined={true}
        >
          Log in
        </PrimaryButton>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10
  },
  button: {
    width: 350
  }
})

export default LandingScreen
