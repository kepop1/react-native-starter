import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Core } from '../../Core'
import { Font } from '../../Font'

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
    ...Font.sizes.button,
    ...Font.family.openSansBold,
    color: 'white'
  },
  button: {
    backgroundColor: 'lime',
    paddingVertical: Core.unit / 2,
    paddingHorizontal: Core.unit * 4,
    alignSelf: 'center',
    borderRadius: Core.unit * 2,
    marginTop: Core.unit * 2
  }
})
