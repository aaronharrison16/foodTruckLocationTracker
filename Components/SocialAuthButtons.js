import React from 'react'
import { StyleSheet, View } from 'react-native'
import { GoogleSignin } from '@react-native-community/google-signin';

import { PrimaryButton } from './PrimaryButton'

GoogleSignin.configure({
  webClientId: '1050221137357-o5cp8fifperkhghm320dqdqostst5k35.apps.googleusercontent.com',
})  

async function onGoogleSignInPress() {
  console.log('onGoogleSignInPress')
  const { idToken } = await GoogleSignin.signIn()
  console.log(idToken)
}

const onFacebookSignInPress = () => {
  console.log('onFacebookSignInPress')
}

const SocialAuthButtons = props => {
  return (
    <View style={styles.socialAuthButtonContainer}>
      <PrimaryButton onPress={onFacebookSignInPress}>Continue with Facebook</PrimaryButton>
      <PrimaryButton onPress={onGoogleSignInPress}>Continue with Google</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  socialAuthButtonContainer: {
    height: '18%',
    paddingHorizontal: 18,
    paddingTop: 25,
    justifyContent: 'space-around'
  }
})

export { SocialAuthButtons }
