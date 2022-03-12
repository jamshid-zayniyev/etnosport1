import React, { Component } from "react";
import Footer from "./Footer";
import NavbarA from "./Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import kurash from "../img/kurash.PNG";
import rishod from "../img/rishod.jpg";
import style from "../css/Dashboard.module.css";
import { Col, Row } from "react-bootstrap";
import { vil } from "./MapViloyatlar";

export class Sportchilar extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div>
        <NavbarA />
        <div style={{ height: 100, backgroundColor: "black" }}></div>
        <div className={style.sports}>
          <Row>
            <Col md={{ span: 6, offset: 3 }} lg={{ span: 3, offset: 0 }}>
              <h1 className={style.sarlavha}>Sport turlari</h1>
              <div className={style.chiziq}></div>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={2000}
                autoPlay={true}
                arrows={true}
              >
                <div style={{ padding: "10px" }}>
                  <div className={style.sport}>
                    <img src={kurash} alt="" />
                    <p>Belbog'li kurash</p>
                  </div>
                </div>

                <div style={{ padding: "10px" }}>
                  <div className={style.sport}>
                    <img src={kurash} alt="" />
                    <p>Belbog'li kurash</p>
                  </div>
                </div>

                <div style={{ padding: "10px" }}>
                  <div className={style.sport}>
                    <img src={kurash} alt="" />
                    <p>Belbog'li kurash</p>
                  </div>
                </div>

                <div style={{ padding: "10px" }}>
                  <div className={style.sport}>
                    <img src={kurash} alt="" />
                    <p>Belbog'li kurash</p>
                  </div>
                </div>

                <div style={{ padding: "10px" }}>
                  <div className={style.sport}>
                    <img src={kurash} alt="" />
                    <p>Belbog'li kurash</p>
                  </div>
                </div>

                <div style={{ padding: "10px" }}>
                  <div className={style.sport}>
                    <img src={kurash} alt="" />
                    <p>Belbog'li kurash</p>
                  </div>
                </div>

                <div style={{ padding: "10px" }}>
                  <div className={style.sport}>
                    <img src={kurash} alt="" />
                    <p>Belbog'li kurash</p>
                  </div>
                </div>

                <div style={{ padding: "10px" }}>
                  <div className={style.sport}>
                    <img src={kurash} alt="" />
                    <p>Belbog'li kurash</p>
                  </div>
                </div>

                <div style={{ padding: "10px" }}>
                  <div className={style.sport}>
                    <img src={kurash} alt="" />
                    <p>Belbog'li kurash</p>
                  </div>
                </div>

                <div style={{ padding: "10px" }}>
                  <div className={style.sport}>
                    <img src={kurash} alt="" />
                    <p>Belbog'li kurash</p>
                  </div>
                </div>

                <div style={{ padding: "10px" }}>
                  <div className={style.sport}>
                    <img src={kurash} alt="" />
                    <p>Belbog'li kurash</p>
                  </div>
                </div>

                <div style={{ padding: "10px" }}>
                  <div className={style.sport}>
                    <img src={kurash} alt="" />
                    <p>Belbog'li kurash</p>
                  </div>
                </div>

                <div style={{ padding: "10px" }}>
                  <div className={style.sport}>
                    <img src={kurash} alt="" />
                    <p>Belbog'li kurash</p>
                  </div>
                </div>
              </Carousel>
            </Col>
            <Col md={12} lg={6}>
              <h1 className={style.sarlavha}>Sportchilar</h1>
              <div className={style.chiziq}></div>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={3000}
                autoPlay={true}
              >
                <div>
                  <div style={{ padding: "10px" }} className={style.sportchi}>
                    <img src={rishod} alt="RishodSobirov" />
                    <h5>Rishod Sobirov(Buxoro viloyat)</h5>
                    <p>Belbogʻli kurash ustasi</p>
                  </div>
                </div>
                <div>
                  <div style={{ padding: "10px" }} className={style.sportchi}>
                    <img src={rishod} alt="RishodSobirov" />
                    <h5>Rishod Sobirov(Buxoro viloyat)</h5>
                    <p>Belbogʻli kurash ustasi</p>
                  </div>
                </div>
                <div>
                  <div style={{ padding: "10px" }} className={style.sportchi}>
                    <img src={rishod} alt="RishodSobirov" />
                    <h5>Rishod Sobirov(Buxoro viloyat)</h5>
                    <p>Belbogʻli kurash ustasi</p>
                  </div>
                </div>
                <div>
                  <div style={{ padding: "10px" }} className={style.sportchi}>
                    <img src={rishod} alt="RishodSobirov" />
                    <h5>Rishod Sobirov(Buxoro viloyat)</h5>
                    <p>Belbogʻli kurash ustasi</p>
                  </div>
                </div>
                <div>
                  <div style={{ padding: "10px" }} className={style.sportchi}>
                    <img src={rishod} alt="RishodSobirov" />
                    <h5>Rishod Sobirov(Buxoro viloyat)</h5>
                    <p>Belbogʻli kurash ustasi</p>
                  </div>
                </div>
              </Carousel>
            </Col>
            <Col md={12} lg={3}>
              <div>
                <h1 className={style.sarlavha}>Viloyatlar</h1>
                <div className={style.chiziq}>
                  <ul
                    style={{
                      listStyleType: "square",
                      color: "rgb(8,6,112)",
                      fontSize: 18,
                    }}
                  >
                    {vil.map((item) => {
                      return (
                        <li style={{ paddingTop: 6 }}>
                          <h5 style={{ color: "rgb(8,6,112)" }}>{item.name}</h5>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Sportchilar;
