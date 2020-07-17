import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { ROUTE_LOGIN, ROUTE_REGISTER } from '../navigation/constants'
import { Button, TextButton, Core, Font } from '../lib'

export const Welcome = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.header}>React-Native-Starter App</Text>
    <Text style={styles.text}>
      This app will give you some different things out the box. It might seem a
      little barebones or OTT but give it a while and even make it your own!
    </Text>

    <Button
      onPress={() => navigation.navigate(ROUTE_REGISTER)}
      label="Register"
    />
    <TextButton
      onPress={() => navigation.navigate(ROUTE_LOGIN)}
      label="Already have an account? Login!"
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: Core.unit
  },
  header: {
    ...Font.sizes.heading,
    ...Font.family.openSansBold,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: Core.unit * 2
  },
  text: {
    paddingVertical: Core.unit * 3,
    textAlign: 'center',
    ...Font.sizes.body,
    ...Font.family.openSansRegular,
    lineHeight: 22
  }
})
