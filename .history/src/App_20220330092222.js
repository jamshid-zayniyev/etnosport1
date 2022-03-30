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


[{"url":"http://api.ethnosport.abrorjonaxmadov.uz/api/sports/2/","id":2,"name":"Kurash","slug":"kurash","date_created":"26-03-2022 13-57-08","date_updated":"26-03-2022 13-57-08","sport_images":[{"url":"http://api.ethnosport.abrorjonaxmadov.uz/api/sport-images/1/","image":"http://api.ethnosport.abrorjonaxmadov.uz/media/images/kurash.PNG"}],"text":null},{"url":"http://api.ethnosport.abrorjonaxmadov.uz/api/sports/4/","id":4,"name":"Sambo","slug":"sambo","date_created":"26-03-2022 14-25-15","date_updated":"26-03-2022 14-25-15","sport_images":[{"url":"http://api.ethnosport.abrorjonaxmadov.uz/api/sport-images/3/","image":"http://api.ethnosport.abrorjonaxmadov.uz/media/images/sambo.jpg"}],"text":null},{"url":"http://api.ethnosport.abrorjonaxmadov.uz/api/sports/3/","id":3,"name":"Karate","slug":"karate","date_created":"26-03-2022 14-04-52","date_updated":"26-03-2022 14-25-32","sport_images":[{"url":"http://api.ethnosport.abrorjonaxmadov.uz/api/sport-images/2/","image":"http://api.ethnosport.abrorjonaxmadov.uz/media/images/karate.png"}],"text":null},{"url":"http://api.ethnosport.abrorjonaxmadov.uz/api/sports/5/","id":5,"name":"Shaxmat","slug":"shaxmat","date_created":"26-03-2022 14-29-13","date_updated":"26-03-2022 14-29-13","sport_images":[{"url":"http://api.ethnosport.abrorjonaxmadov.uz/api/sport-images/4/","image":"http://api.ethnosport.abrorjonaxmadov.uz/media/images/chess.jpg"}],"text":null},{"url":"http://api.ethnosport.abrorjonaxmadov.uz/api/sports/6/","id":6,"name":"Football","slug":"football","date_created":"29-03-2022 14-20-29","date_updated":"29-03-2022 15-31-41","sport_images":[],"text":null}]