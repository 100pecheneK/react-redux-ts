import React from 'react'
import { PostType } from '../redux/posts/@types'
import { Link } from 'react-router-dom'
type PostProps = {
  post: PostType
  detail?: boolean
}
// TODO: Сделать отдельную страницу для этого с использованием мемоизированного селектора
export default function Post({ post, detail = false }: PostProps) {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{post.title}</h5>
        {detail && <p className='card-body'>{post.body}</p>}
        {!detail && <Link to={`/post/${post.id}`}>View</Link>}
      </div>
    </div>
  )
}
