import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://trikky.ru/wp-content/blogs.dir/1/files/2013/08/beautyisland_3.jpg"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>description</div>
    </div>
  );
};

export default ProfileInfo;
