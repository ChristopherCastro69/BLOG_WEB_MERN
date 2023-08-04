import React from 'react'
import "./posted.css"
import {Link} from "react-router-dom"

const Post = ({post}) => {
  return (
    
    <div className='posted'>
      {post.photo && (
          <img src={post.photo} alt="" className='postImg'/>

      )}
    
      <div className="postInfo">
        <div className="postCategories">   
            {post.categories.map((c) =>(
              <span className="postCategory">{c.name}</span>
            ))}
        </div>

        <Link to={`/post/${post._id}`} className='link'>
              <span className="postTitle">{post.title}</span>
           </Link>
        <hr />

        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
      </div>
  )
}

export default Post