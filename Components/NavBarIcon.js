import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { StyleSheet, Platform, View, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'

const NavBarIcon = props => {
  const { colors } = useTheme()
  let ButtonFeedback = TouchableOpacity
  let activeStatus = props.active ? styles.iconActive : styles.iconInactive

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonFeedback = TouchableNativeFeedback
  }

  return (
    <View style={styles.iconContainer} key={props.key}>
      <ButtonFeedback onPress={props.onPress}>
        <View style={styles.iconButton}>
          <Icon
            name={props.icon}
            size={props.size != null ? props.size : 30}
            color={props.color != null ? props.color : colors.secondary}
            style={{
              ...styles.icon,
              ...activeStatus,
              ...props.styles
            }}
          />
        </View>
      </ButtonFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent:'center',
    alignItems: 'center'
  },
  iconButton: {
    height: 50
  },
  icon: {
    margin: 10,
  },
  iconInactive: {
    opacity: 0.5
  },
  iconActive: {
    opacity: 1
  }
})

export { NavBarIcon }