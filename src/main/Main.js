import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

export const Main = () => {
  const user = useSelector((state) => state.login.user)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is the main page! Do what you will with this page going forwards!
      </Text>
      <Text style={styles.text}>
        Who know's maybe this'll be a fancy menu or dashboard someday! {'\n'}
      </Text>
      <Text>User Object: {JSON.stringify(user)}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    margin: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { height: 3 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
    elevation: 5
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center'
  }
})
