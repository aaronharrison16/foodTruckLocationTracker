import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import PrimaryButton from '../Components/PrimaryButton'
import Colors from '../Constants/Colors'

const LandingScreen = () => {
  return (
    <>
      <View style={styles.infoContainer}>

      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton style={styles.button}>Sign up</PrimaryButton>
        <PrimaryButton style={styles.button} color={Colors.secondary} outlined={true}>Log in</PrimaryButton>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 11,
    backgroundColor: 'red'
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
