import React, { Component } from "react";
import Footer from "./Footer";
import NavbarA from "./Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import kurash from "../img/kurash_ccexpress.png";
import rishod from "../img/rishod.jpg";
import style from "../css/Dashboard.module.css";
import { Col, Container, Row } from "react-bootstrap";
// import kurash1 from "../img/kurash1.jpg";
// import kurash2 from "../img/kurash2.jpg";
// import kurash3 from "../img/kurash3.jpg";
// import kurash4 from "../img/kurash4.jpg";
import { regionsGet, sportmensGet, sportsGet } from "../host/Config";

export class Sportchilar extends Component {
  state = {
    checked: null,
    checked2: null,
    sportType: null,
    regions: null,
    sportsmen: null,
    type: null,
    vil: null,
  };

  handleOnChange = (position) => {
    var updatedChecked = this.state.checked.map((item, index) =>
      position === this.state.sportType.length &&
      this.state.checked[this.state.sportType.length]
        ? false
        : position === this.state.sportType.length &&
          !this.state.checked[this.state.sportType.length]
        ? true
        : index === position
        ? !item
        : item
    );
    var type = [];
    for (let i = 0; i < this.state.sportType.length + 1; i++) {
      if (!updatedChecked[i]) {
        updatedChecked[this.state.sportType.length] = false;
      }
    }
    var d = 1;
    for (let i = 0; i < this.state.sportType.length; i++) {
      if (!updatedChecked[i]) {
        d = 0;
      } else {
        type.push(this.state.sportType[i].name);
      }
    }
    if (d === 1) {
      updatedChecked[this.state.sportType.length] = true;
    }
    this.setState({ checked: updatedChecked, type });
  };

  handleOnChange2 = (position) => {
    var updatedChecked = this.state.checked2.map((item, index) =>
      position === this.state.regions.length &&
      this.state.checked2[this.state.regions.length]
        ? false
        : position === this.state.regions.length &&
          !this.state.checked2[this.state.regions.length]
        ? true
        : index === position
        ? !item
        : item
    );
    var vil = [];
    for (let i = 0; i < this.state.regions.length + 1; i++) {
      if (!updatedChecked[i]) {
        updatedChecked[this.state.regions.length] = false;
      }
    }
    var d = 1;
    for (let i = 0; i < this.state.regions.length; i++) {
      if (!updatedChecked[i]) {
        d = 0;
      } else {
        vil.push(this.state.regions[i].name);
      }
    }
    if (d === 1) {
      updatedChecked[this.state.regions.length] = true;
    }
    this.setState({ checked2: updatedChecked, vil });
  };

  filtrSportsmens = (value, type, vil) => {
    var sportsmen = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i].sport !== null) {
        if (type.indexOf(value[i].sport.name) !== -1) {
          sportsmen.push(value[i]);
        }
      } else if (value[i].region !== null) {
        if (vil.indexOf(value[i].region.name) !== -1) {
          sportsmen.push(value[i]);
        }
      }
    }
    return sportsmen;
  };

  sportsMenGet = () => {
    sportmensGet()
      .then((res) => {
        this.setState({ sportsmen: res.data });
      })
      .catch((err) => console.log(err));
    sportsGet()
      .then((res) => {
        var type = [];
        res.data.map((item) => {
          type.push(item.name);
        });
        this.setState({
          sportType: res.data,
          checked: new Array(res.data.length + 1).fill(true),
          type,
        });
      })
      .catch((err) => console.log(err));
    regionsGet()
      .then((res) => {
        var vil = [];
        res.data.map((item) => {
          vil.push(item.name);
        });
        this.setState({
          regions: res.data,
          checked2: new Array(res.data.length + 1).fill(true),
          vil,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.sportsMenGet();
  }

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

    const { sportType, regions, type, vil, sportsmen } = this.state;
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
              {sportType !== null ? (
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
                          id={`sport${item.id}`}
                          name={`${item.name}`}
                          value={`${item.name}`}
                          checked={this.state.checked[index]}
                          onChange={() => this.handleOnChange(index)}
                        />
                        <label
                          style={{ paddingLeft: 10 }}
                          htmlFor={`sport${item.id}`}
                        >
                          <h5 style={{ color: "rgb(8,6,112)" }}>{item.name}</h5>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                ""
              )}
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
              {sportsmen !== null && vil !== null && type !== null ? (
                <Carousel
                  responsive={responsive}
                  infinite
                  autoPlaySpeed={3000}
                  autoPlay={true}
                >
                  {this.filtrSportsmens(sportsmen, type, vil).map((item) => {
                    return (
                      <div style={{ marginLeft: 10, marginRight: 10 }}>
                        <div
                          style={{ padding: "10px" }}
                          className={style.sportchi}
                        >
                          <img
                            src={
                              item.main_sportman_image &&
                              item.main_sportman_image.image
                            }
                            alt={`${item.name}`}
                          />
                          <h5>{item.name}</h5>
                          <p>{item.sport && item.sport.name}</p>
                        </div>
                      </div>
                    );
                  })}
                  <div style={{ marginLeft: 10, marginRight: 10 }}>
                    <div style={{ padding: "10px" }} className={style.sportchi}>
                      <img src={rishod} alt="RishodSobirov" />
                      <h5>Rishod Sobirov(Buxoro viloyat)</h5>
                      <p>Belbogʻli kurash ustasi</p>
                    </div>
                  </div>
                </Carousel>
              ) : (
                ""
              )}
            </Col>
            <Col md={12} lg={3}>
              <div>
                <h1 className={style.sarlavha} style={{ fontSize: 28 }}>
                  Viloyatlar
                </h1>
                <div className={style.chiziq}></div>
                {regions !== null ? (
                  <ul style={{ listStyleType: "none", color: "rgb(8,6,112)" }}>
                    <li>
                      <input
                        type="checkbox"
                        id={"vil"}
                        name={"hammasi"}
                        value={"hammasi"}
                        checked={this.state.checked2[regions.length]}
                        onChange={() => this.handleOnChange2(regions.length)}
                        style={{ color: "rgb(8,6,112)" }}
                      />
                      <label style={{ paddingLeft: 5 }} htmlFor={"vil"}>
                        <h5 style={{ color: "rgb(8,6,112)" }}>Hammasi</h5>
                      </label>
                    </li>
                    {regions.map((item, index) => {
                      return (
                        <li>
                          <input
                            type="checkbox"
                            id={`vil${item.id}`}
                            name={`${item.name}`}
                            value={`${item.name}`}
                            checked={this.state.checked2[index]}
                            onChange={() => this.handleOnChange2(index)}
                            style={{ color: "rgb(8,6,112)" }}
                          />
                          <label
                            style={{ paddingLeft: 5 }}
                            htmlFor={`vil${item.id}`}
                          >
                            <h5 style={{ color: "rgb(8,6,112)" }}>
                              {item.name}
                            </h5>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  ""
                )}
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
