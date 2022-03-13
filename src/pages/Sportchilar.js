import React, { Component } from "react";
import Footer from "./Footer";
import NavbarA from "./Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import kurash from "../img/kurash_ccexpress.png";
import rishod from "../img/rishod.jpg";
import style from "../css/Dashboard.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { vil } from "./MapViloyatlar";
import kurash1 from "../img/kurash1.jpg";
import kurash2 from "../img/kurash2.jpg";
import kurash3 from "../img/kurash3.jpg";
import kurash4 from "../img/kurash4.jpg";

const sportType = [
  {
    id: 1,
    name: "Belbog'li kurash",
  },
  {
    id: 2,
    name: "Sambo",
  },
  {
    id: 3,
    name: "Taekvando",
  },
  {
    id: 4,
    name: "Dzyudo",
  },
];

export class Sportchilar extends Component {
  state = {
    checked: new Array(sportType.length + 1).fill(false),
    checked2: new Array(vil.length + 1).fill(false),
  };

  handleOnChange = (position) => {
    var updatedChecked = this.state.checked.map((item, index) =>
      position === sportType.length && this.state.checked[sportType.length]
        ? false
        : position === sportType.length && !this.state.checked[sportType.length]
        ? true
        : index === position
        ? !item
        : item
    );
    this.setState({ checked: updatedChecked });
  };
  handleOnChange2 = (position) => {
    var updatedChecked = this.state.checked2.map((item, index) =>
      position === vil.length && this.state.checked2[vil.length]
        ? false
        : position === vil.length && !this.state.checked2[vil.length]
        ? true
        : index === position
        ? !item
        : item
    );
    this.setState({ checked2: updatedChecked });
  };
  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    const responsive1 = {
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
        <div style={{ width: "100%", backgroundColor: "rgb(255,78,0)" }}>
          <img
            src={kurash}
            alt="rasm"
            style={{
              width: "auto",
              height: "350px",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />
          <div style={{ backgroundColor: "white", height: 3 }}></div>
          <br />
          <h2
            style={{ color: "white", textAlign: "center", paddingBottom: 30 }}
          >
            Sportchilar
          </h2>
          {/* <Row>
              <Col md={6}>
                <div>
                  <h2
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Sportchilar
                  </h2>
                </div>
              </Col>
              <Col md={6}>
                <Carousel
                  responsive={responsive1}
                  infinite={true}
                  autoPlaySpeed={5000}
                  autoPlay={true}
                >
                  <div>
                    <img
                      width="100%"
                      height="100%"
                      style={{
                        display: "block",
                        objectFit: "contain",
                        marginRight: "auto",
                        marginLeft: "auto",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                      src={kurash1}
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      width="100%"
                      height="100%"
                      style={{
                        display: "block",
                        objectFit: "contain",
                        marginRight: "auto",
                        marginLeft: "auto",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                      src={kurash2}
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      width="100%"
                      height="100%"
                      style={{
                        display: "block",
                        objectFit: "contain",
                        marginRight: "auto",
                        marginLeft: "auto",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                      src={kurash3}
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      width="100%"
                      height="100%"
                      style={{
                        display: "block",
                        objectFit: "contain",
                        marginRight: "auto",
                        marginLeft: "auto",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                      src={kurash4}
                      alt="..."
                    />
                  </div>
                </Carousel>
              </Col>
            </Row> */}
        </div>
        <div>
          <Row>
            <Col md={{ span: 6, offset: 3 }} lg={{ span: 2, offset: 0 }}>
              <h1 className={style.sarlavha} style={{ fontSize: 28 }}>
                Sport turlari
              </h1>
              <div className={style.chiziq}></div>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <input
                    type="checkbox"
                    id={0}
                    name={"hammasi"}
                    value={"hammasi"}
                    checked={this.state.checked[sportType.length]}
                    onChange={() => this.handleOnChange(sportType.length)}
                  />
                  <label style={{ paddingLeft: 10 }} htmlFor={0}>
                    <h5 style={{ color: "rgb(8,6,112)" }}>Hammasi</h5>
                  </label>
                </li>
                {sportType.map((item, index) => {
                  return (
                    <li>
                      <input
                        type="checkbox"
                        id={`${item.id}`}
                        name={`${item.name}`}
                        value={`${item.name}`}
                        checked={this.state.checked[index]}
                        onChange={() => this.handleOnChange(index)}
                      />
                      <label style={{ paddingLeft: 10 }} htmlFor={`${item.id}`}>
                        <h5 style={{ color: "rgb(8,6,112)" }}>{item.name}</h5>
                      </label>
                    </li>
                  );
                })}
              </ul>
              {/* <Carousel
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
              </Carousel> */}
            </Col>
            <Col md={12} lg={7}>
              <h1 className={style.sarlavha} style={{ fontSize: 28 }}>
                Sportchilar
              </h1>
              <div className={style.chiziq}></div>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={3000}
                autoPlay={true}
              >
                <div style={{ marginLeft: 10, marginRight: 10 }}>
                  <div style={{ padding: "10px" }} className={style.sportchi}>
                    <img src={rishod} alt="RishodSobirov" />
                    <h5>Rishod Sobirov(Buxoro viloyat)</h5>
                    <p>Belbogʻli kurash ustasi</p>
                  </div>
                </div>
                <div style={{ marginLeft: 10, marginRight: 10 }}>
                  <div style={{ padding: "10px" }} className={style.sportchi}>
                    <img src={rishod} alt="RishodSobirov" />
                    <h5>Rishod Sobirov(Buxoro viloyat)</h5>
                    <p>Belbogʻli kurash ustasi</p>
                  </div>
                </div>
                <div style={{ marginLeft: 10, marginRight: 10 }}>
                  <div style={{ padding: "10px" }} className={style.sportchi}>
                    <img src={rishod} alt="RishodSobirov" />
                    <h5>Rishod Sobirov(Buxoro viloyat)</h5>
                    <p>Belbogʻli kurash ustasi</p>
                  </div>
                </div>
                <div style={{ marginLeft: 10, marginRight: 10 }}>
                  <div style={{ padding: "10px" }} className={style.sportchi}>
                    <img src={rishod} alt="RishodSobirov" />
                    <h5>Rishod Sobirov(Buxoro viloyat)</h5>
                    <p>Belbogʻli kurash ustasi</p>
                  </div>
                </div>
                <div style={{ marginLeft: 10, marginRight: 10 }}>
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
                <h1 className={style.sarlavha} style={{ fontSize: 28 }}>
                  Viloyatlar
                </h1>
                <div className={style.chiziq}></div>
                <ul style={{ listStyleType: "none", color: "rgb(8,6,112)" }}>
                  <li>
                    <input
                      type="checkbox"
                      id={"UZBVIL"}
                      name={"hammasi"}
                      value={"hammasi"}
                      checked={this.state.checked2[vil.length]}
                      onChange={() => this.handleOnChange2(vil.length)}
                      style={{ color: "rgb(8,6,112)" }}
                    />
                    <label style={{ paddingLeft: 5 }} htmlFor={"UZBVIL"}>
                      <h5 style={{ color: "rgb(8,6,112)" }}>Hammasi</h5>
                    </label>
                  </li>
                  {vil.map((item, index) => {
                    return (
                      <li>
                        <input
                          type="checkbox"
                          id={`${item.id}`}
                          name={`${item.name}`}
                          value={`${item.name}`}
                          checked={this.state.checked2[index]}
                          onChange={() => this.handleOnChange2(index)}
                          style={{ color: "rgb(8,6,112)" }}
                        />
                        <label
                          style={{ paddingLeft: 5 }}
                          htmlFor={`${item.id}`}
                        >
                          <h5 style={{ color: "rgb(8,6,112)" }}>{item.name}</h5>
                        </label>
                      </li>
                    );
                  })}
                </ul>
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
