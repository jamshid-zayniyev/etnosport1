import React, { Component } from "react";
import Footer from "./Footer";
import NavbarA from "./Header";
import { Modal } from "antd";
import style from "../css/Dashboard.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import kurash from "../img/kurash_ccexpress.png";
import school from "../img/gerb.png";
import rishod from "../img/rishod.jpg";
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
    sportmen: null,
    type: null,
    vil: null,
    modalB: false,
    loader: true,
  };

  openModal = (value) => {
    this.setState({
      modalB: true,
      sportmen: value,
    });
  };
  closeModal = () => {
    this.setState({
      modalB: false,
      sportmen: null,
    });
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
    var k = 0;
    for (let i = 0; i < this.state.sportType.length; i++) {
      if (!updatedChecked[i]) {
        k++;
      }
    }
    if (k === this.state.sportType.length) {
      updatedChecked = new Array(this.state.sportType.length).fill(false);
      updatedChecked[this.state.sportType.length] = true;
      for (let i = 0; i < this.state.sportType.length; i++) {
        if (!updatedChecked[i]) {
          type.push(this.state.sportType[i].name);
        }
      }
    }
    for (let i = 0; i < this.state.sportType.length; i++) {
      if (updatedChecked[i]) {
        type.push(this.state.sportType[i].name);
      }
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
    var k = 0;
    for (let i = 0; i < this.state.regions.length; i++) {
      if (!updatedChecked[i]) {
        k++;
      }
    }
    if (k === this.state.regions.length) {
      updatedChecked = new Array(this.state.regions.length).fill(false);
      updatedChecked[this.state.regions.length] = true;
      for (let i = 0; i < this.state.regions.length; i++) {
        if (!updatedChecked[i]) {
          vil.push(this.state.regions[i].name);
        }
      }
    }
    for (let i = 0; i < this.state.regions.length; i++) {
      if (updatedChecked[i]) {
        vil.push(this.state.regions[i].name);
      }
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
        var checked = new Array(res.data.length).fill(false);
        checked[res.data.length] = true;
        this.setState({
          sportType: res.data,
          checked,
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
        var checked2 = new Array(res.data.length).fill(false);
        checked2[res.data.length] = true;
        this.setState({
          regions: res.data,
          checked2,
          vil,
        });
        setTimeout(() => {
          this.setState({
            loader: false,
          });
        }, 2000);
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
        {this.state.loader ? (
          <div className="loaderG">
            <div className="befG">
              <img src={school} alt="..." />
            </div>
          </div>
        ) : (
          ""
        )}
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
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {this.filtrSportsmens(sportsmen, type, vil).map((item) => {
                    return (
                      <div
                        style={{
                          marginLeft: 10,
                          marginRight: 10,
                          marginBottom: 20,
                          flexBasis: "320px",
                        }}
                      >
                        <div
                          style={{ padding: "10px" }}
                          className={style.sportchi}
                          onClick={() => this.openModal(item)}
                        >
                          <img
                            src={
                              item.sportsman_images.length !== 0
                                ? item.sportsman_images[0].image
                                : ""
                            }
                            height="225px"
                            alt={`${item.name}`}
                          />
                          <h5>{item.name}</h5>
                          <p>{item.sport && item.sport.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
        {this.state.sportmen !== null ? (
          <Modal
            title={`${this.state.sportmen.name}`}
            centered
            footer={false}
            visible={this.state.modalB}
            onCancel={() => this.closeModal()}
            className={style.kurash}
            width="60%"
          >
            <Row>
              {this.state.sportmen.sportsman_images.length !== 0 ? (
                <Col lg={6} md={12} sm={12}>
                  <Carousel
                    responsive={responsive1}
                    infinite={true}
                    autoPlaySpeed={2000}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  >
                    {this.state.sportmen.sportsman_images.map((item) => {
                      return (
                        <div>
                          <img
                            src={item.image}
                            alt="..."
                            style={{ width: "100% !important" }}
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                </Col>
              ) : (
                ""
              )}
              <Col lg={6} md={12} sm={12} style={{ padding: "20px" }}>
                <p>
                  <b>{this.state.sportmen.name}</b> –{" "}
                  {this.state.sportmen.achievements.length !== 0
                    ? this.state.sportmen.achievements.map((item) => {
                        return item + " ";
                      })
                    : ""}
                </p>
              </Col>
            </Row>
          </Modal>
        ) : (
          ""
        )}
        <Footer />
      </div>
    );
  }
}

export default Sportchilar;
