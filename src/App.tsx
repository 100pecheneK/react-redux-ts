import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Alerts from './components/Alerts'
import FetchedPosts from './components/FetchedPosts'
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'

function App() {
  return (
    <>
      <div className='container pt-3'>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/post/:id' component={PostPage}/>
        </Switch>
      </div>
      <Alerts />
    </>
  )
}

export default App
