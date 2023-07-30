import { Link } from "react-router-dom";
import "./topbar.css";
import React from 'react'

const TopBar = () => {
  const user = true
  return (
    <div className="top">
    <div className="topLeft">
      <i className="topIcon fab fa-facebook-square"></i>
      <i className="topIcon fab fa-instagram-square"></i>
      <i className="topIcon fab fa-pinterest-square"></i>
      <i className="topIcon fab fa-twitter-square"></i>
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
            src="https://media.licdn.com/dms/image/C5103AQGZqFUC9VU-RQ/profile-displayphoto-shrink_200_200/0/1576383078762?e=1695859200&v=beta&t=OceZxhfLFEB7SAiMFDet0dY1nl_5zg9gNZ0DD7_HBTU"
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
