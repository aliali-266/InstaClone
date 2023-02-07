import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import { db } from "./firebase"

function App() {
  const [posts, setPosts] = useState([
    {
      username: "ThatNiggaAli",
      caption: "Wow, it works",
      imageUrl:
        "https://parklifedc.com/wp-content/uploads/2022/10/49086603938_17de59bc78_z.jpg",
    },
    {
      username: "ThatNiggaAli",
      caption: "Wow, it works",
      imageUrl:
        "https://parklifedc.com/wp-content/uploads/2022/10/49086603938_17de59bc78_z.jpg",
    },
  ]);

  // useEffect -> runs a piece of code based on a specific conditions

  useEffect(()=> {
    //Code goes here
    db.collection('posts').snapShot(snapshot)

  }, [])

  return (
    <>
      <div className="app">
        <div className="app__header">
          <img
            className="app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
        </div>

        {posts.map((post) => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </>
  );
}

export default App;
