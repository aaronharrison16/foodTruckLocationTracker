import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin';
import { Button } from 'react-native';

GoogleSignin.configure({
  webClientId: '1050221137357-o5cp8fifperkhghm320dqdqostst5k35.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

function GoogleSignIn() {
  return (
    <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
  );
}

const LandingScreen = props => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  function onAuthStateChanged (user) {
    setUser(user)
    if (initializing) setInitializing(false)
  } 

  if (initializing) return null

  if (!user) {
    return (
      <View>
        {GoogleSignIn()} 
        <Text>Login</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>Sign Up</Text>
      <Text>Sign In</Text>
    </View>
  )
}

export default LandingScreen
