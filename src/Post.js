import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";

function Post() {
  return (
    <>
      <div className="post">

        <div className="post__header">
          <Avatar
            className="post__avatar"
            alt="Ali"
            src="/static/images/avatar/1.jpg"
          />
          <h3>Username</h3>
          {/* header -> avatar + username */}
        </div>



        <img
          className="post__image"
          src="https://parklifedc.com/wp-content/uploads/2022/10/49086603938_17de59bc78_z.jpg"
        ></img>




        <h4 className="post__text">
          <strong>ThatNiggaAli: </strong> Lil Durk showed out!!!
        </h4>



      </div>
    </>
  );
}

export default Post;
