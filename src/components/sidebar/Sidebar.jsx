import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://scontent.fceb1-3.fna.fbcdn.net/v/t1.6435-9/133905863_1923573574465163_2118801843135465204_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFy3CYNM3-0j756G9II-P4dMwDV5fsUgqczANXl-xSCp5Hn8CqfTS9XO2eOGAStM51-1FWIcj8ijCEbWPCd6bOB&_nc_ohc=Rq_pTSGMgZcAX9RPDAm&_nc_ht=scontent.fceb1-3.fna&oh=00_AfCUWsCQEvwwaMbNKe7IfZt3EHkFKaHpnjOWvNqDbrDTyQ&oe=64EB4247" 
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