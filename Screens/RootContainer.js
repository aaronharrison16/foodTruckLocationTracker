import React from 'react'
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import LandingScreen from './LandingScreen'
import Themes from '../Constants/Themes';
import Colors from '../Constants/Colors';
import { BottomNavBar } from '../Components';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function RootContainer ({navigation}) {
  const scheme = useColorScheme()
  const isSignedIn = false

  return (
    <SafeAreaView style={styles.container}>
      <AppearanceProvider>
        <NavigationContainer theme={scheme === 'dark' ? Themes.darkTheme : Themes.lightTheme}>
          <StatusBar
            backgroundColor={scheme === 'dark' ? Colors.dark : Colors.light}
            barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}  
          />
          {isSignedIn ? (
            <View style={styles.container}>
              <Tab.Navigator tabBar={props => <BottomNavBar {...props} />}>
                <Tab.Screen name='Home' component={HomeScreen} icon='home' />
                <Tab.Screen name='Landing' component={LandingScreen} icon='truck' />  
                <Tab.Screen name='Settings' component={SettingsScreen} icon='settings' />
              </Tab.Navigator>  
            </View>
          ) : (
            <Stack.Navigator 
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen name='Landing' component={LandingScreen} />
              <Stack.Screen name='SignUp' component={SignUpScreen} />
              <Stack.Screen name='Login' component={LoginScreen} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </AppearanceProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
