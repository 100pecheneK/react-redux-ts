import { RootState } from '../@types'

export const isLoading = (state: RootState) => state.appReducer.isLoading
export const alerts = (state: RootState) => state.appReducer.alert
