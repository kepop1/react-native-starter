import React, { useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { object } from 'yup'
import * as Yup from 'yup'

import { Button, TextButton, TextInput } from '../lib'

import { loginAttempt, loginSuccess } from '../state/login/actions'

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
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true)
      const loginResponse = await loginAttempt(email, password)

      if (loginResponse.status === 404) throw loginResponse

      if (loginResponse.status === 200) {
        dispatch(loginSuccess(response.data.authToken))
        navigation.navigate('Main')
      }
    } catch (error) {
      setError(`${error.data.message}`)
    } finally {
      setLoading(false)
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

          {error && <Text style={styles.error}>{error}</Text>}

          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button onPress={handleSubmit} label="Login" />
          )}

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
