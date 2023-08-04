import React from 'react'
import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className="settingsForm">
          <label> Profile Picture</label>
          <div className="settingsPP">
            <img src="https://media.licdn.com/dms/image/C5103AQGZqFUC9VU-RQ/profile-displayphoto-shrink_200_200/0/1576383078762?e=1696464000&v=beta&t=TShU8vwUlfZEogaPlrJhEb6xQnQIToJEcwYFYp0B3P0" 
                 alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>

          <label>Username</label>
          <input type="text" placeholder='Christopher' />

          <label>Email</label>
          <input type="email" placeholder='christophercastro697@gmail.com' />

          <label>Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
      </div>
  )
}

export default Settings