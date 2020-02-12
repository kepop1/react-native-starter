const TEST_ACTION = 'test/Action'

export const firstAction = () => ({ type: TEST_ACTION, test: 'Ello there' })

const INITIAL_STATE = { test: 'Hello' }

export const firstReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, test: action.test }
    default:
      return state
  }
}
