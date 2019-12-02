import React from "react";
import s from "./Profile.module.css";

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
      <div>
        My post
        <div>New post</div>
        <div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
