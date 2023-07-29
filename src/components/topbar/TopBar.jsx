import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-github"></i>
      <i className="topIcon fa-brands fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">ADD</li>
            <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
        className="topImg" 
        src="https://media.licdn.com/dms/image/C5103AQGZqFUC9VU-RQ/profile-displayphoto-shrink_200_200/0/1576383078762?e=1695859200&v=beta&t=OceZxhfLFEB7SAiMFDet0dY1nl_5zg9gNZ0DD7_HBTU" 
        alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}
