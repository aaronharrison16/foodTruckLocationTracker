import React from 'react'
import { View, Text, Platform } from 'react-native'
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

const PrimaryButton = props => {
  const { colors } = useTheme()
  let ButtonFeedback = TouchableOpacity
  let buttonProps = {}
  let textProps = {}
  let color = props.color != null ? props.color : colors.primary
  let textColor = props.textColor != null ? props.textColor : 'white'

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonFeedback = TouchableNativeFeedback
  }

  if (props.outlined) {
    buttonProps['borderColor'] = color
    buttonProps['backgroundColor'] = 'transparent'
    textProps['color'] = color 
  } else {
    buttonProps['backgroundColor'] = color
    buttonProps['borderColor'] = color
    textProps['color'] = textColor
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonFeedback onPress={props.onPress}>
        <View style={{
          ...styles.button,
          ...buttonProps,
          ...props.style
        }}>
          <Text style={{
            ...styles.buttonText,
            ...textProps,
            ...props.textStyle
          }}>
            {props.children}
          </Text>
        </View>
      </ButtonFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    borderWidth: 1.8,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: '700'
  }
})

export { PrimaryButton }
