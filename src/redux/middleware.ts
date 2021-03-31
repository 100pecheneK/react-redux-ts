import { Middleware, Dispatch, AnyAction, MiddlewareAPI } from 'redux'
import { AppDispatch } from './@types'
import { appActionCreators } from './app'
import { AlertStatus } from './app/@types'
import { CREATE_POST } from './posts/types'

const forbidden = ['kak', 'tak', 'to']

export function forbiddenWords() {
  const forbiddenWordsMiddleware: Middleware = <A extends AppDispatch>(
    api: MiddlewareAPI<A>
  ) => (next: Dispatch) => (action: AnyAction) => {
    if (action.type === CREATE_POST) {
      const found = forbidden.filter(word =>
        action.payload.title.includes(word)
      )
      if (found.length) {
        return api.dispatch(
          appActionCreators.showAlert({
            status: AlertStatus.DANGER,
            message:
              'Don`t use ' + found.join(', ').replace(/(,) (\S*)$/, ' and $2'),
          })
        )
      }
    }
    return next(action)
  }

  return forbiddenWordsMiddleware
}
