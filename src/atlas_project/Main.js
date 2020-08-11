import React from "react";
import { Switch, Route } from "react-router-dom";
import Country from "./Country";

function Main(props) {
  return (
    <div className="container-fluid p-4  mt-2">
      <div className="container border rounded" style={{ minHeight: "380px" }}>
        <Switch>
          <Route exact path="/" component={Country} />
          <Route exact path="/name/:name" component={Country} />
          <Route exact path="/alpha/:code" component={Country} />
        </Switch>
      </div>
    </div>
  );
}

export default Main;
