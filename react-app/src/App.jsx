import React from "react";
import { useState } from "react";
import API from "./components/API.jsx"
import Login from "./components/Login.jsx"
import Registration from "./components/Registration.jsx"

function App() {
  const [currentScreen, setCurrentScreen] = useState("Registration");

  const handleRegistration = () => {
    setCurrentScreen("Login");
  };

  const handleLogin = (username, password) => {
    if (username && password) {
      setCurrentScreen("API");
    } else {
      alert("Please enter a valid username and password");
    }
  };

  return (
    <div>
      {currentScreen === "Registration" && <Registration onRegistration={handleRegistration} />}
      {currentScreen === "Login" && <Login onLogin={handleLogin} />}
      {currentScreen === "API" && <API />}
    </div>
  );
}

export default App
