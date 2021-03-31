import { AppActionTypes, AppInitialStateType } from './@types'
import {
  ADD_ALERT,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_LOADER,
} from './types'

const initialState = {
  isLoading: false,
  alert: [],
}

export const reducer = (
  state: AppInitialStateType = initialState,
  action: AppActionTypes
) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      }
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      }
    case ADD_ALERT:
      return {
        ...state,
        alert: [action.payload, ...state.alert],
      }
    case HIDE_ALERT:
      return {
        ...state,
        alert: state.alert.filter(alert => alert.id !== action.payload),
      }
    default:
      return state
  }
}
