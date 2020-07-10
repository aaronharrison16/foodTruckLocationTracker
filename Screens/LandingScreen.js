import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { connect } from 'react-redux'

import { PrimaryButton, HeaderText } from '../Components'
import { Carousel } from '../Components/Carousel'

const LandingScreen = props => {
  const { colors } = useTheme()
  
  const onSignUpPress = () => {
    props.navigation.navigate('SignUp')
  }
  const onLogInPress = () => {
    props.navigation.navigate('Login')
  }

  return (
    <>
      <View style={styles.infoContainer}>
        <Carousel
          style="slides"
          items={[{
            title: 'Welcome, swipe to continue.',
          }, {
            title: 'About feature X.',
          }, {
            title: 'About feature Y.',
          }, {
            title: 'About feature Z.',
          }]}
        />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    height: '18%',
    justifyContent: 'space-around',
    paddingHorizontal: 18,
    paddingBottom: 10
  }
})

const mapStateToProps = () => {

  return {}
}

export default connect(mapStateToProps, null)(LandingScreen)
