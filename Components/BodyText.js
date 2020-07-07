import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ApplicationStyles from '../Constants/ApplicationStyles';

const BodyText = props => {
  const { colors } = useTheme()

  return (
    <View>
      <Text style={{
        color: colors.text,
        ...styles.text,
        ...props.style  
      }}>
        {props.children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: ApplicationStyles.text.mediumText
  }
})

export { BodyText }