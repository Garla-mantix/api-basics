import React from "react";
import { useState } from "react";
import API from "./components/API.jsx"
import Login from "./components/Login.jsx"
import Registration from "./components/Registration.jsx"

function App() {
  const [currentScreen, setCurrentScreen] = useState("Registration");
  const [error, setError] = useState("");

  const handleRegistration = () => {
    setCurrentScreen("Login");
  };

  const handleLogin = (username, password) => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      setCurrentScreen("API");
    } else {
      setError("Invalid username or password");
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
