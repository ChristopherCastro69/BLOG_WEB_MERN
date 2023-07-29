import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSmall">Welcome to my</span>
        <span className="headerTitleLarge">Blog</span>
      </div>

      <img src="https://img.freepik.com/free-photo/old-camera-notebook-laptop-with-blue-pencil-cup-cappuccino-white-background_23-2147979092.jpg?w=2000" 
           alt="" 
           className="headerImg" />
    </div>
  )
}
