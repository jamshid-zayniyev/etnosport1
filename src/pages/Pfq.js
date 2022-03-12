import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import style from "../css/Hujjatlart.module.css";
import Header from "./Header";
import Footer from "./Footer";
import uzb from "../img/kurash5.jfif";
import otchop from "../img/Otchoptirish.jfif";
import eskietno from "../img/kurash7.jpg";
import etnosport7 from "../img/etnoimg7.jpg";
export default class Pfq extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={style.head}>
          <img src={etnosport7}></img>
          <div className={style.headsarlavha}>
            Butun jahon etnosport oid qonunlar
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
                    <img src={otchop} />
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
                    <img src={eskietno} />
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
                    <img src={otchop} />
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
                    <img src={eskietno} />
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
      </>
    );
  }
}
