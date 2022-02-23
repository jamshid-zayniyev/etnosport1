import React, { Component } from "react";
import "./assets/css/bootstrap-theme.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/instagram.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/plugins.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import logo from "./assets/images/logo.png"
import stab1 from "./assets/images/stab1.png"
import featureslid1 from "./assets/images/featureslid1.jpg"
import play from "./assets/images/play.png"
import abright from "./assets/images/abright.png"
import team1 from "./assets/images/team1.jpg"
import team2 from "./assets/images/team2.jpg"
import team3 from "./assets/images/team3.jpg"
import team4 from "./assets/images/team4.jpg"
import choose from "./assets/images/choose.png"
import pf1 from "./assets/images/pf1.jpg"
import pf2 from "./assets/images/pf2.jpg"
import pf3 from "./assets/images/pf3.jpg"
import pf4 from "./assets/images/pf4.jpg"
import pf8 from "./assets/images/pf8.jpg"
import pf9 from "./assets/images/pf9.jpg"
import pf5 from "./assets/images/pf5.jpg"
import pf6 from "./assets/images/pf6.jpg"
import pf7 from "./assets/images/pf7.jpg"

import clogo1 from "./assets/images/clogo1.png"
import clogo2 from "./assets/images/clogo2.png"
import clogo3 from "./assets/images/clogo3.png"
import clogo4 from "./assets/images/clogo4.png"
import clogo5 from "./assets/images/clogo5.png"
import clogo9 from "./assets/images/clogo9.png"
export default class App extends Component {
  render() {
    return (
      <>
      <div className="body">
        {/* <!--[if lt IE 8]> */}
       
        {/* <![endif]--> */}
        {/* <div className="preloader">
          <div className="loaded">&nbsp;</div>
        </div> */}

        <div className="culmn">
          <header id="main_menu" className="header navbar-fixed-top">
            <div className="main_menu_bg">
              <div className="container">
                <div className="row">
                  <div className="nave_menu">
                    <nav className="navbar navbar-default">
                      <div className="container-fluid">
                        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                        <div className="navbar-header">
                          <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false"
                          >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="#home">
                            <img src={logo} />
                          </a>
                        </div>

                        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}

                        <div
                          className="collapse navbar-collapse"
                          id="bs-example-navbar-collapse-1"
                        >
                          <ul className="nav navbar-nav navbar-right">
                            <li>
                              <a href="#home">HOME</a>
                            </li>
                            <li>
                              <a href="#service">Service</a>
                            </li>
                            <li>
                              <a href="#team">TEAMS</a>
                            </li>
                            <li>
                              <a href="#portfolio">WORKS</a>
                            </li>
                            <li>
                              <a href="#testimonial">Testimonial</a>
                            </li>
                            <li>
                              <a href="#contact">CONTACT</a>
                            </li>

                            <li>
                              <a
                                href="#"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="glyphicon glyphicon-search"></span>
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <form className="navbar-form" role="search">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                      />
                                    </div>
                                  </form>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* <!--End of header --> */}

          <section id="home" className="home">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 ">
                    <div className="main_home_slider text-center">
                      <div className="single_home_slider">
                        <div
                          className="main_home wow fadeInUp"
                          data-wow-duration="700ms"
                        >
                          <h1>WELCOME TO OUR LOGIC</h1>
                          <p>We Make Awesome Theme For Your Business</p>
                          <div className="home_btn">
                            <a
                              href="https://bootstrapthemes.co"
                              className="btn btn-primary"
                            >
                              LEARN MORE
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="single_home_slider">
                        <div
                          className="main_home wow fadeInUp"
                          data-wow-duration="700ms"
                        >
                          <h1>WELCOME TO OUR LOGIC</h1>
                          <p>We Make Awesome Theme For Your Business</p>
                          <div className="home_btn">
                            <a
                              href="https://bootstrapthemes.co"
                              className="btn btn-primary"
                            >
                              LEARN MORE
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="single_home_slider">
                        <div
                          className="main_home wow fadeInUp"
                          data-wow-duration="700ms"
                        >
                          <h1>WELCOME TO OUR LOGIC</h1>
                          <p>We Make Awesome Theme For Your Business</p>
                          <div className="home_btn">
                            <a
                              href="https://bootstrapthemes.co"
                              className="btn btn-primary"
                            >
                              LEARN MORE
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="service" className="service">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="main_service_area">
                    <div className="main_service_content">
                      <div className="service_tabe">
                        {/* <!-- Nav tabs --> */}
                        <ul
                          className="service_tabe_menu nav nav-tabs"
                          role="tablist"
                        >
                          <li role="presentation" className="active">
                            <a
                              href="#webdesign"
                              aria-controls="webdesign"
                              role="tab"
                              data-toggle="tab"
                            >
                              <i className="fa fa-map-marker"></i> <br />
                              WEB DESIGN
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#appdesign"
                              aria-controls="appdesign"
                              role="tab"
                              data-toggle="tab"
                            >
                              <i className="fa fa-map-marker"></i> <br />
                              APP DESIGN
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#graphicdesign"
                              aria-controls="graphicdesign"
                              role="tab"
                              data-toggle="tab"
                            >
                              <i className="fa fa-map-marker"></i> <br />
                              GRAPHIC DESIGN
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#gamedesign"
                              aria-controls="gamedesign"
                              role="tab"
                              data-toggle="tab"
                            >
                              <i className="fa fa-map-marker"></i> <br />
                              GAME DESIGN
                            </a>
                          </li>
                        </ul>

