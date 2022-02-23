import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Yangiliklar from "./pages/Yangiliklar";
import Videolar from "./pages/Videolar";
export default class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgba(238, 243, 237, 0.857)" }}>
        <BrowserRouter>
          <Dashboard />
          {/* <Yangiliklar /> */}
          {/* <Videolar /> */}
          {/* <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/yangiliklar">
              <Yangiliklar />
            </Route>
            <Route path="/videolavhalar">
              <Videolar />
            </Route>
          </Switch> */}
        </BrowserRouter>
      </div>
    );
  }
}
