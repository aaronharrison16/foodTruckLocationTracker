import { GoogleSignin } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: '1050221137357-o5cp8fifperkhghm320dqdqostst5k35.apps.googleusercontent.com',
});

export async function googleSignIn() {
  const { idToken } = await GoogleSignin.signIn()
  console.log(idToken)
  // const googleCredential = auth.GoogleAuthProvider.credential(idToken)
  // console.log(googleCredential)
  // auth().signInWithCredential(googleCredential)
}