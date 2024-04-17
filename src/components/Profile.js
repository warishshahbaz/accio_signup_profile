// Profile.js
import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  // useEffect to check for access token and redirect accordingly

  const handleLogout = () => {
    // Handle logout
    // Clear user state and remove access token
    // Redirect to signup page
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      {user && (
        <div className="user-details">
          {/* Display user details */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
