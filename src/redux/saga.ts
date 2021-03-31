import { all } from 'redux-saga/effects'
import { appSaga } from './app/sagas'
import { postsSaga } from './posts/sagas'

export function* rootSaga() {
  yield all([appSaga(), postsSaga()])
}
