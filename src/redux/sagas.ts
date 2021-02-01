
import { all } from 'redux-saga/effects'

// SAGAS
import AuthSaga from './Auth/saga'

export default function* rootSaga() {
  yield all([
    AuthSaga()
  ])
}