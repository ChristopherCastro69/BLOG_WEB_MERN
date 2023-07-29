import React from 'react'
import "./single.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Singlepost from '../../components/singlepost/Singlepost'

const Single = () => {
  return (
    <div className='single'>
       {/* Post */}
       <Singlepost/>
       <Sidebar/>
        </div>
  )
}

export default Single