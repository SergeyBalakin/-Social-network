import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"
        alt=""
      />
      post
      <div>
        <span>
          <a href="s#">like</a>
        </span>
        <span> </span>
        <span>
          <a href="s#">dislike</a>
        </span>
      </div>
    </div>
  );
};

export default Post;
