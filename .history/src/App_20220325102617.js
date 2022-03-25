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
import "./comment.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Gallery from "./pages/Gallery";
import Icons from "./pages/Icons";
import { Xarita } from "./pages/Xarita";
import Sportchilar from "./pages/Sportchilar";
import Pfq from "./pages/Pfq";
import Vmq from "./pages/Vmq";
import Svmh from "./pages/Svmh";
import Sonqh from "./pages/Sonqh";
import Vixsh from "./pages/vixsh";
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

            <Route element={<Videolar />} exact path="/ishlanma" />
            <Route element={<HujjatlarF />} exact path="/farmon" />
            <Route element={<HujjatlarO />} exact path="/oquvchi" />
            <Route element={<HujjatlarT />} exact path="/talim" />
            <Route element={<Musoboqalar />} exact path="/musoboqalar" />
            <Route element={<ElektronK />} exact path="/kutubxona" />
            <Route element={<Boglanish />} exact path="/boglanish" />
            <Route element={<Gallery />} exact path="/gallery" />
            <Route element={<Xarita />} exact path="/mahallalar" />
            <Route element={<Pfq />} exact path="/prezidentfq" />
            <Route element={<Vmq />} exact path="/vazirlarmq" />
            <Route element={<Svmh />} exact path="/sportvmh" />
            <Route element={<Sonqh />} exact path="/sportgaonqh" />
            <Route element={<Vixsh />} exact path="/vazirlikixsh" />
            <Route element={<Viloyatlar />} exact path="/viloyatlar" />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
