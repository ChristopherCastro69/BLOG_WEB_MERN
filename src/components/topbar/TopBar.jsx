import { Link } from "react-router-dom";
import "./topbar.css";
import React, { useContext } from 'react'
import { Context } from "../../context/Context";

const TopBar = () => {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"
  
  const handleLogout = () =>{
    dispatch({type: "LOGOUT"});
  }
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
        {user && <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>}
      </ul>
    </div>
    <div className="topRight">

      {user ? (
        <Link className="link" to="/settings">
          <img
            className="topImg"
            src={PF + user.profilePic}
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
