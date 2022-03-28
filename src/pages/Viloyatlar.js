import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import style from "../css/Dashboard.module.css";
import styles from "../css/Gallery.module.css";
import etnosport8 from "../img/etnoimg8.jpg";
import school from "../img/gerb.png";
import Dashnews from "./Dashnews";
export default class Viloyatlar extends Component {
  state = {
    nameR: "",
    id: "",
    loader: true,
  };
  componentDidMount() {
    setInterval(() => {
      if (
        window.location.href.split("/")[
          window.location.href.split("/").length - 2
        ] !== this.state.id
      ) {
        this.setState({
          nameR: window.location.href
            .split("/")
            [window.location.href.split("/").length - 1].replaceAll("%20", " "),
          id: window.location.href.split("/")[
            window.location.href.split("/").length - 2
          ],
          loader: true,
        });
        setTimeout(() => {
          this.setState({
            loader: false,
          });
        }, 1000);
      }
    }, 500);
  }
  render() {
    return (
      <div>
        {" "}
        {this.state.loader ? (
          <div className="loaderG">
            <div className="befG">
              <img src={school} alt="..." />
            </div>
          </div>
        ) : (
          ""
        )}
        <Header />
        <div className={style.head}>
          <img src={etnosport8}></img>
          <div className={styles.headsarlavhaa}>
            {this.state.nameR} xotin-qizlar sport tadbirlari
          </div>

          <Dashnews id={this.state.id} />
        </div>
        <Footer />
      </div>
    );
  }
}
