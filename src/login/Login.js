import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'

export const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <TextInput />
      <Button
        title="Login"
        // onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  )
}
