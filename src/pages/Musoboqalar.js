import React, { Component } from "react";
import { message, Collapse } from "antd";

import style from "../css/Yangiliklar.module.css";
import styled from "../css/Musoboqalar.module.css";
import styles from "../css/Yangiliklartwo.module.css";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

import word from "../img/kurash4.jpg";
import excel from "../img/kurash4.jpg";
import power from "../img/kurash4.jpg";
import pdf from "../img/kurash4.jpg";
import file from "../img/kurash4.jpg";
import kurash6 from "../img/kurash6.jpg";
import Header from "./Header";

import Footer from "./Footer";

const { Panel } = Collapse;

export default class Musoboqalar extends Component {
  state = {
    loader: true,
    news: null,
    school: null,
    tumanlar: null,
    showComment: false,
    showCommentT: false,
    raqam: "0",
    comments: [],
    id: null,
  };

  handleClose = () => {
    this.setState({
      showComment: false,
    });
  };
  openModal = () => {
    this.setState({
      showComment: true,
    });
  };
  handleCloseT = () => {
    this.setState({
      showCommentT: false,
    });
  };
  openModalT = () => {
    this.setState({
      showCommentT: true,
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="loyiha">
          <div className={style.binaf}></div>
          <div className={styles.newsY}>
            <h1 className={style.sarlavha}>
              Etnosportni 2022 yilda rivojlantirish dasturi
            </h1>
            <br />
            <br />
            <Collapse accordion defaultActiveKey={1}>
              <Panel className={styled.panel} header={"Etnosport haqida"}>
                <div>
                  <Container>
                    <Row>
                      <Col
                        lg={6}
                        md={12}
                        className={styled.colT}
                        style={{ marginTop: "20px" }}
                        sm={12}
                      >
                        <div className={styled.ss}>
                          <div
                            className={styled.bag1}
                            onClick={() => {
                              this.openModal();
                            }}
                          >
                            <i className="fa fa-comments"></i> 0
                          </div>
                          <div className={styled.bag}>
                            <i className="fa fa-download"></i> Download
                          </div>
                          <Row>
                            <Col lg={3}>
                              <img src={kurash6} />
                            </Col>
                            <Col
                              lg={9}
                              style={{
                                display: "flex",
                                position: "relative",
                                justifyContent: "center",
                                flexDirection: "column",
                              }}
                            >
                              <h1 style={{ textAlign: "left" }}>Jamshid</h1>
                            </Col>
                          </Row>
                          <br />

                          <div className={styled.butlar}>
                            <buttun
                              onClick={() => {
                                this.openModalT();
                              }}
                              className={styled.but1}
                            >
                              Izoh qoldirish
                            </buttun>

                            <a
                              className={styled.but}
                              onClick={() => {
                                this.download();
                              }}
                              href="#"
                              target="_blank"
                            >
                              Yuklab olish
                            </a>
                          </div>
                        </div>
                      </Col>
                      <h1 className={styled.HT}>
                        <i className="fa fa-folder-open"></i> Loyiha mavjud
                        emas!!!
                      </h1>
                    </Row>
                  </Container>
                </div>
              </Panel>

              <Panel className={styled.panel} header={"Jamshid"}>
                <div>
                  <Container>
                    <Row>
                      <Col
                        lg={6}
                        md={12}
                        className={styled.colT}
                        style={{ marginTop: "20px" }}
                        sm={12}
                      >
                        <div className={styled.ss}>
                          <div
                            className={styled.bag1}
                            onClick={() => {
                              this.openModal();
                            }}
                          >
                            <i className="fa fa-comments"></i>0
                          </div>

                          <div className={styled.bag}>
                            <i className="fa fa-download"></i> Download2
                          </div>
                          <Row>
                            <Col lg={3}>
                              <img src={kurash6} />
                            </Col>
                            <Col
                              lg={9}
                              style={{
                                display: "flex",
                                position: "relative",
                                justifyContent: "center",
                                flexDirection: "column",
                              }}
                            >
                              <h1 style={{ textAlign: "left" }}>Jamshid</h1>
                            </Col>
                          </Row>
                          <br />

                          <div className={styled.butlar}>
                            <buttun
                              onClick={() => {
                                this.openModalT();
                              }}
                              className={styled.but1}
                            >
                              Izoh qoldirish
                            </buttun>

                            <a
                              className={styled.but}
                              onClick={() => {
                                this.download();
                              }}
                              href={"#"}
                              target="_blank"
                            >
                              Yuklab olish
                            </a>
                          </div>
                        </div>
                      </Col>
                      <h1 className={styled.HT}>
                        <i className="fa fa-folder-open"></i> Loyiha mavjud
                        emas!!!
                      </h1>
                    </Row>
                  </Container>
                </div>
              </Panel>
            </Collapse>
          </div>
          <Modal style={{ zIndex: "4789" }} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className={style.sarlavha}>
                Foydalanuvchilarning fikrlari
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="comments">
                <div className="comment mt-4 text-justify float-left">
                  <img
                    src="https://i.imgur.com/yTFUilP.jpg"
                    alt=""
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <h4>Jamashid</h4> <br />
                  <span>19.08.2001</span> <br />
                  <p>Gaday reshala</p>
                </div>
                <h6 style={{ textAlign: "center" }}>Izoh mavjud emas!!!</h6>
              </div>
            </Modal.Body>
          </Modal>
          <Modal style={{ zIndex: "4789" }} onHide={this.handleCloseT}>
            <Modal.Header closeButton>
              <Modal.Title className={style.sarlavha}>
                Fikringiz biz uchun muhim
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="comments">
                <form id="algin-form">
                  <div className="form-group">
                    <label for="message">Izohni yozing</label>{" "}
                    <textarea
                      name="msg"
                      id="comment"
                      msg
                      cols="30"
                      rows="5"
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    {" "}
                    <label for="name">Ism familiyani yozing</label>{" "}
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                    />{" "}
                  </div>
                  <div className="form-group">
                    {" "}
                    <label for="email">Emailni yozing</label>{" "}
                    <input
                      required
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                    />{" "}
                  </div>
                  <div className="form-group">
                    {" "}
                    <button type="button" id="post" className="btn">
                      Yuborish
                    </button>{" "}
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <Footer />
      </>
    );
  }
}
