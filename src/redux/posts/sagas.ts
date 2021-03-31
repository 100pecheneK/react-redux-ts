import { call, put, takeLatest } from 'redux-saga/effects'
import { postsActionCreators } from '.'
import { postsApi } from '../../services/posts'
import { appActionCreators } from '../app'
import { AlertStatus } from '../app/@types'
import { PostType } from './@types'
import { FETCH_POST, LOAD_MORE_POSTS, REQUEST_POSTS } from './types'

export function* postsSaga() {
  yield takeLatest(REQUEST_POSTS, fetchPostsWorker)
  yield takeLatest(LOAD_MORE_POSTS, loadMorePosts)
  yield takeLatest(FETCH_POST, fetchPost)
}

function* fetchPostsWorker() {
  try {
    yield put(postsActionCreators.showLoader())
    const payload: PostType[] = yield call(postsApi.fetchPosts)
    yield put(postsActionCreators.setPosts(payload))
  } catch (error) {
    yield put<any>(
      appActionCreators.showAlert({
        status: AlertStatus.WARNING,
        message: 'Something went wrong: ' + error.message,
      })
    )
  } finally {
    yield put(postsActionCreators.hideLoader())
  }
}

function* loadMorePosts() {
  yield put(postsActionCreators.showLoader())
  const posts = yield call(postsApi.loadMore)
  yield put(postsActionCreators.addPosts(posts))
  yield put(postsActionCreators.hideLoader())
}

function* fetchPost({
  payload,
}: ReturnType<typeof postsActionCreators.fetchPost>) {
  try {
    yield put(postsActionCreators.showLoader())
    const post = yield call(postsApi.fetchPost, payload)
    yield put(postsActionCreators.setPost(post))
  } catch (error) {
    yield put(postsActionCreators.postLoadFail())
    yield put(
      appActionCreators.showAlert({
        status: AlertStatus.WARNING,
        message: 'Something went wrong when loading post' + error.message,
        time: 5000,
      })
    )
  } finally {
    yield put(postsActionCreators.hideLoader())
  }
}
