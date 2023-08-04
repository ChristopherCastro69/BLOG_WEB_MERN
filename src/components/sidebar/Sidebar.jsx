import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import axios from "axios"
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        const getCategories = async ()=>{
            const res = await axios.get("/categories")
            setCategories(res.data);
        };
        getCategories();
    }, []);


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
                    {categories.map((c) => (
                        <Link key={c._id} to={`/?cat=${c.name}`} className='link'>
                             <li key={c._id} className="sidebarListItem">{c.name}</li>
                        </Link>
                     
                    ))}
                    {/* <li className="sidebarListItem">Job Analysis</li>
                    <li className="sidebarListItem">Projects</li>
                    <li className="sidebarListItem">Tech News</li>
                    <li className="sidebarListItem">Tech Trends</li> */}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-github"></i>
                <i className="sidebarIcon fab fa-facebook"></i>
                <i className="sidebarIcon fab fa-linkedin"></i>
                </div>
            </div>
        </div>
  )
}

export default Sidebar