                        {/* <!-- Tab panes --> */}
                        <div className="tab-content">
                          <div
                            role="tabpanel"
                            className="tab-pane active"
                            id="webdesign"
                          >
                            <div className="single_service_tab">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="single_tab_content">
                                    <div className="head_title">
                                      <h3>WEB DESIGN One</h3>
                                      <div className="separator"></div>
                                    </div>
                                    <p>
                                      It is a long established fact that a
                                      reader will be distracted by the readable
                                      content of a page when looking at its
                                      layout. The point of using Lorem Ipsum is
                                      that it has a more-or-less normal
                                      distribution of letters, as opposed to
                                      using 'Content here, content here', making
                                      it look like readable English. Many
                                      desktop publishing packages and web page
                                      editors now use Lorem Ipsum as their
                                      default model text, and a search for
                                      'lorem ipsum'{" "}
                                    </p>

                                    <a href="" className="btn btn-primary">
                                      LEARN MORE
                                    </a>
                                  </div>
                                </div>

                                <div className="col-sm-6">
                                  <div className="single_tab_img">
                                    <img src={stab1} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            role="tabpanel"
                            className="tab-pane"
                            id="appdesign"
                          >
                            <div className="single_service_tab">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="single_tab_content">
                                    <div className="head_title">
                                      <h3>WEB DESIGN Two</h3>
                                      <div className="separator"></div>
                                    </div>
                                    <p>
                                      It is a long established fact that a
                                      reader will be distracted by the readable
                                      content of a page when looking at its
                                      layout. The point of using Lorem Ipsum is
                                      that it has a more-or-less normal
                                      distribution of letters, as opposed to
                                      using 'Content here, content here', making
                                      it look like readable English. Many
                                      desktop publishing packages and web page
                                      editors now use Lorem Ipsum as their
                                      default model text, and a search for
                                      'lorem ipsum'{" "}
                                    </p>

                                    <a href="" className="btn btn-primary">
                                      LEARN MORE
                                    </a>
                                  </div>
                                </div>

                                <div className="col-sm-6">
                                  <div className="single_tab_img">
                                    <img src={featureslid1}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            role="tabpanel"
                            className="tab-pane"
                            id="graphicdesign"
                          >
                            <div className="single_service_tab">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="single_tab_content">
                                    <div className="head_title">
                                      <h3>WEB DESIGN Three</h3>
                                      <div className="separator"></div>
                                    </div>
                                    <p>
                                      It is a long established fact that a
                                      reader will be distracted by the readable
                                      content of a page when looking at its
                                      layout. The point of using Lorem Ipsum is
                                      that it has a more-or-less normal
                                      distribution of letters, as opposed to
                                      using 'Content here, content here', making
                                      it look like readable English. Many
                                      desktop publishing packages and web page
                                      editors now use Lorem Ipsum as their
                                      default model text, and a search for
                                      'lorem ipsum'{" "}
                                    </p>

                                    <a href="" className="btn btn-primary">
                                      LEARN MORE
                                    </a>
                                  </div>
                                </div>

                                <div className="col-sm-6">
                                  <div className="single_tab_img">
                                    <img src={stab1} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            role="tabpanel"
                            className="tab-pane"
                            id="gamedesign"
                          >
                            <div className="single_service_tab">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="single_tab_content">
                                    <div className="head_title">
                                      <h3>WEB DESIGN Four</h3>
                                      <div className="separator"></div>
                                    </div>
                                    <p>
                                      It is a long established fact that a
                                      reader will be distracted by the readable
                                      content of a page when looking at its
                                      layout. The point of using Lorem Ipsum is
                                      that it has a more-or-less normal
                                      distribution of letters, as opposed to
                                      using 'Content here, content here', making
                                      it look like readable English. Many
                                      desktop publishing packages and web page
                                      editors now use Lorem Ipsum as their
                                      default model text, and a search for
                                      'lorem ipsum'{" "}
                                    </p>

                                    <a href="" className="btn btn-primary">
                                      LEARN MORE
                                    </a>
                                  </div>
                                </div>

