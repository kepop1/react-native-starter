import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Font } from '../../Font'
import { Core } from '../../Core'

export const TextButton = ({ onPress, label, styleOverride }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.textButton, styleOverride]}>{`${label}`}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  textButton: {
    ...Font.sizes.body,
    ...Font.family.openSansBold,
    color: 'lime',
    paddingVertical: Core.unit / 2,
    paddingHorizontal: Core.unit * 4,
    alignSelf: 'center',
    marginTop: Core.unit,
    textAlign: 'center'
  }
})
