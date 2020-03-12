import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'

export const Register = ({ navigation }) => {
  return (
    <View>
      <Text>Register</Text>
      <TextInput />
      <Button
        title="Register"
        // onPress={() => navigation.navigate('Register')}
      />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}
