import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../login/Login'
import { Register } from '../register/Register'
import { Welcome } from '../welcome/Welcome'
import { Main } from '../main/Main'

import { Font } from '../lib'

import {
  ROUTE_WELCOME,
  ROUTE_REGISTER,
  ROUTE_LOGIN,
  ROUTE_MAIN
} from './constants'

const RootNavigator = () => {
  const Stack = createStackNavigator()

  // Initial Route Name is implicitly set as the first screen in the stack.
  return (
    <Stack.Navigator screenOptions={HeaderConfig}>
      <Stack.Screen
        name={ROUTE_WELCOME}
        component={Welcome}
        options={{
          headerTitle: 'Welcome',
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      />
      <Stack.Screen
        name={ROUTE_REGISTER}
        component={Register}
        options={{ headerTitle: 'Register' }}
      />
      <Stack.Screen
        name={ROUTE_LOGIN}
        component={Login}
        options={{ headerTitle: 'Login' }}
      />
      <Stack.Screen
        name={ROUTE_MAIN}
        component={Main}
        options={{ headerTitle: 'Main' }}
      />
    </Stack.Navigator>
  )
}

// Premature abstraction in case something needs it
export const HeaderConfig = {
  headerTitleStyle: {
    ...Font.sizes.navigationHeader,
    ...Font.family.openSansBold,
    color: 'black'
  },
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowColor: 'transparent',
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    }
  },
  headerTintColor: 'black',
  headerHideShadow: true,
  // Non-header options below
  cardStyle: {
    // backgroundColor: 'lightgrey'
  }
}

export default RootNavigator
