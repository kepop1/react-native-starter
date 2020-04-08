import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { Button, TextButton } from '../lib'

export const Welcome = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Welcome to the React-Native-Starter App</Text>
    <Text style={styles.text}>
      This app will give you some different things out the box. It might seem a
      little barebones or OTT but give it a while and even make it your own!
    </Text>

    <Button onPress={() => navigation.navigate('Register')} label="Register" />
    <TextButton
      onPress={() => navigation.navigate('Login')}
      label="Already have an account? Login!"
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  header: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 30
  },
  text: {
    paddingVertical: 60,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22
  }
})
