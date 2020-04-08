import React, { useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Formik } from 'formik'
import { object } from 'yup'
import * as Yup from 'yup'

import { Button, TextButton, TextInput } from '../lib'

import { registerAttempt } from '../state/register/actions'

const validationSchema = object().shape({
  email: Yup.string().required('Please enter an email address'),
  firstName: Yup.string().required('Please enter your first name'),
  password: Yup.string().required('Please enter a password')
})

const initialValues = {
  email: '',
  firstName: '',
  password: ''
}

export const Register = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)

  const onSubmit = async ({ firstName, email, password }) => {
    try {
      setLoading(true)
      const registerResponse = await registerAttempt(firstName, email, password)

      if (registerResponse.status === 404) {
        throw registerResponse
      }

      if (registerResponse.status === 201) {
        navigation.navigate('Login', { email: registerResponse.data.email })
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
          <Text style={styles.header}>Register</Text>

          <TextInput
            placeholder="First Name"
            onBlur={handleBlur('firstName')}
            onChangeText={handleChange('firstName')}
            value={values.firstName}
            autoFocus
          />

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

          {touched.firstName && errors.firstName && (
            <Text style={styles.error}>{errors.firstName}</Text>
          )}

          {apiError && <Text style={styles.error}>{apiError}</Text>}

          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button onPress={handleSubmit} label="Register" />
          )}

          <TextButton
            onPress={() => navigation.navigate('Login')}
            label="Already have an account? Login!"
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
