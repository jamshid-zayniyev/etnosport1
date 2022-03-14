import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import style from "../css/Dashboard.module.css";
import styles from "../css/Gallery.module.css";
import etnosport8 from "../img/etnoimg8.jpg";
import Dashnews from "./Dashnews";
export default class Viloyatlar extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={style.head}>
          <img src={etnosport8}></img>
          <div className={styles.headsarlavhaa}>
            Toshkent shahar mahalla xotin-qizlar sport tadbirlari
          </div>

          <Dashnews />
        </div>

        <Footer />
      </div>
    );
  }
}
