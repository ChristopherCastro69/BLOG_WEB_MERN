
import Header from '../../components/header/Header'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'

import React from 'react'

const Home = () => {
  return (
    <>
    <Header/>
  <div className='home'>
    <Posts/>
    <Sidebar/>

  </div>
  </> 
  )
}

export default Home
