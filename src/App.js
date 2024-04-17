// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" component={Signup} />
          <Route path="/profile" component={Profile} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
