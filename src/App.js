import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Yangiliklar from "./pages/Yangiliklar";
import Videolar from "./pages/Videolar";
export default class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgba(238, 243, 237, 0.857)" }}>
        <BrowserRouter>
         
          <Routes>
            <Route to={<Dashboard />} exact path="/"/>
              
            <Route to={<Yangiliklar />} path="/yangiliklar"/>
              
            <Route to={<Videolar />} path="/videolavhalar"/>
              
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
