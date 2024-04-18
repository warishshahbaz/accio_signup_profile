// Profile.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const users = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  // useEffect to check for access token and redirect accordingly
  console.log(users);
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    // Handle logout
    // Clear user state and remove access token
    // Redirect to signup page
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      {users && (
        <div className="user-details">
          {/* Display user details */}
          <div className="box">
            <span>Full Name</span> : <p>{users.fname}</p>
          </div>
          <div className="box">
            <span>Email</span> : <p>{users.email}</p>
          </div>
          <div className="box">
            <span>Password</span> : <p>{users.pass}</p>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