                                <div className="col-sm-6">
                                  <div className="single_tab_img">
                                    <img src={featureslid1}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/* <!--                                                        <div id="pentagon"></div>--> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="features">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="main_features_area sections">
                    <div className="head_title">
                      <h3>FEATURED WORK</h3>
                      <div className="separator"></div>
                    </div>
                    <div className="row">
                      <div className="main_features_content">
                        <div className="col-sm-6">
                          <div className="single_features_slide">
                            <div className="single_ft_s_item">
                              <img
                                src="assets/images/featureslid1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="single_ft_s_item">
                              <img
                                src="assets/images/featureslid1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="single_ft_s_item">
                              <img
                                src="assets/images/featureslid1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="single_features_text">
                            <h4>HAND WITH A WATCH</h4>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled{" "}
                            </p>

                            <ul>
                              <li>
                                <span>Client:</span> Dadit Lorm
                              </li>
                              <li>
                                <span>Deivered:</span> Sunday, 15 August, 2015
                              </li>
                              <li>
                                <span>Tags:</span> Hand, Watch, Black, Tree
                              </li>
                            </ul>

                            <a href="" className="btn">
                              LAUNCH NOW
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="video"
            className="video text-center wow fadeIn"
            data-wow-duration="2s"
            data-wow-dealy="1.5s"
          >
            <div className="video_overlay">
              <div className="container">
                <div className="row">
                  <div className="main_video">
                    <div className="col-sm-12">
                      <div className="icon">
                        <a
                          href="https://www.youtube.com/embed/_l6CQRHIGyg"
                          className="youtube-media"
                        >
                          <img src={play} alt="play-icon" />
                        </a>
                        <h3>WATCH OUR INTRO</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="about">
            <div className="container">
              <div className="row">
                <div className="main_about_area sections">
                  <div className="col-sm-12">
                    <div className="main_about_content">
                      <div className="row">
                        <div
                          className="col-sm-7 wow fadeInRight"
                          data-wow-duration="700ms"
                        >
                          <div className="single_about_right_content">
                            <div className="head_title">
                              <h3>ABOUT LOGIC</h3>
                              <div className="separator"></div>
                            </div>

                            <div className="single_about">
                              <div className="single_ab_icon">
                                <div className="ab_border_right"></div>
                                <i className="fa fa-coffee"></i>
                              </div>
                              <div className="single_ab_text">
                                <h3>RESPONSIVE DESIGN</h3>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                </p>
                              </div>
                            </div>
                            <div className="single_about">
                              <div className="single_ab_icon">
                                <i className="fa fa-paint-brush"></i>
                              </div>
                              <div className="single_ab_text">
                                <h3>EASY TO CUSTOMIZE</h3>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                </p>
                              </div>
                            </div>
                            <div className="single_about">
                              <div className="single_ab_icon">
                                <i className="fa fa-headphones"></i>
                              </div>
                              <div className="single_ab_text">
                                <h3>LIFE TIME SUPPORT</h3>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-5">
                          <div
                            className="single_about_left_img margin-top-40 text-center wow fadeInLeft"
                            data-wow-duration=".6s"
                          >
                            <img src={abright} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="about_skill_area">
                          <div className="col-sm-6">
                            <div className="about_tabe">
                              {/* <!-- Nav tabs --> */}
                              <ul className="about_tabe_menu" role="tablist">
                                <li role="presentation" className="active">
                                  <a
                                    href="#mission"
                                    aria-controls="mission"
                                    role="tab"
                                    data-toggle="tab"
                                  >
                                    OUR MISSION
                                  </a>
                                </li>
                                <li role="presentation">
                                  <a
                                    href="#goal"
                                    aria-controls="goal"
                                    role="tab"
                                    data-toggle="tab"
                                  >
                                    OUR GOAL
                                  </a>
                                </li>
                                <li role="presentation">
                                  <a
                                    href="#achivements"
                                    aria-controls="achivements"
                                    role="tab"
                                    data-toggle="tab"
                                  >
                                    ACHIVEMENTS
                                  </a>
                                </li>
                              </ul>

                              {/* <!-- Tab panes --> */}
                              <div className="tab-content">
                                <div
                                  role="tabpanel"
                                  className="tab-pane active"
                                  id="mission"
                                >
                                  <div className="single_about_tab">
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an
                                      unknown printer took a galley type a
                                      scrambled it to make a type specimen book.
                                      It has survived not only five centuries,
                                    </p>

                                    <div className="row">
                                      <div className="col-sm-6">
                                        <ul className="single_ab_mision">
                                          <li>
                                            <i className="fa fa-check-square"></i>{" "}
                                            We just want to love our client
                                          </li>
                                          <li>
                                            <i className="fa fa-check-square"></i>{" "}
                                            We just want to love our client
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-sm-6">
                                        <ul className="single_ab_mision">
                                          <li>
                                            <i className="fa fa-check-square"></i>{" "}
                                            We just want to love our client
                                          </li>
                                          <li>
                                            <i className="fa fa-check-square"></i>{" "}
                                            We just want to love our client
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  role="tabpanel"
                                  className="tab-pane"
                                  id="goal"
                                >
                                  <div className="single_about_tab">
                                    <p>
                                      222Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an
                                      unknown printer took a galley type a
                                      scrambled it to make a type specimen book.
                                      It has survived not only five centuries,
                                    </p>

                                    <div className="row">
                                      <div className="col-sm-6">
                                        <ul className="single_ab_mision">
                                          <li>
                                            <i className="fa fa-check-square"></i>{" "}
                                            We just want to love our client
                                          </li>
                                          <li>
                                            <i className="fa fa-check-square"></i>{" "}
                                            We just want to love our client
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-sm-6">
                                        <ul className="single_ab_mision">
                                          <li>
                                            <i className="fa fa-check-square"></i>{" "}
                                            We just want to love our client
                                          </li>
                                          <li>
                                            <i className="fa fa-check-square"></i>{" "}
                                            We just want to love our client
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  role="tabpanel"
                                  className="tab-pane"
                                  id="achivements"
                                >
                                  <div className="single_about_tab">
                                    <p>
                                      333Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an
                                      unknown printer took a galley type a
                                      scrambled it to make a type specimen book.
                                      It has survived not only five centuries,
                                    </p>

                                    <div className="row">
                                      <div className="col-sm-6">
                                        <ul className="single_ab_mision">
                                          <li>
                                            <i className="fa fa-check-square"></i>{" "}
                                            We just want to love our client
                                          </li>
                                          <li>
                                            <i className="fa fa-check-square"></i>{" "}
                                            We just want to love our client
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-sm-6">
                                        <ul className="single_ab_mision">
                                          <li>
                                            <i className="fa fa-check-square"></i>{" "}
                                            We just want to love our client
                                          </li>
                                          <li>
                                            <i className="fa fa-check-square"></i>{" "}
                                            We just want to love our client
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="about_skill">
                              <div className="skillbar" data-percent="79%">
                                <div className="skillbar-title">
                                  <h3 className="blue">PHOTOSHOP</h3>
                                  <span className="sm-text">79%</span>
                                </div>
                                <div className="skillbar-bar blue"></div>
                              </div>

                              <div className="skillbar" data-percent="90%">
                                <div className="skillbar-title">
                                  <h3 className="blue">HTML/CSS</h3>
                                  <span className="sm-text">90%</span>
                                </div>
                                <div className="skillbar-bar blue"></div>
                              </div>

                              <div className="skillbar" data-percent="69%">
                                <div className="skillbar-title">
                                  <h3 className="blue">JAVASCRIPT</h3>
                                  <span className="sm-text">69%</span>
                                </div>
                                <div className="skillbar-bar blue"></div>
                              </div>

                              <div className="skillbar" data-percent="92%">
                                <div className="skillbar-title">
                                  <h3 className="blue">WORDPRESS</h3>
                                  <span className="sm-text">92%</span>
                                </div>
                                <div className="skillbar-bar blue"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="counter" className="counter">
            <div className="video_overlay">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="main_counter_area text-center">
                      <div className="row">
                        <div className="single_counter border_right">
                          <div className="col-sm-3 col-xs-12">
                            <div className="single_counter_item">
                              <h2 className="statistic-counter">561</h2>
                              <i className="icon icon-thumbs-up"></i>
                              <p className="margin-top-20">CREATIVE DESIGN</p>
                            </div>
                          </div>
                        </div>

                        <div className="single_counter">
                          <div className="col-sm-3 col-xs-12">
                            <div className="single_counter_item">
                              <h2 className="statistic-counter">25</h2>
                              <i className="icon icon-business-3"></i>
                              <p className="margin-top-20">AWARDS WON</p>
                            </div>
                          </div>
                        </div>

                        <div className="single_counter">
                          <div className="col-sm-3 col-xs-12">
                            <div className="single_counter_item">
                              <h2 className="statistic-counter">236</h2>
                              <i className="icon icon-people-32"></i>
                              <p className="margin-top-20">HAPPY CLIENTS</p>
                            </div>
                          </div>
                        </div>

                        <div className="single_counter">
                          <div className="col-sm-3 col-xs-12">
                            <div className="single_counter_item">
                              <h2 className="statistic-counter">365</h2>
                              <i className="icon icon-cup"></i>
                              <p className="margin-top-20">CUP OF COFFEE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End of counter section --> */}

          <section id="othersservice" className="othersservice">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="main_othersservice_area sections">
                    <div className="row">
                      <div className="head_title">
                        <h3>OTHER SERVICES</h3>
                        <div className="separator"></div>
                      </div>

                      <div className="main_othersservice_content">
                        <div className="col-sm-4">
                          <div className="single_othersservice">
                            <div className="single_othersservice_icon">
                              <h4>
                                <span>
                                  <i className="fa fa-clock-o"></i>
                                </span>{" "}
                                CREATIVE DESIGN
                              </h4>
                            </div>
                            <div className="single_othersservice_content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="single_othersservice">
                            <div className="single_othersservice_icon">
                              <h4>
                                {" "}
                                <span>
                                  <i className="fa fa-picture-o"></i>
                                </span>{" "}
                                WEB DEVELOPMENT
                              </h4>
                            </div>
                            <div className="single_othersservice_content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="single_othersservice">
                            <div className="single_othersservice_icon">
                              <h4>
                                {" "}
                                <span>
                                  <i className="fa fa-television"></i>
                                </span>{" "}
                                VIDEO EDITING
                              </h4>
                            </div>
                            <div className="single_othersservice_content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-4">
                          <div className="single_othersservice">
                            <div className="single_othersservice_icon">
                              <h4>
                                {" "}
                                <span>
                                  <i className="fa fa-object-group"></i>
                                </span>{" "}
                                MARKETING
                              </h4>
                            </div>
                            <div className="single_othersservice_content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-4">
                          <div className="single_othersservice">
                            <div className="single_othersservice_icon">
                              <h4>
                                {" "}
                                <span>
                                  <i className="fa fa-object-group"></i>
                                </span>{" "}
                                PHOTOGRAPHY
                              </h4>
                            </div>
                            <div className="single_othersservice_content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-4">
                          <div className="single_othersservice">
                            <div className="s_ot_i_area">
                              <div className="single_othersservice_icon">
                                <h4>
                                  <span>
                                    <i className="fa fa-object-group"></i>
                                  </span>{" "}
                                  LOGO DESIGN
                                </h4>
                              </div>
                            </div>
                            <div className="single_othersservice_content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="team" className="team">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="main_team sections">
                    <div className="row">
                      <div className="head_title">
                        <h3>OTHER SERVICES</h3>
                        <div className="separator"></div>
                      </div>
                      <div className="col-sm-3 col-xs-12">
                        <div className="single_team_content">
                          <div className="single_team_img">
                            <img src={team1} alt="" />
                          </div>
                          <div className="single_team_text_overlay">
                            <h4>SEMF UCUK</h4>
                            <p>FOUNDER</p>
                            <div className="team_overlay_socail">
                              <a href="">
                                <i className="fa fa-facebook"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-twitter"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-google-plus"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-pinterest-p"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-3 col-xs-12">
                        <div className="single_team_content">
                          <div className="single_team_img">
                            <img src={team2} alt="" />
                          </div>
                          <div className="single_team_text_overlay">
                            <h4>DIK ADALIN</h4>
                            <p>ENGINEERING</p>
                            <div className="team_overlay_socail">
                              <a href="">
                                <i className="fa fa-facebook"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-twitter"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-google-plus"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-pinterest-p"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-3 col-xs-12">
                        <div className="single_team_content">
                          <div className="single_team_img">
                            <img src={team3} alt="" />
                          </div>
                          <div className="single_team_text_overlay">
                            <h4>JENG KOL</h4>
                            <p>DESIGNER</p>
                            <div className="team_overlay_socail">
                              <a href="">
                                <i className="fa fa-facebook"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-twitter"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-google-plus"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-pinterest-p"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-3 col-xs-12">
                        <div className="single_team_content">
                          <div className="single_team_img">
                            <img src={team4} alt="" />
                          </div>
                          <div className="single_team_text_overlay">
                            <h4>PET ROMAK</h4>
                            <p>MARKETING</p>
                            <div className="team_overlay_socail">
                              <a href="">
                                <i className="fa fa-facebook"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-twitter"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-google-plus"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-pinterest-p"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End of col-sm-4 --> */}
                    </div>
                  </div>
                  {/* <!-- End of main team contant --> */}
                </div>
              </div>
              {/* <!-- End of row --> */}
            </div>
          </section>

          <section id="choose" className="choose">
            <div className="container">
              <div className="row">
                <div className="main_choose sections">
                  <div className="col-sm-6">
                    <div className="head_title">
                      <h3>WHY CHOOSE US</h3>
                      <div className="separator"></div>
                    </div>
                    <div className="single_choose">
                      <div className="single_choose_acording">
                        <div
                          className="panel-group"
                          id="accordion"
                          role="tablist"
                          aria-multiselectable="true"
                        >
                          <div className="panel panel-default">
                            <div
                              className="panel-heading"
                              role="tab"
                              id="headingOne"
                            >
                              <h4 className="panel-title">
                                <a
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseOne"
                                  aria-expanded="false"
                                  aria-controls="collapseOne"
                                  className="collapsed"
                                >
                                  <i className="fa fa-picture-o"></i> GREAT
                                  DESIGN
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseOne"
                              className="panel-collapse collapse in"
                              role="tabpanel"
                              aria-labelledby="headingOne"
                              aria-expanded="false"
                              style={{height: "auto"}}
                            >
                              <div className="panel-body">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div
                              className="panel-heading"
                              role="tab"
                              id="headingTwo"
                            >
                              <h4 className="panel-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  <i className="fa fa-map-signs"></i> RESPONSIVE
                                  DESIGN
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseTwo"
                              className="panel-collapse collapse"
                              role="tabpanel"
                              aria-labelledby="headingTwo"
                              aria-expanded="false"
                            >
                              <div className="panel-body">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div
                              className="panel-heading"
                              role="tab"
                              id="headingThree"
                            >
                              <h4 className="panel-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  <i className="fa fa-bullseye"></i> RATINA
                                  READY
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseThree"
                              className="panel-collapse collapse"
                              role="tabpanel"
                              aria-labelledby="headingThree"
                              aria-expanded="false"
                            >
                              <div className="panel-body">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div
                              className="panel-heading"
                              role="tab"
                              id="headingThree"
                            >
                              <h4 className="panel-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapsefour"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  <i className="fa fa-umbrella"></i>FREE GOOGLE
                                  FONT
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapsefour"
                              className="panel-collapse collapse"
                              role="tabpanel"
                              aria-labelledby="headingThree"
                              aria-expanded="false"
                            >
                              <div className="panel-body">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div
                              className="panel-heading"
                              role="tab"
                              id="headingThree"
                            >
                              <h4 className="panel-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapsefive"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  <i className="fa fa-subway"></i>1170 PX GRID
                                  BASE
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapsefive"
                              className="panel-collapse collapse"
                              role="tabpanel"
                              aria-labelledby="headingfive"
                              aria-expanded="false"
                            >
                              <div className="panel-body">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="single_choose">
                      <div className="single_choose_img">
                        <img src={choose} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="portfolio" className="portfolio lightbg">
            <div className="container">
              <div className="row">
                <div className="main_portfolio sections">
                  <div className="col-sm-4">
                    <div className="head_title">
                      <h3>LATEST PROJECT</h3>
                      <div className="separator"></div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-sm-offset-2">
                    <div id="filters" className="toolbar mb2 mt2">
                      <button
                        className="btn-md fil-cat filter active"
                        href=""
                        data-filter="all"
                      >
                        SHOW ALL
                      </button>
                      <button
                        className="btn-md fil-cat filter"
                        data-rel="web"
                        data-filter=".web"
                      >
                        PHOTOGRAPHY
                      </button>
                      <button
                        className="btn-md fil-cat filter"
                        data-rel="flyers"
                        data-filter=".flyers"
                      >
                        BRANDING
                      </button>
                      <button
                        className="btn-md fil-cat filter"
                        data-rel="bcards"
                        data-filter=".bcards"
                      >
                        GRAPHIC DESIGN
                      </button>
                      <div className="separator2"></div>
                    </div>
                  </div>

                  <div style={{clear:"both"}}></div>
                  <div id="portfoliowork">
                    <div className="single_portfolio tile scale-anm web grid-item-width2">
                      <img src={pf1} alt="" />
                      <div className="grid_item_overlay g_overlay_1">
                        <a
                          href="assets/images/pf1.jpg"
                          className="portfolio-img"
                        >
                          {" "}
                          <i className="fa fa-link"></i>
                        </a>
                        <a href="#">
                          {" "}
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                    <div className="single_portfolio tile scale-anm bcards">
                      <img src={pf2} alt="" />
                      <div className="grid_item_overlay">
                        <a
                          href="assets/images/pf2.jpg"
                          className="portfolio-img"
                        >
                          {" "}
                          <i className="fa fa-link"></i>
                        </a>
                        <a href="#">
                          {" "}
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                    <div className="single_portfolio tile scale-anm web ">
                      <img src={pf3} alt="" />
                      <div className="grid_item_overlay">
                        <a
                          href="assets/images/pf3.jpg"
                          className="portfolio-img"
                        >
                          {" "}
                          <i className="fa fa-link"></i>
                        </a>
                        <a href="#">
                          {" "}
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                    <div className="single_portfolio tile scale-anm web">
                      <img src={pf4} alt="" />
                      <div className="grid_item_overlay">
                        <a
                          href="assets/images/pf4.jpg"
                          className="portfolio-img"
                        >
                          {" "}
                          <i className="fa fa-link"></i>
                        </a>
                        <a href="#">
                          {" "}
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                    <div className="single_portfolio tile scale-anm bcards">
                      <img src={pf8} alt="" />
                      <div className="grid_item_overlay">
                        <a
                          href="assets/images/pf8.jpg"
                          className="portfolio-img"
                        >
                          {" "}
                          <i className="fa fa-link"></i>
                        </a>
                        <a href="#">
                          {" "}
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                    <div className="single_portfolio tile scale-anm web">
                      <img src={pf9} alt="" />
                      <div className="grid_item_overlay">
                        <a
                          href="assets/images/pf9.jpg"
                          className="portfolio-img"
                        >
                          <i className="fa fa-link"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                    <div className="single_portfolio tile scale-anm flyers">
                      <img src={pf5} alt="" />
                      <div className="grid_item_overlay g_overlay_2">
                        <a
                          href="assets/images/pf5.jpg"
                          className="portfolio-img"
                        >
                          {" "}
                          <i className="fa fa-link"></i>
                        </a>
                        <a href="#">
                          {" "}
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                    <div className="single_portfolio tile scale-anm flyers">
                      <img src={pf6} alt="" />
                      <div className="grid_item_overlay g_overlay_1">
                        <a
                          href="assets/images/pf6.jpg"
                          className="portfolio-img"
                        >
                          {" "}
                          <i className="fa fa-link"></i>
                        </a>
                        <a href="#">
                          {" "}
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>

                    <div className="single_portfolio tile scale-anm bcards">
                      <img src={pf7} alt="" />
                      <div className="grid_item_overlay">
                        <a
                          href="assets/images/pf7.jpg"
                          className="portfolio-img"
                        >
                          {" "}
                          <i className="fa fa-link"></i>
                        </a>
                        <a href="#">
                          {" "}
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                    <div className="single_portfolio tile scale-anm flyers">
                      <img src={pf6} alt="" />
                      <div className="grid_item_overlay g_overlay_1">
                        <a
                          href="assets/images/pf6.jpg"
                          className="portfolio-img"
                        >
                          {" "}
                          <i className="fa fa-link"></i>
                        </a>
                        <a href="#">
                          {" "}
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>

                    <div className="single_portfolio tile scale-anm bcards">
                      <img src={pf7} alt="" />
                      <div className="grid_item_overlay">
                        <a
                          href="assets/images/pf7.jpg"
                          className="portfolio-img"
                        >
                          {" "}
                          <i className="fa fa-link"></i>
                        </a>
                        <a href="#">
                          {" "}
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div style={{clear:"both"}}></div>
                </div>
              </div>
            </div>
          </section>

          {/* 

            <!--            <section id="portfolio" className="portfolio">
                            <div className="container">
                                <div className="row">
                                    <div className="main_portfolio sections">
                                        <div className="heading_filter_menu">
                                            <div className="col-sm-4">
                                                <div className="head_title">
                                                    <h3>LATEST PROJECT</h3>
                                                    <div className="separator"></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div id="filters" className="toolbar mb2 mt2">
                                                    <button className="btn fil-cat filter active" href=""  data-filter="all">All</button>
                                                    <button className="btn fil-cat filter" data-rel="web" data-filter=".web">Websites</button>
                                                    <button className="btn fil-cat filter" data-rel="flyers" data-filter=".flyers">Flyers</button> 
                                                    <button className="btn fil-cat filter" data-rel="bcards" data-filter=".bcards">Business Cards</button>
                                                </div> 
                                            </div>
                                        </div>
            
                                        <div className="main_portfolio_content text-center">
                                            <div className="grid">
                                                <div className="grid-item grid-item--width2">
                                                    <img src={pf1} alt="" />
                                                    <div className="grid_item_overlay all_overlay">
                                                        <a href="assets/images/pf1.jpg" className="portfolio-img"> <i className="fa fa-picture-o"></i></a>
                                                    </div>
                                                </div>
                                                <div className="grid-item ">
                                                    <img src={pf2} alt="" />
                                                    <div className="grid_item_overlay all_overlay">
                                                        <a href="assets/images/pf2.jpg" className="portfolio-img"> <i className="fa fa-picture-o"></i></a>
                                                    </div>
                                                </div>
                                                <div className="grid-item ">
                                                    <img src={pf3} alt="" />
                                                    <div className="grid_item_overlay">
                                                        <a href="assets/images/pf1.jpg" className="portfolio-img"> <i className="fa fa-picture-o"></i></a>
                                                    </div>
                                                </div>
                                                <div className="grid-item ">
                                                    <img src={pf4} alt="" />
                                                    <div className="grid_item_overlay">
                                                        <a href="assets/images/pf4.jpg" className="portfolio-img"> <i className="fa fa-picture-o"></i></a>
                                                    </div>
                                                </div>
                                                <div className="grid-item ">
                                                    <img src={pf5} alt="" />
                                                    <div className="grid_item_overlay">
                                                        <a href="assets/images/pf5.jpg" className="portfolio-img"> <i className="fa fa-picture-o"></i></a>
                                                    </div>
                                                </div>
                                                <div className="grid-item grid-item--width2">
                                                    <img src={pf6} alt="" />
                                                    <div className="grid_item_overlay">
                                                        <a href="assets/images/pf6.jpg" className="portfolio-img"> <i className="fa fa-picture-o"></i></a>
                                                    </div>
                                                </div>
                                                <div className="grid-item ">
                                                    <img src={pf7} alt="" />
                                                    <div className="grid_item_overlay">
                                                        <a href="assets/images/pf7.jpg" className="portfolio-img"> <i className="fa fa-picture-o"></i></a>
                                                    </div>
                                                </div>
                                                <div className="grid-item ">
                                                    <img src={pf8} alt="" />
                                                    <div className="grid_item_overlay">
                                                        <a href="assets/images/pf6.jpg" className="portfolio-img"> <i className="fa fa-picture-o"></i></a>
                                                    </div>
                                                </div>
                                                <div className="grid-item ">
                                                    <img src={pf9} alt="" />
                                                    <div className="grid_item_overlay">
                                                        <a href="assets/images/pf7.jpg" className="portfolio-img"> <i className="fa fa-picture-o"></i></a>
                                                    </div>
                                                </div>
            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>--> */}

          <section id="testimonial" className="testimonial">
            <div className="video_overlay">
              <div className="container">
                <div className="row">
                  <div className="main_testimonial sections text-center">
                    <div className="col-md-12" data-wow-delay="0.2s">
                      <div className="main_teastimonial_slider text-center">
                        <div className="single_testimonial">
                          <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                              <i className="fa fa-quote-left"></i>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text. All the Lorem ww
                              </p>
                              <div className="single_test_author">
                                <h4>
                                  JANE GALADRIEL <span> -- CEO TENGKUREP</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single_testimonial">
                          <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                              <i className="fa fa-quote-left"></i>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text. All the Lorem
                              </p>
                              <div className="single_test_author">
                                <h4>
                                  JANE GALADRIEL <span> -- CEO TENGKUREP</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single_testimonial">
                          <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                              <i className="fa fa-quote-left"></i>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text. All the Lorem
                              </p>
                              <div className="single_test_author">
                                <h4>
                                  JANE GALADRIEL <span> -- CEO TENGKUREP</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="clogo" className="clogo">
            <div className="container">
              <div className="row">
                <div className="main_clogo sections text-center">
                  <div className="col-sm-2 col-xs-6">
                    <a href="">
                      <img src={clogo1} alt="" />
                    </a>
                  </div>
                  <div className="col-sm-2 col-xs-6">
                    <a href="">
                      <img src={clogo2} alt="" />
                    </a>
                  </div>
                  <div className="col-sm-2 col-xs-6">
                    <a href="">
                      <img src={clogo3} alt="" />
                    </a>
                  </div>
                  <div className="col-sm-2 col-xs-6">
                    <a href="">
                      <img src={clogo4} alt="" />
                    </a>
                  </div>
                  <div className="col-sm-2 col-xs-6">
                    <a href="">
                      <img src={clogo5} alt="" />
                    </a>
                  </div>
                  <div className="col-sm-2 col-xs-6">
                    <a href="">
                      <img src={clogo9} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="contact">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="row">
                    <div className="contact_contant sections">
                      <div className="col-sm-6">
                        <div className="main_contact_info">
                          <div className="head_title">
                            <h3>CONTACT INFO</h3>
                            <div className="separator"></div>
                          </div>
                          <div className="row">
                            <div className="contact_info_content">
                              <div className="col-sm-12">
                                <div className="single_contact_info">
                                  <div className="single_info_icon">
                                    <i className="fa fa-home"></i>
                                  </div>
                                  <div className="single_info_text">
                                    <h3>VISIT US</h3>
                                    <p>
                                      20, 2 Elizabeth ST, Melbourne, Victoria
                                      3000
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="single_contact_info">
                                  <div className="single_info_icon">
                                    <i className="fa fa-envelope-o"></i>
                                  </div>
                                  <div className="single_info_text">
                                    <h3>MAIL US</h3>
                                    <p>support@yourmail.com</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="single_contact_info">
                                  <div className="single_info_icon">
                                    <i className="fa fa-mobile"></i>
                                  </div>
                                  <div className="single_info_text">
                                    <h3>CALL US</h3>
                                    <p>+(100) 123 4567 890</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="single_contact_info">
                                  <div className="single_info_icon">
                                    <i className="fa fa-clock-o"></i>
                                  </div>
                                  <div className="single_info_text">
                                    <h3>WORK HOUR</h3>
                                    <p>Mon - Sat: 08 Am - 17 Pm</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="head_title">
                          <h3>LEAVE MESSAGE</h3>
                          <div className="separator"></div>
                        </div>
                        <div className="single_contant_left">
                          <form action="#" id="formid">
                            {/* <!--<div className="col-lg-8 col-md-8 col-sm-10 col-lg-offset-2 col-md-offset-2 col-sm-offset-1">--> */}

                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="First Name"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Last Name"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    placeholder="Subject"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows="8"
                                placeholder="Message"
                              ></textarea>
                            </div>

                            <div className="">
                              <input
                                type="submit"
                                value="Submit"
                                className="btn btn-primary"
                              />
                            </div>
                            {/* <!--</div>-->  */}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End of contact section --> */}

          <section id="maps" className="maps">
            <div className="map-overlay">
              <div className="container-fluid">
                <div className="row">
                  <div className="main_maps text-center">
                    <div className="col-sm-12 no-padding">
                      <div className="map_canvas_icon">
                        <i className="fa fa-map-marker" onClick="showmap()"></i>
                        <h2 onClick="showmap()">FIND US ON GOOGLE MAP</h2>
                      </div>
                      <div id="map_canvas"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="footer" className="footer_widget">
            <div className="video_overlay">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="main_widget">
                        <div className="col-sm-3 col-xs-12">
                          <div
                            className="single_widget wow fadeIn"
                            data-wow-duration="800ms"
                          >
                            <div className="footer_logo">
                              <img src={logo} alt="" />
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.{" "}
                            </p>
                          </div>
                        </div>

                        <div className="col-sm-3  col-xs-12">
                          <div
                            className="single_widget wow fadeIn"
                            data-wow-duration="800ms"
                          >
                            <div className="footer_title">
                              <h4>SITEMAP</h4>
                              <div className="separator"></div>
                            </div>
                            <ul>
                              <li>
                                <a href="">Services</a>
                              </li>
                              <li>
                                <a href="">About Us</a>
                              </li>
                              <li>
                                <a href="">Our Team</a>
                              </li>
                              <li>
                                <a href="">Portfolio</a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-sm-3  col-xs-12">
                          <div
                            className="single_widget wow fadeIn"
                            data-wow-duration="800ms"
                          >
                            <div className="footer_title">
                              <h4>ACHIVES</h4>
                              <div className="separator"></div>
                            </div>
                            <ul>
                              <li>
                                <a href="">January 2015</a>
                              </li>
                              <li>
                                <a href="">February 2015</a>
                              </li>
                              <li>
                                <a href="">March 2015</a>
                              </li>
                              <li>
                                <a href="">April 2015</a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-sm-3 col-xs-12">
                          <div
                            className="single_widget wow fadeIn"
                            data-wow-duration="800ms"
                          >
                            <div className="footer_title">
                              <h4>NEWSLETTER</h4>
                              <div className="separator"></div>
                            </div>

                            <div className="footer_subcribs_area">
                              <p>
                                Sign up for our mailing list to get latest
                                updates and offers.
                              </p>
                              <form
                                className="navbar-form navbar-left"
                                role="search"
                              >
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                  />
                                  <button
                                    type="submit"
                                    className="submit_btn"
                                  ></button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="main_footer">
                    <div className="row">
                      <div className="col-sm-6 col-xs-12">
                        <div className="copyright_text">
                          <p
                            className=" wow fadeInRight"
                            data-wow-duration="1s"
                          >
                            Made with <i className="fa fa-heart"></i> by{" "}
                            <a href="https://bootstrapthemes.co">
                              Bootstrap Themes
                            </a>
                            2016. All Rights Reserved
                          </p>
                        </div>
                      </div>

                      <div className="col-sm-6 col-xs-12">
                        <div className="flowus">
                          <a href="">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="">
                            <i className="fa fa-google-plus"></i>
                          </a>
                          <a href="">
                            <i className="fa fa-instagram"></i>
                          </a>
                          <a href="">
                            <i className="fa fa-youtube"></i>
                          </a>
                          <a href="">
                            <i className="fa fa-dribbble"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <!-- START SCROLL TO TOP  --> */}

        <div className="scrollup">
          <a href="#">
            <i className="fa fa-chevron-up"></i>
          </a>
        </div>

       
      </div>
      </>
    );
  }
}