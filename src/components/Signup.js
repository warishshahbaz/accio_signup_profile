// Signup.js
import React, { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    pass: "",
    cpass: "",
    // Initialize form fields
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [toggleError, setToggleError] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    if (!toggleError) {
      setToggleError(true);
    }
  };
  console.log(formData, "formData");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate access token
    const accessToken = generateAccessToken();
    // Store user data and access token in local storage
    localStorage.setItem("user", JSON.stringify({ ...formData, accessToken }));
    // Set success message
    setSuccessMessage("Signup successful. Redirecting to profile...");
    // Redirect to profile page
    setToggleError(false);

    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  const generateAccessToken = () => {
    // Generate random access token (16 bytes)
    return Array.from({ length: 16 }, () =>
      Math.floor(Math.random() * 256).toString(16)
    ).join("");
  };

  return (
    <div className="signup">
      <h2>Signup</h2>

      <form autocomplete="off" method="post" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Full Name"
          name="fname"
        />
        <input
          type="email"
          onChange={handleInputChange}
          autocomplete="off"
          placeholder="Email"
          name="email"
        />
        <input
          type="password"
          onChange={handleInputChange}
          autocomplete="off"
          placeholder="Password"
          name="pass"
        />
        <input
          type="password"
          onChange={handleInputChange}
          placeholder="Confirm Password"
          name="cpass"
        />
        {toggleError &&
        (formData.fname === "" ||
          formData.email === "" ||
          formData.pass === "" ||
          formData.cpass === "") ? (
          <div className="error">Error : All the field are mandatory </div>
        ) : (
          ""
        )}

        {successMessage && <p className="success">{successMessage}</p>}
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
