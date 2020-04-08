import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const TextButton = ({ onPress, label, styleOverride }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.textButton, styleOverride]}>{`${label}`}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  textButton: {
    fontSize: 16,
    fontWeight: '600',
    color: 'lime',
    paddingVertical: 7.5,
    paddingHorizontal: 60,
    alignSelf: 'center',
    marginTop: 15,
    textAlign: 'center'
  }
})
