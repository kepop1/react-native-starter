const BASE_URL = 'http://localhost:3000'

export const LOGIN_URL = `${BASE_URL}/login`
export const REGISTER_URL = `${BASE_URL}/register`

export const getRequestParams = authToken => {
  const parameters = {}

  parameters.Accept = 'application/json'
  parameters['Content-Type'] = 'application/json'

  if (authToken) parameters.Authorization = `Bearer ${authToken}`
}
