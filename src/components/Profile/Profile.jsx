import React from "react";
// eslint-disable-next-line no-unused-vars
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://trikky.ru/wp-content/blogs.dir/1/files/2013/08/beautyisland_3.jpg"
          alt=""
        />
      </div>
      <div>description</div>
      <MyPosts hey="yo" />
    </div>
  );
};

export default Profile;
