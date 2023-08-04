import { Link } from "react-router-dom";
import "./topbar.css";
import React from 'react'

const TopBar = () => {
  const user = false
  return (
    <div className="top">
    <div className="topLeft">
      <i className="topIcon fab fa-github"></i>
      <i className="topIcon fab fa-facebook"></i>
      <i className="topIcon fab fa-linkedin"></i>

    </div>
    <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">
          <Link className="link" to="/">
            HOME
          </Link>
        </li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">
          <Link className="link" to="/write">
            WRITE
          </Link>
        </li>
        {user && <li className="topListItem">LOGOUT</li>}
      </ul>
    </div>
    <div className="topRight">
      {user ? (
        <Link className="link" to="/settings">
          <img
            className="topImg"
            src="https://media.licdn.com/dms/image/C5103AQGZqFUC9VU-RQ/profile-displayphoto-shrink_200_200/0/1576383078762?e=1696464000&v=beta&t=TShU8vwUlfZEogaPlrJhEb6xQnQIToJEcwYFYp0B3P0"
            alt=""
          />
        </Link>
      ) : (
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/register">
              REGISTER
            </Link>
          </li>
        </ul>
      )}
      <i className="topSearchIcon fas fa-search"></i>
    </div>
  </div>
  )
}

export default TopBar
