import actions from './actions'
import { actionTypes, AuthStates, AuthTypes } from './types'

const initialState:AuthStates = {
	user: {},
	error: null,
	loggedIn: false,
  fetching: false,
}

export default (state = initialState, action:AuthTypes): AuthStates => {
	switch (action.type) {
		case actionTypes.LOGIN_REQUEST:
			return { ...state, fetching: true,}
		case actionTypes.LOGIN_SUCCESS:
			return { ...state, fetching: false }
		case actionTypes.LOGOUT:
			return initialState
		default:
			return state
  }
}
