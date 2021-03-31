import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AppActionTypes, AppInitialStateType } from '../app/@types'
import { PostsActionTypes, PostsInitialStateType } from '../posts/@types'
import { rootReducer, store } from '../store'

export type ActionTypes = InitActionTypes | PostsActionTypes | AppActionTypes
export type InitialStateType = PostsInitialStateType | AppInitialStateType

export type InitActionTypes = {
  type: '__INIT__'
}
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  InitialStateType,
  unknown,
  ActionTypes
>

export type DispatchFunctionType = ThunkDispatch<
  InitialStateType,
  undefined,
  ActionTypes
>

export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never

export type getActionTypes<T extends { [key: string]: any }> = ReturnType<
  InferValueTypes<T>
>
