import { useDispatch } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { postsReducer } from './posts'
import { appReducer } from './app'
import { AppDispatch, DispatchFunctionType, InitialStateType } from './@types'
import { forbiddenWords } from './middleware'
import { rootSaga } from './saga'

export const rootReducer = combineReducers({ postsReducer, appReducer })

const saga = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware<DispatchFunctionType, InitialStateType>(
      thunk,
      forbiddenWords(),
      saga
    )
  )
)
saga.run(rootSaga)

export const useTypedDispatch = () => useDispatch<AppDispatch>()
