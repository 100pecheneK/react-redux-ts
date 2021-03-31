import { delay, put, takeEvery } from 'redux-saga/effects'
import { appActionCreators } from '.'
import { SHOW_ALERT } from './types'

export function* appSaga() {
  yield takeEvery(SHOW_ALERT, showAlert)
}


function* showAlert({
  payload: { status, message, time = 2000 },
}: ReturnType<typeof appActionCreators.showAlert>) {
  const alert = {
    status,
    message,
    id: Date.now().toString(),
  }
  yield put(appActionCreators.addAlert(alert))
  yield delay(time)
  yield put(appActionCreators.hideAlert(alert.id))
}
