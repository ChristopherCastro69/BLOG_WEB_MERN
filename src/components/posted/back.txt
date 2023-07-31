import React from 'react'
import "./posted.css"

const Post = ({img}) => {
  return (
    <div className='posted'>
      <img src={img} alt="" className='postImg'/>

      <div className="postInfo">
        <div className="postCategories">
          <span className="postCat">Job Analysis</span>
         
        </div>
        <span className="postTitle">
          Future Jobs
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
      </div>
  )
}

export default Post