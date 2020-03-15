import React from 'react'
import { TextInput as RNTextInput, StyleSheet } from 'react-native'

export const TextInput = ({
  placeholder,
  onBlur,
  onChangeText,
  autoCapitalize,
  keyboardType,
  value,
  autoFocus,
  styleOverride
}) => {
  return (
    <RNTextInput
      style={[styles.textInput, styleOverride]}
      placeholder={placeholder}
      onBlur={onBlur}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      value={value}
      autoFocus={autoFocus}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 14,
    fontWeight: '400',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginHorizontal: 35,
    marginBottom: 20
  }
})
