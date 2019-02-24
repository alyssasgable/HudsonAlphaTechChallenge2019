import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Routes from "./Routes";
import Home from "./containers/Home.js"
import Login from "./containers/Login";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="topnav">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="">User Info</a>
          <a href="">Settings</a>
          <input type="text" placeholder="Search for a user..."/>
        </div>
      </div>
    );
  }
}

export default App;
