
import { actionTypes, AuthTypes } from './types'

const actions = {
  login: (payload: any): AuthTypes => ({ type: actionTypes.LOGIN_REQUEST, payload }),
  logout: (): AuthTypes => ({ type: actionTypes.LOGOUT }),
  checkAuthorization: (): AuthTypes => ({ type: actionTypes.CHECK_AUTHORIZATION }),
}

export default actions