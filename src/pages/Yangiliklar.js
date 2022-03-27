import React, { Component } from "react";
import style from "../css/Dashboard.module.css";
import styles from "../css/Gallery.module.css";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import GridLoader from "react-spinners/GridLoader";
import axios from "axios";
import { url } from "../host/Host";
import Header from "./Header";
import school from "../img/gerb.png";
import { Collapse } from "antd";

import Footer from "./Footer";
import rasm from "../img/head.jpg";
import etnosport8 from "../img/etnoimg8.jpg";
const { Panel } = Collapse;

export default class Yangiliklar extends Component {
  state = {
    loader: true,
    news: null,
    school: null,
    raqam: "0",
  };

  componentDidMount() {
    this.getNews();
    var link = window.location.href;

    this.setState({
      raqam: link.slice(link.lastIndexOf("/") + 1, link.length),
    });
  }
  getNews = () => {
    axios.get(`${url}/news/`).then((res) => {
      this.setState({
        news: res.data.reverse(),
      });
      setTimeout(() => {
        this.setState({ loader: false });
      }, 2000);
      // res.data.forEach((item) => console.log(item.news_images[0]));
    });
  };
  // componentDidMount() {
  //   this.getNews();
  //   var link = window.location.href;

  //   this.setState({
  //     raqam: link.slice(link.lastIndexOf("/") + 1, link.length),
  //   });
  // }
  // getNews = () => {
  //   axios.get(`${url}/boshqarma`).then((res) => {
  //     this.setState({
  //       school: res.data[0],
  //     });
  //     axios.get(`${url}/news/`).then((res) => {
  //       var a = res.data.reverse();
  //       a.splice(0, 1);
  //       a.splice(1, 1);
  //       a.splice(4, 1);
  //       this.setState({
  //         news: a,
  //       });
  //       setTimeout(() => {
  //         this.setState({ loader: false });
  //       }, 1000);
  //     });
  //   });
  // };
  render() {
    // const loaderT = () => {
    //   setTimeout(() => {
    //     this.setState({ loader: false });
    //   }, 2000);
    // };
    return (
      <div>
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
            Butun jahon etnosport oid qonunlar
          </div>
        </div>

        <div className={styles.newsY}>
          <Collapse accordion defaultActiveKey={[this.state.raqam]}>
            {this.state.news !== null
              ? this.state.news.map((item) => {
                  return (
                    <Panel
                      className={styles.panel}
                      header={<p style={{ color: "white" }}>{item.name}</p>}
                    >
                      <div>
                        <Container>
                          <div className={styles.flex}>
                            <div className={styles.imag}>
                              <img src={item.news_images[0].image} />
                            </div>
                            <div className={styles.yozuv}>
                              <h1>{item.name}</h1>
                              <p className={styles.dat}>
                                <i className="fa fa-calendar"></i>
                                10.10.2021 yil
                              </p>
                            </div>
                          </div>
                          <div className={styles.yozuv}>
                            <p className={styles.text}>{item.title}</p>
                          </div>
                        </Container>
                      </div>
                    </Panel>
                  );
                })
              : ""}
          
          </Collapse>
        </div>
        <Footer />
      </div>
    );
  }
}
