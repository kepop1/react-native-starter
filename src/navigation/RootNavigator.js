import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import App from '../App'
import { Login } from '../login/Login'
import { Register } from '../register/Register'
import { Welcome } from '../welcome/Welcome'

const RootNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="App"
        component={App}
        options={{ title: 'Start Screen' }}
      />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default RootNavigator
