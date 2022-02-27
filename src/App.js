import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Yangiliklar from "./pages/Yangiliklar";
import Videolar from "./pages/Videolar";
import HujjatlarF from "./pages/HujjatlarF";
import HujjatlarO from "./pages/HujjatlarO";
import Musoboqalar from "./pages/Musoboqalar";
import HujjatlarT from "./pages/HujjatlarT";
import ElektronK from "./pages/Sporthm";
import Boglanish from "./pages/Boglanish";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
export default class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Dashboard />} exact path="/" />

            <Route element={<Yangiliklar />} exact path="/yangiliklar" />

            <Route element={<Videolar />} exact path="/ishlanma" />
            <Route element={<HujjatlarF />} exact path="/farmon" />
            <Route element={<HujjatlarO />} exact path="/oquvchi" />
            <Route element={<HujjatlarT />} exact path="/talim" />
            <Route element={<Musoboqalar />} exact path="/musoboqalar" />
            <Route element={<ElektronK />} exact path="/kutubxona" />
            <Route element={<Boglanish />} exact path="/boglanish" />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
