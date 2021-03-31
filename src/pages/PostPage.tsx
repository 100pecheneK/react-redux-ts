import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import { postsActionCreators, postsSelectors } from '../redux/posts'
import { useTypedDispatch } from '../redux/store'

type PostPageProps = {
  match: {
    params: {
      id: string
    }
  }
}

export default function PostPage(props: PostPageProps) {
  const dispatch = useTypedDispatch()
  const post = useSelector(postsSelectors.post)
  const isLoading = useSelector(postsSelectors.isLoading)

  useEffect(() => {
    dispatch(postsActionCreators.fetchPost(props.match.params.id))
  }, [])

  if (isLoading) {
    return <span>Loading...</span>
  }
  return (
    <>
      {post ? (
        <Post post={post} detail={true} />
      ) : (
        <p className='text-center'>No post here</p>
      )}
      <Link to='/'>Go home</Link>
    </>
  )
}
