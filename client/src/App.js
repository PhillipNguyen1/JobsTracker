import React from "react";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import UserDashboard from "./components/home/User-Dashboard";
import Register from './components/authenticating/login'


function App() {
  return (
    <div>
      {/* <Navbar />
      <UserDashboard /> */}
      <Register/>
    </div>
  );
}

export default App;
