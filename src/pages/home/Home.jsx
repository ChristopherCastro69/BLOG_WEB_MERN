import Header from '../../components/header/Header'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/posts');
        const data = response.data; // The response data sent by the server
        console.log(data); // Display the response data in the console or do something else with it
        // setPosts(data); // Update the state with the fetched data
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
  }, []);

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
