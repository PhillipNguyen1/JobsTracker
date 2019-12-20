import React from "react";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import UserDashboard from "./components/home/User-Dashboard";
import Landing from "./components/Landing";
import RegisterPage from "./components/authenticating/register";
import LoginPage from "./components/authenticating/login";

import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/user-dashboard">
              <UserDashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
