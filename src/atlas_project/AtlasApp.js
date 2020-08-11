import React from "react";
import Header from "./Header";
import "./atlas_css/style.css";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";

function AtlasApp(props) {
  return (
    <div>
      <Router>
        <Header />
        <Nav />
        <Main />
      </Router>
    </div>
  );
}

export default AtlasApp;
