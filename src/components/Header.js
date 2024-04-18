import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_wrap">
      <p>Header</p>
      <div className="signup_box">
        <Link to={"/"}>Signup</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
}

export default Header;
