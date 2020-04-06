import { LOGIN_SUCCESS } from './constants'

const INITIAL_STATE = { user: { authToken: null } }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: { authToken: action.authToken } }
    default:
      return state
  }
}
