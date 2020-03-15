import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const Button = ({
  onPress,
  label,
  styleOverride,
  labelStyleOverride
}) => (
  <TouchableOpacity style={[styles.button, styleOverride]} onPress={onPress}>
    <Text style={[styles.buttonText, labelStyleOverride]}>{`${label}`}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  button: {
    backgroundColor: 'lime',
    paddingVertical: 7.5,
    paddingHorizontal: 60,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 30
  }
})
