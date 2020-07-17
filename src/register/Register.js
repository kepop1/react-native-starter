import React, { useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Formik } from 'formik'
import { object } from 'yup'
import * as Yup from 'yup'

import { Button, TextButton, TextInput, Core, Font } from '../lib'

import { ROUTE_LOGIN } from '../navigation/constants'
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
        navigation.navigate(ROUTE_LOGIN, { email: registerResponse.data.email })
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
            onPress={() => navigation.navigate(ROUTE_LOGIN)}
            label="Already have an account? Login!"
          />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: Core.unit
  },
  header: {
    ...Font.sizes.heading,
    ...Font.family.openSansBold,
    textAlign: 'center',
    marginBottom: Core.unit * 2
  },
  error: {
    ...Font.sizes.small,
    ...Font.family.openSansBold,
    color: Core.color.vividBurgundy,
    padding: Core.unit / 2,
    marginHorizontal: Core.unit * 2,
    marginVertical: Core.unit / 2
  }
})
