import { createStackNavigator } from '@react-navigation/stack'
import App from './App'
import { Welcome } from './welcome/Welcome'

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
    </Stack.Navigator>
  )
}

export default RootNavigator
