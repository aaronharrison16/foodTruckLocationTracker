import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
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

const Tab = createBottomTabNavigator()

function RootContainer ({navigation}) {
  const scheme = useColorScheme()

  return (
    <SafeAreaView style={{flex: 1}}>
      <AppearanceProvider>
        <NavigationContainer theme={scheme === 'dark' ? Themes.darkTheme : Themes.lightTheme}>
          <StatusBar
            backgroundColor={scheme === 'dark' ? Colors.dark : Colors.light}
            barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}  
          />
          <View style={{flex: 1}}>
            <Tab.Navigator tabBar={props => <BottomNavBar {...props} />}>
              <Tab.Screen name='Home' component={HomeScreen} icon='home' />
              <Tab.Screen name='Landing' component={LandingScreen} icon='truck' />  
              <Tab.Screen name='Settings' component={SettingsScreen} icon='settings' />
            </Tab.Navigator>  
          </View>
        </NavigationContainer>
      </AppearanceProvider>
    </SafeAreaView>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
