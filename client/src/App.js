import React from "react";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import UserDashboard from "./components/home/User-Dashboard";

function App() {
  return (
    <div>
      <Navbar />
      <UserDashboard />
    </div>
  );
}

export default App;
