import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { object } from 'yup'
import * as Yup from 'yup'

import { Button, TextButton, TextInput } from '../lib'

const validationSchema = object().shape({
  email: Yup.string().required('Please enter an email address'),
  password: Yup.string().required('Please enter a password')
})

const initialValues = {
  email: '',
  password: ''
}

export const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false)

  const onSubmit = async ({ email, password }) => {
    try {
      // setLoading(true)
      // const user = await dispatch(submitLogin(email, password))
      // Dispatch some sort of login thunk attempt
    } catch (error) {
      //something to catch an error
    } finally {
      //something
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit
      }) => (
        <View style={styles.container}>
          <Text style={styles.header}>Login</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onBlur={handleBlur('email')}
            onChangeText={handleChange('email')}
            autoCapitalize="none"
            keyboardType="email-address"
            value={values.email}
            autoFocus
          />

          <TextInput
            style={styles.textInput}
            styleOverride={{ marginTop: 20 }}
            placeholder="Password"
            onBlur={handleBlur('password')}
            onChangeText={handleChange('password')}
            autoCapitalize="none"
            value={values.password}
          />

          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <Button onPress={() => handleSubmit} label="Login" />

          <TextButton
            onPress={() => navigation.navigate('Register')}
            label="Register"
          />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  header: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 30
  },
  error: {
    fontSize: 14,
    fontWeight: '600',
    color: 'red',
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginHorizontal: 35,
    marginVertical: 5
  }
})
