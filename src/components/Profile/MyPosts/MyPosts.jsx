import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are yoy" likesCount="0" />
        <Post message="It's my first post" likesCount="32" />
      </div>
    </div>
  );
};

export default MyPosts;
