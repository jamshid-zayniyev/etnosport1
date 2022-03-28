import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import style from "../css/Dashboard.module.css";
import { Col, Row, Container } from "react-bootstrap";
import head from "../img/head.jpg";
import head1 from "../img/head1.jpg";
import head2 from "../img/head2.jpg";
import head3 from "../img/head3.jpg";
import head5 from "../img/head5.jpg";
import school from "../img/gerb.png";
import her2 from "../img/h2.jpg";
import her3 from "../img/h3.jpg";
import { Clusterer, Map, Placemark, YMaps } from "react-yandex-maps";
import "./form.css";
import { MapDash } from "./MapDash";
import her4 from "../img/h4.jpg";
import rishod from "../img/rishod.jpg";
import her5 from "../img/h5.png";
import her6 from "../img/h6.png";
import head4 from "../img/head4.jpg";
import kurash from "../img/kurash.PNG";
import stylev from "../css/Videolar.module.css";
import zulfiyaxonim2 from "../img/zulfiyaxonim2.jpg";
import faxriylar1 from "../img/faxriylar1.jpg";
import faxriylar2 from "../img/faxriylar2.jpg";
import faxriylar3 from "../img/faxriylar3.jpg";
import kurash1 from "../img/kurash1.jpg";
import kurash2 from "../img/kurash2.jpg";
import kurash3 from "../img/kurash3.jpg";
import kurash4 from "../img/kurash4.jpg";
import shaxram1 from "../img/shaxram1.jpg";
import shaxram2 from "../img/shaxram2.jpg";
import shaxram3 from "../img/shaxram3.jpg";
import shaxram4 from "../img/shaxram4.jpg";
import newsetno from "../img/newsetno1.jpg";
import newsetno2 from "../img/newsetno2.jpg";
import newsetno3 from "../img/newsetno3.jpg";
import axios from "axios";
import Dashnews from "./Dashnews";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { url } from "../host/Host";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import Dashreyting from "./Dashreyting";
import YouTube from "@u-wave/react-youtube";
import { ChartS } from "./ChartS";
import { ChartT } from "./ChartT";
import { sportsGet } from "../host/Config";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
const responsive1 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export default class Dashboard extends Component {
  state = {
    muted2: true,
    muted3: true,
    loader: true,
    news: null,
    modalA: false,
    modalB: false,
    regions: null,
    events: null,
    videoss: null,
    sportsType: null,
    faxriylar: null,
    zulfiyachilar: null,
    olimpiadachilar: null,
    jahonchilar: null,
    sportType: null,
    sportsmen: null,
  };
  getVideos = () => {
    axios.get(`${url}/videos/`).then((res) => {
      this.setState({
        videoss: res.data.reverse(),
      });
    });
  };
  openModalA = (value) => {
    this.setState({
      sportType: value,
      modalA: true,
    });
  };
  getRegions = () => {
    axios.get(`${url}/regions/`).then((res) => {
      this.setState({ regions: res.data });
      setTimeout(() => {
        this.setState({
          loader: false,
        });
      }, 1000);
    });
  };

  closeModalA = () => {
    this.setState({
      modalA: false,
      sportType: null,
    });
  };
  openModalB = (value) => {
    this.setState({
      sportsmen: value,
      modalB: true,
    });
  };
  closeModalB = () => {
    this.setState({
      modalB: false,
      sportsmen: null,
    });
  };
  getNews = () => {
    axios.get(`${url}/news/`).then((res) => {
      this.setState({
        news: res.data.reverse(),
      });
    });
  };
  getSports = () => {
    sportsGet()
      .then((res) => {
        this.setState({ sportsType: res.data });
      })
      .catch((err) => console.log(err));
  };
  getSportsmens = () => {
    axios.get(`${url}/categories/`).then((res) => {
      axios.get(`${url}/sportsmen/`).then((res1) => {
        var faxriylar = [];
        var jahonchemp = [];
        var olimpiada = [];
        var zulfiyachilar = [];
        res1.data.map((item) => {
          if (item.category.length !== 0) {
            item.category.map((item1) => {
              if (res.data[0].name === item1.name) {
                zulfiyachilar.push(item);
              }
              if (res.data[1].name === item1.name) {
                faxriylar.push(item);
              }
              if (res.data[2].name === item1.name) {
                jahonchemp.push(item);
              }
              if (res.data[3].name === item1.name) {
                olimpiada.push(item);
              }
            });
          }
        });
        if (zulfiyachilar.length !== 0) {
          this.setState({ zulfiyachilar });
        }
        if (faxriylar.length !== 0) {
          this.setState({ faxriylar });
        }
        if (olimpiada.length !== 0) {
          this.setState({ olimpiadachilar: olimpiada });
        }
        if (jahonchemp.length !== 0) {
          this.setState({ jahonchilar: jahonchemp });
        }
      });
    });
  };
  componentDidMount() {
    this.getNews();
    this.getRegions();
    this.getVideos();
    this.getSportsmens();
    this.getSports();
  }
  muted2 = () => {
    this.setState({
      muted2: !this.state.muted2,
    });
  };
  muted3 = () => {
    this.setState({
      muted3: !this.state.muted3,
    });
  };
  render() {
    const responsiveY = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
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

    const responsive5 = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
      },
    };
 
    const responsive4 = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
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
        {this.state.sportType !== null ? (
          <Modal
            title={`${this.state.sportType.name} sport turi`}
            centered
            footer={false}
            visible={this.state.modalA}
            // onOk={() => this.openModalA()}
            onCancel={() => this.closeModalA()}
            className={style.kurash}
            width="60%"
          >
            <Row>
              {this.state.sportType.sport_images.length !== 0 ? (
                <Col lg={6} md={12} sm={12}>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={2000}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  >
                    {this.state.sportType.sport_images.map((item) => {
                      return (
                        <div>
                          <img src={item.image} alt="..." />
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
                  <b>Belbogʻli kurash</b> — Bu Oʻzbek milliy sport turlaridan
                  biri boʻlib asosan Oʻrta osiyoda ommabop sanaladi. Belbogʻli
                  kurashning koʻp javhalari oʻzbek halq milliy kurashiga oʻxshab
                  ketadi, lekin bu sport turida sportchilar asosan belbogʻ
                  orqali kurashadilar. Asosan bu sport turi ikki kishi oʻrtasida
                  amalga oshiriladi. Belbogʻli kurashning asosiy kiyimlariga
                  kurashish uchun yaktak va belbogʻ kiradi.
                </p>
              </Col>
            </Row>
          </Modal>
        ) : (
          ""
        )}
        {this.state.sportsmen !== null ? (
          <Modal
            title={`${this.state.sportsmen.name}`}
            centered
            footer={false}
            visible={this.state.modalB}
            // onOk={() => this.openModalB()}
            onCancel={() => this.closeModalB()}
            className={style.kurash}
            width="60%"
          >
            <Row>
              {this.state.sportsmen.sportsman_images.length !== 0 ? (
                <Col lg={6} md={12} sm={12}>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={2000}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  >
                    {this.state.sportsmen.sportsman_images.map((item) => {
                      return (
                        <div>
                          <img src={item.image} alt="..." />
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
                  <b>{this.state.sportsmen.name}</b> –{" "}
                  {this.state.sportsmen.achievements.length !== 0
                    ? this.state.sportsmen.achievements[0]
                    : ""}
                </p>
              </Col>
            </Row>
          </Modal>
        ) : (
          ""
        )}
        <div className={style.head}>
          <Row>
            <Col lg={6} md={12} className={style.lY}>
              <h2 className={style.textmah}>
                <span>“Mahalla va oila”</span> ilmiy-tadqiqot institutining{" "}
                <span>
                  Mahallalarda xotin-qizlar o'rtasida sportni rivojlantirish
                  platformasi
                </span>{" "}
                loyihasi
              </h2>
              <a
                className={style.but}
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeMMzTKdIwFE2ysPi4F1N9VzVTMUQVp7LV86c46Cm_OY11exQ/viewform"
              >
                So'rovnomani to'ldiring
              </a>
            </Col>
            <Col lg={6} md={12}>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={2000}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
              >
                <div>
                  <img src={head1} alt="..." />
                </div>
                <div>
                  <img src={head2} alt="..." />
                </div>
                <div>
                  <img src={head5} alt="..." />
                </div>
                <div>
                  <img src={head} alt="..." />
                </div>

                <div>
                  <img src={head3} alt="..." />
                </div>
                <div>
                  <img src={head4} alt="..." />
                </div>
              </Carousel>
            </Col>
          </Row>
          <h1 className={style.sarlavha}>Viloyatlar reytengi</h1>
          <div className={style.chiziq}></div>
          <br />
          <br />
          <br />
          <Dashreyting regions={this.state.regions} />
          <h1 className={style.sarlavha}>Statistika</h1>

          <div className={style.chiziq}></div>
          <Row style={{ padding: "20px" }}>
            <Col lg={6} md={12} sm={12}>
              <ChartS regions={this.state.regions} />
            </Col>
            <Col lg={6} md={12} sm={12}>
              <ChartT regions={this.state.regions} />
            </Col>
          </Row>

          <div className={style.sports}>
            <h1 className={style.sarlavha}>Sport turlari</h1>

            <div className={style.chiziq}></div>
            {this.state.sportsType !== null ? (
              <Carousel
                responsive={responsive1}
                infinite={true}
                autoPlaySpeed={1500}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
              >
                {this.state.sportsType.map((item, index) => {
                  return (
                    <div key={`${index}`} style={{ padding: "10px" }}>
                      <div
                        className={style.sport}
                        onClick={() => this.openModalA(item)}
                      >
                        <img
                          src={
                            item.sport_images !== null
                              ? item.sport_images[0].image
                              : ""
                          }
                          height="150px"
                          alt="Rasm"
                        />
                        <p>{item.name}</p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            ) : (
              ""
            )}
            <br />
            <br />
          </div>

          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className={style.sports}>
                <h1 className={style.sarlavhaa}>Zulfiyaxonim avlodlari</h1>
                <div className={style.chiziq}></div>
                {this.state.zulfiyachilar !== null ? (
                  <Carousel
                    responsive={responsive4}
                    infinite={true}
                    autoPlaySpeed={1500}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  >
                    {this.state.zulfiyachilar.map((item) => {
                      return (
                        <div style={{ padding: "10px" }}>
                          <div
                            className={style.sportchi}
                            onClick={() => this.openModalB(item)}
                          >
                            <img
                              src={
                                item.sportsman_images.length !== 0
                                  ? item.sportsman_images[0].image
                                  : ""
                              }
                              alt="Rasm"
                            />
                            <h5>{item.name}</h5>
                            <p>Zulfiyaxonim shoira ijodkor</p>
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
                ) : (
                  ""
                )}
                <br />
                <br />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className={style.sports}>
                <h1 className={style.sarlavhaa}>Bizning faxrlarimiz</h1>
                <div className={style.chiziq}></div>
                {this.state.faxriylar !== null ? (
                  <Carousel
                    responsive={responsive4}
                    infinite={true}
                    autoPlaySpeed={1500}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  >
                    {this.state.faxriylar.map((item) => {
                      return (
                        <div style={{ padding: "10px" }}>
                          <div
                            className={style.sportchi}
                            onClick={() => this.openModalB(item)}
                          >
                            <img
                              src={
                                item.sportsman_images.length !== 0
                                  ? item.sportsman_images[0].image
                                  : ""
                              }
                              alt="Rasm"
                            />
                            <h5>Faxriylarimiz</h5>
                            <p>{item.name}</p>
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
                ) : (
                  ""
                )}
                <br />
                <br />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className={style.sports}>
                <h1 className={style.sarlavhaa}>Jahon chempionlari</h1>
                <div className={style.chiziq}></div>
                {this.state.jahonchilar !== null ? (
                  <Carousel
                    responsive={responsive4}
                    infinite={true}
                    autoPlaySpeed={1500}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  >
                    {this.state.jahonchilar.map((item) => {
                      return (
                        <div style={{ padding: "10px" }}>
                          <div
                            className={style.sportchi}
                            onClick={() => this.openModalB(item)}
                          >
                            <img
                              src={
                                item.sportsman_images.length !== 0
                                  ? item.sportsman_images[0].image
                                  : ""
                              }
                              alt="Rasm"
                            />
                            <h5>{item.name}</h5>
                            <p>{item.sport !== null ? item.sport.name : ""}</p>
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
                ) : (
                  ""
                )}
                <br />
                <br />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className={style.sports}>
                <h1 className={style.sarlavhaa}>Olimpiada chempionlari</h1>
                <div className={style.chiziq}></div>
                {this.state.olimpiadachilar !== null ? (
                  <Carousel
                    responsive={responsive4}
                    infinite={true}
                    autoPlaySpeed={1500}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  >
                    {this.state.olimpiadachilar.map((item) => {
                      return (
                        <div style={{ padding: "10px" }}>
                          <div
                            className={style.sportchi}
                            onClick={() => this.openModalB(item)}
                          >
                            <img
                              src={
                                item.sportsman_images.length !== 0
                                  ? item.sportsman_images[0].image
                                  : ""
                              }
                              alt="Rasm"
                            />
                            <h5>{item.name}</h5>
                            <p>{item.sport !== null ? item.sport.name : ""}</p>
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
                ) : (
                  ""
                )}
                <br />
                <br />
              </div>
            </Col>
          </Row>

          <div></div>
          <div className={style.news}>
            <h1 className={style.sarlavha}>Yangiliklar</h1>
            <div className={style.chiziq}></div>

            <Container>
              <Row>
                {this.state.news !== null
                  ? this.state.news.map((item) => {
                      return (
                        <Col lg={6} md={6} sm={12} className={style.new}>
                          <Link to="/yangiliklar">
                            <Row className={style.n}>
                              <Col lg={4}>
                                <img
                                  src={
                                    item.news_images !== null ??
                                    item.news_images[0].image
                                  }
                                  alt="..."
                                />
                              </Col>
                              <Col lg={8}>
                                <p>
                                  <b>{item.name}</b>
                                </p>
                                <p>
                                  <i className="fa fa-calendar"></i>
                                  {item.date_added.slice(0, 10)} yil
                                </p>
                              </Col>
                            </Row>
                          </Link>
                        </Col>
                      );
                    })
                  : ""}
              </Row>
              <Link className={style.but} to="/yangiliklar">
                {" "}
                Barchasini ko'rish
              </Link>
            </Container>
          </div>
          <h1 className={style.sarlavha}>Tadbirlar</h1>
          <div className={style.chiziq}></div>

          <Dashnews id="H" />
          <>
            <div
              style={{
                backgroundColor: "white",
                marginTop: "-30px",
                textAlign: "center",
              }}
              className={style.homiy}
            >
              <br />
              <h1 className={style.sarlavha}>Xarita</h1>
              <div className={style.chiziq}></div>

              <MapDash regions={this.state.regions} />
              <br />

              <h1 className={style.sarlavha}>Videolavhalar</h1>
              <div className={style.chiziq}></div>

              <div className={stylev.videos}>
                <div id="video"></div>

                <br />

                <Carousel
                  responsive={responsiveY}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={2000}
                  infinite={true}
                >
                  {this.state.videoss !== null ? (
                    this.state.videoss.map((item) => {
                      return (
                        <div className={stylev.videos_item}>
                          <YouTube
                            showCaptions={false}
                            showRelatedVideos={false}
                            opts={{
                              playerVars: {
                                rel: 0,
                              },
                            }}
                            video={
                              item.url.split("/")[
                                item.url.split("/").length - 1
                              ]
                            }
                            className={stylev.you}
                            // autoplay={true}
                            muted={true}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <div></div>
                  )}
                </Carousel>
              </div>

              <br />
              <h1 className={style.sarlavha}> Bizning hamkorlarimiz</h1>
              <div className={style.chiziq}></div>
              <br />

              <div
                className="sliderHomiy"
                style={{ width: "100%", backgroundColor: "white" }}
              >
                <Carousel
                  responsive={responsive5}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={2000}
                  infinite={true}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className="toolpat"
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://president.uz/oz" target="_blank">
                        <img src={school} />
                      </a>
                    </div>
                    <p>
                      O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className="toolpat"
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://www.gov.uz/uz" target="_blank">
                        <img src={her2} />
                      </a>
                    </div>
                    <p>O'zbekiston Respublikasining Hukumat portali</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className="toolpat"
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://lex.uz/" target="_blank">
                        <img src={her3} />
                      </a>
                    </div>
                    <p>
                      O'zbekiston Respublikasi qonun hujjatlari milliy bazasi
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className="toolpat"
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://my.gov.uz/oz" target="_blank">
                        <img src={her4} />
                      </a>
                    </div>
                    <p>Interaktiv davlat xizmatlarining Yagona portali</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className="toolpat"
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://www.uzedu.uz/" target="_blank">
                        <img src={her5} />
                      </a>
                    </div>
                    <p>O'zbekiston Respublikasi xalq ta'limi vazirligi</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className="toolpat"
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://ittower.uz/" target="_blank">
                        <img src={her6} />
                      </a>
                    </div>
                    <p>IT Tower firmasi </p>
                  </div>
                </Carousel>
              </div>
              <div id="bog'lanish"></div>
              <Container>
                <div className={style.xarita}>
                  <Row>
                    <Col lg={6} md={12} sm={12}>
                      <h1 className={style.sarlavha}>Bizning manzilimiz</h1>
                      <br />

                      <YMaps>
                        <div className={style.xarita_item}>
                          <Map
                            style={{ width: "100%", height: "550px" }}
                            defaultState={{
                              center: [41.318973, 69.30347],
                              zoom: 12,
                            }}
                          >
                            <Clusterer
                              options={{
                                groupByCoordinates: false,
                              }}
                            >
                              <Placemark
                                key={-1}
                                geometry={[41.318973, 69.30347]}
                                options={{
                                  iconLayout: "default#image",
                                }}
                                properties={{
                                  hintContent: `<i><b className="personStyle">Namangan viloyati VXTB</b></i>`,
                                }}
                                modules={["geoObject.addon.hint"]}
                              />
                            </Clusterer>
                          </Map>
                        </div>
                      </YMaps>
                    </Col>

                    <Col lg={6} md={12} sm={12}>
                      <h1 className={style.sarlavha}>Biz bilan bo'glaning</h1>

                      <div className="formFER">
                        <div className="container">
                          <div className="brand-logo"></div>
                          <div className="inputs">
                            <form>
                              <label>F.I.O.</label>
                              <input
                                type="text"
                                id="name"
                                placeholder="Ism Familiya Sharifi"
                              />
                              <label>Telefon raqam</label>
                              <input
                                type="text"
                                id="phone"
                                placeholder="+998 99 999 99 99"
                              />
                              <label>Murojaat</label>
                              <textarea
                                id="text"
                                placeholder="Murojaat matni..."
                              ></textarea>
                              <button type="button" onClick={this.sendMurojat}>
                                Yuborish
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
          </>
          <Footer />
        </div>
      </div>
    );
  }
}
