import 'react-native-gesture-handler' //Required for React-Navigation >v5 to be at the top
import React from 'react'
import { Text, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import store from './store'
import RootNavigator from './navigation/RootNavigator'

//This disables any of the Text from scaling according to the OS settings for text.
//This is not a good idea long term and should be addressed!
Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false
}

export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <RootNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  </Provider>
)
