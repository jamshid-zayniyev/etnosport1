import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import style from "../css/Hujjatlarf.module.css";
import Header from "./Header";
import Footer from "./Footer";
import uzb from "../img/head2.jpg";
import etnosport5 from "../img/etnoimg5.jpg";
export default class HujjatlarF extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={style.head}>
          <img src={etnosport5}></img>
          <div className={style.headsarlavha}>
            Etnosportga oid Prezident farmonlari, farmoyishlari va qarorlari
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
                      Etnosport - bu jismoniy faoliyatning barcha an'anaviy
                      uslublari uchun birlashgan ijtimoiy va madaniy makonning
                      institutsional shakli. 
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
                      Etnosport - bu jismoniy faoliyatning barcha an'anaviy
                      uslublari uchun birlashgan ijtimoiy va madaniy makonning
                      institutsional shakli. 
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
                      Etnosport - bu jismoniy faoliyatning barcha an'anaviy
                      uslublari uchun birlashgan ijtimoiy va madaniy makonning
                      institutsional shakli. 
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
                      Etnosport - bu jismoniy faoliyatning barcha an'anaviy
                      uslublari uchun birlashgan ijtimoiy va madaniy makonning
                      institutsional shakli. 
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
                      Etnosport - bu jismoniy faoliyatning barcha an'anaviy
                      uslublari uchun birlashgan ijtimoiy va madaniy makonning
                      institutsional shakli. 
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
                      Etnosport - bu jismoniy faoliyatning barcha an'anaviy
                      uslublari uchun birlashgan ijtimoiy va madaniy makonning
                      institutsional shakli. 
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
