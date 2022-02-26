import React, { Component } from "react";
import styles from "../css/Hujjatlar.module.css";
import style from "../css/Kutubxona.module.css";
import Footer from "./Footer";
import Header from "./Header";

import { Col, Container, Row } from "react-bootstrap";
import sinf1 from "../img/Otchoptirish.jfif";
import sinf2 from "../img/kurash6.jpg";
import sinf3 from "../img/otchopar.jpg";
import sinf4 from "../img/kurash6.jpg";
import sinf5 from "../img/kurash7.jpg";
import sinf6 from "../img/kurash5.jfif";
import sinf7 from "../img/kurash7.jpg";
import sinf8 from "../img/kurash6.jpg";
import sinf9 from "../img/kurash7.jpg";
import sinf10 from "../img/Otchoptirish.jfif";
import sinf11 from "../img/kurash6.jpg";
export default class Sporthm extends Component {
  state = {
    loader: true,
  };

  render() {
    return (
      <div>
        <Header />

        <div className={style.head}>
          <h1 className={style.sarlavha}>Elektron kitoblar to'plami</h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className={style.sinflar}>
          <Container>
            <Row style={{ justifyContent: "center" }}>
              <Col style={{ padding: "15px" }} xl={3} lg={4} md={6} sm={12}>
                <div className={style.sinf}>
                  <img src={sinf1} slt="..." />
                  <a
                    className={style.but}
                    href="https://www.kitob.uz/catalog/subgenres/146"
                    target="_blank"
                  >
                    Kitoblarni ko'rish
                  </a>
                  <br />
                </div>
              </Col>
              <Col style={{ padding: "15px" }} xl={3} lg={4} md={6} sm={12}>
                <div className={style.sinf}>
                  <img src={sinf2} slt="..." />
                  <a
                    className={style.but}
                    href="https://www.kitob.uz/catalog/subgenres/147"
                    target="_blank"
                  >
                    Kitoblarni ko'rish
                  </a>
                  <br />
                </div>
              </Col>
              <Col style={{ padding: "15px" }} xl={3} lg={4} md={6} sm={12}>
                <div className={style.sinf}>
                  <img src={sinf3} slt="..." />
                  <a
                    className={style.but}
                    href="https://www.kitob.uz/catalog/subgenres/148"
                    target="_blank"
                  >
                    Kitoblarni ko'rish
                  </a>
                  <br />
                </div>
              </Col>
              <Col style={{ padding: "15px" }} xl={3} lg={4} md={6} sm={12}>
                <div className={style.sinf}>
                  <img src={sinf4} slt="..." />
                  <a
                    className={style.but}
                    href="https://www.kitob.uz/catalog/subgenres/149"
                    target="_blank"
                  >
                    Kitoblarni ko'rish
                  </a>
                  <br />
                </div>
              </Col>
              <Col style={{ padding: "15px" }} xl={3} lg={4} md={6} sm={12}>
                <div className={style.sinf}>
                  <img src={sinf5} slt="..." />
                  <a
                    className={style.but}
                    href="https://www.kitob.uz/catalog/subgenres/150"
                    target="_blank"
                  >
                    Kitoblarni ko'rish
                  </a>
                  <br />
                </div>
              </Col>
              <Col style={{ padding: "15px" }} xl={3} lg={4} md={6} sm={12}>
                <div className={style.sinf}>
                  <img src={sinf6} slt="..." />
                  <a
                    className={style.but}
                    href="https://www.kitob.uz/catalog/subgenres/151"
                    target="_blank"
                  >
                    Kitoblarni ko'rish
                  </a>
                  <br />
                </div>
              </Col>
              <Col style={{ padding: "15px" }} xl={3} lg={4} md={6} sm={12}>
                <div className={style.sinf}>
                  <img src={sinf7} slt="..." />
                  <a
                    className={style.but}
                    href="https://www.kitob.uz/catalog/subgenres/152"
                    target="_blank"
                  >
                    Kitoblarni ko'rish
                  </a>
                  <br />
                </div>
              </Col>
              <Col style={{ padding: "15px" }} xl={3} lg={4} md={6} sm={12}>
                <div className={style.sinf}>
                  <img src={sinf8} slt="..." />
                  <a
                    className={style.but}
                    href="https://www.kitob.uz/catalog/subgenres/153"
                    target="_blank"
                  >
                    Kitoblarni ko'rish
                  </a>
                  <br />
                </div>
              </Col>
              <Col style={{ padding: "15px" }} xl={3} lg={4} md={6} sm={12}>
                <div className={style.sinf}>
                  <img src={sinf9} slt="..." />
                  <a
                    className={style.but}
                    href="https://www.kitob.uz/catalog/subgenres/154"
                    target="_blank"
                  >
                    Kitoblarni ko'rish
                  </a>
                  <br />
                </div>
              </Col>
              <Col style={{ padding: "15px" }} xl={3} lg={4} md={6} sm={12}>
                <div className={style.sinf}>
                  <img src={sinf10} slt="..." />
                  <a
                    className={style.but}
                    href="https://www.kitob.uz/catalog/subgenres/155"
                    target="_blank"
                  >
                    Kitoblarni ko'rish
                  </a>
                  <br />
                </div>
              </Col>
              <Col style={{ padding: "15px" }} xl={3} lg={4} md={6} sm={12}>
                <div className={style.sinf}>
                  <img src={sinf11} slt="..." />
                  <a
                    className={style.but}
                    href="https://www.kitob.uz/catalog/subgenres/156"
                    target="_blank"
                  >
                    Kitoblarni ko'rish
                  </a>
                  <br />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <br />

        <Footer />
      </div>
    );
  }
}
