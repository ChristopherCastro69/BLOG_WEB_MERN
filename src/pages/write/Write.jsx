import React from 'react'
import "./write.css"

const Write = () => {
  
  return (
    <div className='write'>
        <img
        className="writeImg"
        src="https://www.datasciencecentral.com/wp-content/uploads/2023/06/AdobeStock_552748421-scaled.jpeg"
        alt=""
      />
        <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Add your blog..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
        </div>
  )
}

export default Write