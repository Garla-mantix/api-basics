import React from "react";
import { useState } from "react";
import API from "./components/API.jsx"
import Login from "./components/Login.jsx"
import Registration from "./components/Registration.jsx"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter a valid username and password");
    }
  };
  

  return (
    <div>
      {isLoggedIn ? (
        <API />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App
