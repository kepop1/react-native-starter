import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'

export const Welcome = ({ navigation }) => (
  <SafeAreaView>
    <Text>Hello there!</Text>
    <Text>This is a sample app!</Text>
    <Button title="Login" onPress={() => navigation.navigate('Login')} />
  </SafeAreaView>
)
