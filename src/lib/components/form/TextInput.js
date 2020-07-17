import React from 'react'
import { TextInput as RNTextInput, StyleSheet } from 'react-native'
import { Font } from '../../Font'
import { Core } from '../../Core'

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
    ...Font.sizes.subHeading,
    ...Font.family.openSansRegular,
    backgroundColor: 'white',
    paddingVertical: Core.unit,
    paddingHorizontal: Core.unit / 2,
    marginHorizontal: Core.unit * 2,
    marginBottom: Core.unit
  }
})
