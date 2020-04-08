import axios from 'axios'

import { REGISTER_URL, getRequestParams } from '../../api/config'

export const registerAttempt = async (firstName, email, password) => {
  const parameters = getRequestParams()

  try {
    const response = await axios.post(
      REGISTER_URL,
      {
        firstName,
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
