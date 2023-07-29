import React from 'react'
import "./singlepost.css"

const Singlepost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://www.datasciencecentral.com/wp-content/uploads/2023/06/AdobeStock_552748421-scaled.jpeg" 
            alt="" className="singlePostImg" 
            />
            <h1 className="singlePostTitle">
                Future Tech Jobs
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Christopher</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quia impedit sit, totam quas culpa distinctio consequatur 
                officia harum quis architecto voluptatibus laboriosam suscipit 
                dignissimos exercitationem corporis in itaque corrupti incidunt.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quia impedit sit, totam quas culpa distinctio consequatur 
                officia harum quis architecto voluptatibus laboriosam suscipit 
                dignissimos exercitationem corporis in itaque corrupti incidunt.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quia impedit sit, totam quas culpa distinctio consequatur 
                officia harum quis architecto voluptatibus laboriosam suscipit 
                dignissimos exercitationem corporis in itaque corrupti incidunt.
            </p>
        </div>
        Singlepost

        </div>
  )
}

export default Singlepost