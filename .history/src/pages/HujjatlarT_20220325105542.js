
import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import style from "../css/Hujjatlart.module.css";
import Header from "./Header";
import Footer from "./Footer";
import uzb from "../img/doc.png";
import otchop from "../img/Otchoptirish.jfif";
import eskietno from "../img/kurash7.jpg";
import etnosport7 from "../img/etnoimg7.jpg";
import school from "../img/gerb.png";
import axios from "axios";
export default class Svmh extends Component {
  state = {
    loader: true,
    error:false,
  name:"",
  };
  componentDidMount() {
    var url = window.location.href.split('/')
    var id = url[url.length-1]
    this.setState({name:url[url.length-2].replaceAll('%20', "'")})
    axios.get()
    setTimeout(() => {
      this.setState({
        loader: false,
      });
    }, 3000);
  }
  render() {
  
    const loaderT = () => {
      setTimeout(() => {
        this.setState({ loader: false });
      }, 2000);
    };
    
    return (
      <div
        onLoad={() => {
          loaderT();
        }}
      >
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
          <img src={etnosport7}></img>
          <div className={style.headsarlavha}>
          {this.state.name}
          </div>
        </div>
        <br />
        <br />
        <div className={style.hujjat}>
          <Row className={style.rowT}>
            <Col
              lg={6}
              md={12}
              className={style.colT}
              style={{ marginTop: "20px" }}
              sm={12}
            >
              <a className={style.ss} href="#" target="_blank">
                <Row>
                  <Col lg={4}>
                    <img src={uzb} />
                  </Col>
                  <Col
                    lg={8}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h1>
                      Butunjahon Etnosport Konfederatsiyasi (WEC) an'anaviy
                      sport va o'yinlar haqida xabardorlikni oshirish va
                      tarqatishga qaratilgan faoliyat bilan shug'ullanadigan
                      xalqaro muassasadir.
                    </h1>
                  </Col>
                </Row>
              </a>
            </Col>
            <Col
              lg={6}
              md={12}
              className={style.colT}
              style={{ marginTop: "20px" }}
              sm={12}
            >
              <a className={style.ss} href="#" target="_blank">
                <Row>
                  <Col lg={4}>
                    <img src={uzb} />
                  </Col>
                  <Col
                    lg={8}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h1>
                      Butunjahon Etnosport Konfederatsiyasi (WEC) an'anaviy
                      sport va o'yinlar haqida xabardorlikni oshirish va
                      tarqatishga qaratilgan faoliyat bilan shug'ullanadigan
                      xalqaro muassasadir.
                    </h1>
                  </Col>
                </Row>
              </a>
            </Col>
            <Col
              lg={6}
              md={12}
              className={style.colT}
              style={{ marginTop: "20px" }}
              sm={12}
            >
              <a className={style.ss} href="#" target="_blank">
                <Row>
                  <Col lg={4}>
                    <img src={uzb} />
                  </Col>
                  <Col
                    lg={8}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h1>
                      Butunjahon Etnosport Konfederatsiyasi (WEC) an'anaviy
                      sport va o'yinlar haqida xabardorlikni oshirish va
                      tarqatishga qaratilgan faoliyat bilan shug'ullanadigan
                      xalqaro muassasadir.
                    </h1>
                  </Col>
                </Row>
              </a>
            </Col>
            <Col
              lg={6}
              md={12}
              className={style.colT}
              style={{ marginTop: "20px" }}
              sm={12}
            >
              <a className={style.ss} href="#" target="_blank">
                <Row>
                  <Col lg={4}>
                    <img src={uzb} />
                  </Col>
                  <Col
                    lg={8}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h1>
                      Butunjahon Etnosport Konfederatsiyasi (WEC) an'anaviy
                      sport va o'yinlar haqida xabardorlikni oshirish va
                      tarqatishga qaratilgan faoliyat bilan shug'ullanadigan
                      xalqaro muassasadir.
                    </h1>
                  </Col>
                </Row>
              </a>
            </Col>
            <Col
              lg={6}
              md={12}
              className={style.colT}
              style={{ marginTop: "20px" }}
              sm={12}
            >
              <a className={style.ss} href="#" target="_blank">
                <Row>
                  <Col lg={4}>
                    <img src={uzb} />
                  </Col>
                  <Col
                    lg={8}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h1>
                      Butunjahon Etnosport Konfederatsiyasi (WEC) an'anaviy
                      sport va o'yinlar haqida xabardorlikni oshirish va
                      tarqatishga qaratilgan faoliyat bilan shug'ullanadigan
                      xalqaro muassasadir.
                    </h1>
                  </Col>
                </Row>
              </a>
            </Col>
            <Col
              lg={6}
              md={12}
              className={style.colT}
              style={{ marginTop: "20px" }}
              sm={12}
            >
              <a className={style.ss} href="#" target="_blank">
                <Row>
                  <Col lg={4}>
                    <img src={uzb} />
                  </Col>
                  <Col
                    lg={8}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h1>
                      Butunjahon Etnosport Konfederatsiyasi (WEC) an'anaviy
                      sport va o'yinlar haqida xabardorlikni oshirish va
                      tarqatishga qaratilgan faoliyat bilan shug'ullanadigan
                      xalqaro muassasadir.
                    </h1>
                  </Col>
                </Row>
              </a>
            </Col>
          </Row>

          <br />
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}
