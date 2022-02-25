import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Yangiliklar from "./pages/Yangiliklar";
import Videolar from "./pages/Videolar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
export default class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgba(238, 243, 237, 0.857)" }}>
        <BrowserRouter>
         
          <Routes>
            <Route element={<Dashboard />} exact path="/"/>
              
            <Route element={<Yangiliklar />} exact path="/yangiliklar"/>
              
            <Route element={<Videolar />} exact path="/videolavhalar"/>
              
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
