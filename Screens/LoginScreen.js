import React from 'react'
import { StyleSheet, View } from 'react-native'
import { HeaderText, SocialAuthButtons } from '../Components'
import { connect } from 'react-redux'

const LoginScreen = props => {
  return (
    <View style={styles.container}>
      <SocialAuthButtons />
      <HeaderText>From the LoginScreen</HeaderText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = () => {

  return {}
}

export default connect(mapStateToProps, null)(LoginScreen)
