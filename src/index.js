import 'react-native-gesture-handler' //Required for React-Navigation >v5 to be at the top
import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import store from './store'
import RootNavigator from './navigation/RootNavigator'

export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </Provider>
)
