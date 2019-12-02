import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <a href="#s">Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="#s">messages</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="#s">News</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="#s">Music</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="#s">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
