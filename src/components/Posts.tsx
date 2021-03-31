import React from 'react'
import { useSelector } from 'react-redux'
import { postsSelectors } from '../redux/posts'
import Post from './Post'

export default function Posts() {
  const posts = useSelector(postsSelectors.posts)

  if (!posts.length) {
    return <p className='text-center'>No posts here</p>
  }

  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}
