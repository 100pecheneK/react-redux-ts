import axios from 'axios'
import { PostType } from '../redux/posts/@types'
const API_URL = 'https://jsonplaceholder.typicode.com/posts'
export const postsApi = {
  fetchPosts(): Promise<PostType[]> {
    return axios.get(API_URL + '?_limit=5').then(({ data }) => data)
  },
  loadMore(): Promise<PostType[]> {
    return new Promise(r => {
      r([
        {
          id: Date.now().toString(),
          title: new Date().toLocaleTimeString(),
          body: 'Body',
        },
      ])
    })
  },
  fetchPost(id: string): Promise<PostType> {
    return axios.get(API_URL + '/' + id).then(({ data }) => data)
  },
}
