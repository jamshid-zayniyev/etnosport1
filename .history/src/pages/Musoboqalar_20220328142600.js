import React, { Component } from "react";
import { message, Collapse } from "antd";

import style from "../css/Yangiliklar.module.css";
import styled from "../css/Musoboqalar.module.css";
import styles from "../css/Yangiliklartwo.module.css";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

import school from "../img/gerb.png";
import Header from "./Header";
import etnosport7 from "../img/etnoimg7.jpg";
import Footer from "./Footer";
import axios from "axios";
import { url } from "../host/Host";

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
    comments: null,
    id: null,

  };
  getComment=(id)=>{
    this.setState({
      loader:true
    })
    axios.get(`${url}/competitions/${id}`).then(res1=>{
      this.setState({
        comments:res1.data,  
        loader: false,
        showComment: true,
        })
       
    })
  }
  componentDidMount() {
    axios.get(`${url}/competitions/`).then(res=>{
      this.setState({
        news:res.data  
        })
        setTimeout(() => {
          this.setState({
           
          });
        }, 1000);
       
    })
    
  }
setComment=()=>{
  axios.post(`${url}/comments/`, )
}
  handleClose = () => {
    this.setState({
      showComment: false,
    });
  };
 

  handleCloseT = () => {
    this.setState({
      showCommentT: false,
    
    });
  };
  openModalT = (id) => {
    this.setState({
      showCommentT: true,
      id: id,
    });
  };

  render() {
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
        <div className={styled.head}>
          <img src={etnosport7} />
          <div className={styled.headsarlavha}>
            Etnosport bo'yicha o'tqaziladigan musobaqalar
          </div>
        </div>
        <div className="loyiha">
          <div className={styles.newsY}>
            <Collapse accordion defaultActiveKey={1}>
              {this.state.news!==null?this.state.news.map(item=>{
                return(
                  <Panel
                  className={styled.panel}
                  header={
                    item.name
                  }
                >
                  <div>
                    <Container>
                      <Row>
                        <Col
                          lg={12}
                          md={12}
                          className={styled.colT}
                          style={{ marginTop: "20px" }}
                          sm={12}
                        >
                          <div className={styled.ss}>
                            <div
                              className={styled.bag1}
                              onClick={() => {
                                this.getComment(item.id);
                              }}
                            >
                              <i className="fa fa-comments"></i> 3
                            </div>
                            <div className={styled.bag}>
                              <i className="fa fa-download"></i> 25
                            </div>
                            <Row>
                              <Col lg={3}>
                                <img src={item.image} />
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
                                <p style={{ padding: "20px", fontSize: "18px" }}>
                                  Belbog'li kurash bo'yicha Qashqadaryo viloyati
                                  Mborak tumani katta xalqaro turnir o'tqaziladi.
                                  Bu turnirda 25 ta davlat dan belbog'li kurash
                                  bo'yicha ko'plab naijalarga errishgan
                                  sportchilar tashrif buyuradi.
                                </p>
                              </Col>
                            </Row>
                            <br />
  
                            <div className={styled.butlar}>
                              <buttun
                                onClick={() => {
                                  this.openModalT(item.id);
                                }}
                                className={styled.but1}
                              >
                                Izoh qoldirish
                              </buttun>
  
                              <a className={styled.but} href={item.pdf} target="_blank">
                                Yuklab olish
                              </a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Panel>
             
                )
              })
              
              :''}
              </Collapse>
          </div>
          <Modal
            style={{ zIndex: "4789" }}
            show={this.state.showComment}
            onHide={this.handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title style={{fontSize:'25px'}} className={style.sarlavha}>
                Foydalanuvchilarning fikrlari
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="comments">
                {this.state.comments!==null?this.state.comments.get_comments.map(item=>{
                  return(<div className="comment mt-4 text-justify float-left">
                  <img
                    src="https://i.imgur.com/yTFUilP.jpg"
                    alt=""
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <h4>{item.name}</h4> <br />
                  <span>{item.date_created.slice(0, 10)} yil</span> <br />
                  <p>{item.comment}</p>
                </div>)
                }):''}
                
               
              </div>
            </Modal.Body>
          </Modal>
          <Modal
            style={{ zIndex: "4789" }}
            show={this.state.showCommentT}
            onHide={this.handleCloseT}
          >
            <Modal.Header closeButton>
              <Modal.Title style={{fontSize:'25px'}} className={style.sarlavha}>
                Fikringiz biz uchun muhim
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="comments">
                <form id="algin-form">
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
                  </div><br/>
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
                    <button type="button" onClick={this.setComment()} id="post" className="btn">
                      Yuborish
                    </button>{" "}
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <Footer />
      </div>
    );
  }
}
