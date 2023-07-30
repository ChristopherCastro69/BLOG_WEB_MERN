import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="/images/pp.jpg" 
                 alt="" 
                 className="sidebarImg" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nam harum adipisci labore molestias quo tempore quod nobis ex qui nihil. 

            </p>
        </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Job Analysis</li>
                    <li className="sidebarListItem">Projects</li>
                    <li className="sidebarListItem">Tech News</li>
                    <li className="sidebarListItem">Tech Trends</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-github"></i>
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                </div>
            </div>
        </div>
  )
}

export default Sidebar