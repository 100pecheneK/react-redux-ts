import { AlertType } from './@types'
import {
  ADD_ALERT,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
} from './types'

export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })
export const addAlert = (alert: AlertType) => ({
  type: ADD_ALERT,
  payload: alert,
})
export const showAlert = ({
  message,
  status,
  time,
}: Omit<AlertType, 'id'> & { time?: number }) => ({
  type: SHOW_ALERT,
  payload: { message, status, time },
})
export const hideAlert = (id: string) => ({ type: HIDE_ALERT, payload: id })
