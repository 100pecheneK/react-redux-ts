import { getActionTypes } from '../../@types'
import * as postsActionCreators from '../actionCreators'

export type PostType = {
  id?: string
  title: string
  body: string
}
export type PostsInitialStateType = {
  posts: PostType[]
  fetchedPosts: PostType[]
  isLoading: boolean
  post?: PostType
}

export type PostsActionTypes = getActionTypes<typeof postsActionCreators>
// export type PostsActionTypes = ReturnType<
//   InferValueTypes<typeof postsActionCreators>
// >
