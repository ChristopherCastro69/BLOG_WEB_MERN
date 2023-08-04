import Header from '../../components/header/Header'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts" + search);
        setPosts(res.data)
      } catch (error) {
        if (error.response) {
          // The request was made, but the server responded with a non-2xx status code
          console.error("Error fetching posts:", error.response.status, error.response.data);
        } else if (error.request) {
          // The request was made, but no response was received
          console.error("Error fetching posts: No response received");
        } else {
          // Something else happened while setting up the request
          console.error("Error fetching posts:", error.message);
        }
      }
    };

    fetchPosts();
  
  }, [search]);

  return (
    <>
      <Header />
      <div className='home'>
        {/* Here you can use 'posts' state to render the fetched data */}
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
