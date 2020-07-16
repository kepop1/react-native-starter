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

export const Login = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)
  const dispatch = useDispatch()

  const registeredEmail = route?.params?.email

  const initialValues = {
    email: registeredEmail || '',
    password: ''
  }

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true)
      const loginResponse = await loginAttempt(email, password)

      if (loginResponse.status === 404) {
        throw loginResponse
      }

      if (loginResponse.status === 200) {
        dispatch(loginSuccess(loginResponse.data.authToken))
        navigation.navigate('Main')
      }
    } catch (error) {
      if (error?.data?.message) setApiError(`${error.data.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
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
            placeholder="Email"
            onBlur={handleBlur('email')}
            onChangeText={handleChange('email')}
            autoCapitalize="none"
            keyboardType="email-address"
            value={values.email}
            autoFocus
          />

          <TextInput
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

          {apiError && <Text style={styles.error}>{apiError}</Text>}

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
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
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
