import React from "react";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import UserDashboard from "./components/home/User-Dashboard";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <UserDashboard />
      </div>
    </Provider>
  );
}

export default App;
