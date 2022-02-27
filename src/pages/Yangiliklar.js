import React, { Component } from "react";
import style from "../css/Dashboard.module.css";
import styles from "../css/Gallery.module.css";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import GridLoader from "react-spinners/GridLoader";
import axios from "axios";
import { url } from "../host/Host";
import Header from "./Header";
import { Collapse } from "antd";
import Footer from "./Footer";
import rasm from "../img/news.jpg";
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
    axios.get(`${url}/boshqarma`).then((res) => {
      this.setState({
        school: res.data[0],
      });
      axios.get(`${url}/news/`).then((res) => {
        var a = res.data.reverse();
        a.splice(0, 1);
        a.splice(1, 1);
        a.splice(4, 1);
        this.setState({
          news: a,
        });
        setTimeout(() => {
          this.setState({ loader: false });
        }, 1000);
      });
    });
  };
  render() {
    return (
      <>
        <div>
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
                            <div style={{ display: "flex" }}>
                              <div className={styles.imag}>
                                <img src={item.image} />
                              </div>
                              <div className={styles.yozuv}>
                                <h1>{item.name}</h1>
                                <p className={styles.dat}>
                                  <i className="fa fa-calendar"></i>
                                  {item.date_added}
                                </p>
                              </div>
                            </div>
                            <div className={styles.yozuv}>
                              <p className={styles.text}>{item.description}</p>
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
      </>
    );
  }
}
