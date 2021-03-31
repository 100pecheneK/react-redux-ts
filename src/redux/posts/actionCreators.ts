import { PostType } from './@types'
import {
  CREATE_POST,
  SET_POSTS,
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_LOADER,
  LOAD_MORE_POSTS,
  ADD_POSTS,
  FETCH_POST,
  SET_POST,
  POST_LOAD_FAIL,
} from './types'

export const createPost = (post: PostType) => ({
  type: CREATE_POST,
  payload: { ...post },
})

export const setPosts = (posts: PostType[]) => ({
  type: SET_POSTS,
  payload: posts,
})
export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })
export const requestPosts = () => ({ type: REQUEST_POSTS })
export const loadMorePosts = () => ({ type: LOAD_MORE_POSTS })
export const addPosts = (posts: PostType[]) => ({
  type: ADD_POSTS,
  payload: posts,
})

export const fetchPost = (id: string) => ({ type: FETCH_POST, payload: id })
export const postLoadFail = () => ({ type: POST_LOAD_FAIL })
export const setPost = (post: PostType) => ({ type: SET_POST, payload: post })
