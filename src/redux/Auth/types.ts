// TYPES
export const actionTypes = {
	LOGOUT: 'LOGOUT',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION'
}
// TYPES END

// INTERFACES
export interface AuthStates {
	user: object,
	error: any,
	loggedIn: boolean,
	fetching: boolean,
}

interface LoginAction {
	type: typeof actionTypes.LOGIN_REQUEST,
	payload: any
}

interface LogoutAction { 
	type: typeof actionTypes.LOGOUT,
}

interface CheckAuthorizationAction { 
	type: typeof actionTypes.CHECK_AUTHORIZATION,
}
// INTERFACES END

export type AuthTypes = LoginAction | LogoutAction | CheckAuthorizationAction