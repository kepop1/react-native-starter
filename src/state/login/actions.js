import axios from 'axios'

import { LOGIN_URL, getRequestParams } from '../../api/config'
import { LOGIN_SUCCESS } from './constants'

export const loginAttempt = async (email, password) => {
  const parameters = getRequestParams()

  try {
    const response = await axios.post(
      LOGIN_URL,
      {
        email,
        password
      },
      { headers: parameters }
    )
    return response
  } catch (error) {
    return error.response
  }
}

export const loginSuccess = (authToken) => ({
  type: LOGIN_SUCCESS,
  authToken
})
