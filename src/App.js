import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Yangiliklar from "./pages/Yangiliklar";
import Videolar from "./pages/Videolar";
import { render } from "react-dom";
import Musoboqalar from "./pages/Musoboqalar";
import HujjatlarT from "./pages/HujjatlarT";
import ElektronK from "./pages/Sporthm";
import Boglanish from "./pages/Boglanish";
import "./comment.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Gallery from "./pages/Gallery";
import Loyihahaqida from "./pages/Loyihahaqida";
import Icons from "./pages/Icons";
import { Xarita } from "./pages/Xarita";
import Sportchilar from "./pages/Sportchilar";
import Viloyatlar from "./pages/Viloyatlar";
export default class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Icons />
        <BrowserRouter>
          <Routes>
            <Route element={<Dashboard />} exact path="/" />

            <Route element={<Yangiliklar />} exact path="/yangiliklar" />
            <Route element={<Sportchilar />} exact path="/sportchilar" />

            <Route element={<Videolar />} exact path="/videolar" />

            <Route element={<HujjatlarT />} path="/qonunlar/:nameT/:id" />
            <Route element={<Musoboqalar />} exact path="/musoboqalar" />
            <Route element={<ElektronK />} exact path="/kutubxona" />
            <Route element={<Boglanish />} exact path="/boglanish" />
            <Route element={<Gallery />} exact path="/gallery" />
            <Route element={<Xarita />} exact path="/mahallalar" />

            <Route element={<Viloyatlar />} exact path="/tadbirlar/:id/:nameT" />
            <Route element={<Loyihahaqida />} exact path="/loyihahaqida" />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}


