import { RootState } from '../@types'

export const postState = (state: RootState) => state.postsReducer
export const posts = (state: RootState) => postState(state).posts
export const fetchedPosts = (state: RootState) => postState(state).fetchedPosts
export const isLoading = (state: RootState) => postState(state).isLoading
export const post = (state: RootState) => postState(state).post
