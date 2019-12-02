import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://million-wallpapers.ru/wallpapers/1/41/364103651406617/tropicheskij-ostrov-pejzazh.jpg"
          alt=""
        />
      </div>
      <div>description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
