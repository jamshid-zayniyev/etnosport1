import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import style from '../css/Dashboard.module.css'
import { Col, Row, Container } from 'react-bootstrap'
import head from '../img/head.jpg'
import head1 from '../img/head1.jpg'
import head2 from '../img/head2.jpg'
import head3 from '../img/head3.jpg'
import head5 from '../img/head5.jpg'
import school from "../img/gerb.png";
import her2 from "../img/h2.jpg";
import her3 from "../img/h3.jpg";
import { Clusterer, Map, Placemark, YMaps } from "react-yandex-maps";
import "./form.css"
import her4 from "../img/h4.jpg";
import rishod from '../img/rishod.jpg'
import her5 from "../img/h5.png";
import her6 from "../img/h6.png";
import head4 from '../img/head4.jpg'
import kurash from '../img/kurash.PNG'
import stylev from '../css/Videolar.module.css'
import kurash1 from "../img/kurash1.jpg"
import kurash2 from "../img/kurash2.jpg"
import kurash3 from "../img/kurash3.jpg"
import kurash4 from "../img/kurash4.jpg"
import shaxram1 from "../img/shaxram1.jpg"
import shaxram2 from "../img/shaxram2.jpg"
import shaxram3 from "../img/shaxram3.jpg"
import shaxram4 from "../img/shaxram4.jpg"
import axios from 'axios'
import Dashnews from './Dashnews'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { url } from '../host/Host'
import { Link } from 'react-router-dom'
import { Modal } from 'antd'
import Dashreyting from './Dashreyting'
import YouTube from '@u-wave/react-youtube'
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
    state={
        muted2:true,
        muted3:true,
        loader:true,
        news: null,
modalA:false,
modalB:false,
      }  
      openModalA=()=>{
        this.setState({
          modalA:true
        })
      }     
      closeModalA=()=>{
        this.setState({
          modalA:false
        })
      }     
      openModalB=()=>{
        this.setState({
          modalB:true
        })
      }     
      closeModalB=()=>{
        this.setState({
          modalB:false
        })
      }     
      getNews = () => {
        axios.get(`${url}/news/`).then((res) => {
          this.setState({
            news: res.data.reverse(),
            
          });
        
        });
      };
      componentDidMount(){
        this.getNews()
        setTimeout(()=>{
    this.setState({
      loader:false
    })
        },3000)
      }
      muted2=()=>{
    
        this.setState({
          muted2:!this.state.muted2
        })
      }
      muted3=()=>{
    
        this.setState({
          muted3:!this.state.muted3
        })
      }
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
      const responsive2 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3,
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
      const responsive3 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
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
        return (
            <div>
                <Header/>
                <Modal
        title="Belbog'li kurash sport turi"
        centered
        footer={false}
        visible={this.state.modalA}
        onOk={() => this.openModalA()}
        onCancel={() => this.closeModalA()}
        className={style.kurash}
        width="60%"
      >
       <Row>
        <Col lg={6} md={12} sm={12}>
        <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={2000}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  >
                    
                <div>
                    <img src={kurash1} alt="..." />
                    
                </div>
                    <div>
                    <img src={kurash2} alt="..." />
                    
                </div>
                  <div>
                    <img src={kurash3} alt="..." />
                    
                </div>
                <div>
                    <img src={kurash4} alt="..." />
                    
                </div>
               
               
            </Carousel>
          </Col> 
          <Col lg={6} md={12} sm={12} style={{padding:'20px'}}>
          <p>
          <b>Belbogʻli kurash</b> — Bu Oʻzbek milliy sport turlaridan biri boʻlib asosan Oʻrta osiyoda ommabop sanaladi. Belbogʻli kurashning koʻp javhalari oʻzbek halq milliy kurashiga oʻxshab ketadi, lekin bu sport turida sportchilar asosan belbogʻ orqali kurashadilar. Asosan bu sport turi ikki kishi oʻrtasida amalga oshiriladi. Belbogʻli kurashning asosiy kiyimlariga kurashish uchun yaktak va belbogʻ kiradi.
          </p>
          </Col>
       </Row>
      </Modal>
      <Modal
        title="Rishod Sobirov"
        centered
        footer={false}
        visible={this.state.modalB}
        onOk={() => this.openModalB()}
        onCancel={() => this.closeModalB()}
        className={style.kurash}
        width="60%"
      >
       <Row>
        <Col lg={6} md={12} sm={12}>
        <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={2000}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  >
                    
                <div>
                    <img src={shaxram1} alt="..." />
                    
                </div>
                    <div>
                    <img src={shaxram2} alt="..." />
                    
                </div>
                  <div>
                    <img src={shaxram3} alt="..." />
                    
                </div>
                <div>
                    <img src={shaxram4} alt="..." />
                    
                </div>
               
               
            </Carousel>
          </Col> 
          <Col lg={6} md={12} sm={12} style={{padding:'20px'}}>
          <p>
          <b>Rishod Sobirov</b> – Rishod Rashidovich Sobirov 1986 yilning 11 sentyabrida Buxoro viloyatining Jondor tumani, Burbog'i qishlog'ida tug'ilgan. O'zbek dzyudochisi, ikki karra jahon chempioni, uch karra Olimpiya o'yinlari bronza medali sohibi.

Dzyudo bilan 11 yoshida Rustam To'raev qo'l ostida shug'ullanishni boshlagan. Xalqaro musobaqalarga Furqat Soliev va Boris Grigorev kabi murabbiylar qo'l ostida tayyorgarlik ko'rardi.
Rishod ilk xalqaro sovrinini 2006 yilda qo'lga kiritgan.
  </p>
          </Col>
       </Row>
      </Modal>
          <div className={style.head}>
              <Row>
                  <Col lg={6} md={12}>
                      <h2>
                      <span>“Mahalla va oila”</span> ilmiy-tadqiqot institutining  <span>"Mahallalarda etnosportni rivojlantirishning nazariy-metodologik asoslari”</span> loyihasi
                      </h2>
                      <a className={style.but} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeMMzTKdIwFE2ysPi4F1N9VzVTMUQVp7LV86c46Cm_OY11exQ/viewform">So'rovnomani to'ldiring</a>
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
               <h1 className={style.sarlavha}>Mahallalar reytengi</h1>
         <div className={style.chiziq}></div>
          <Dashreyting/>
         <div className={style.sports}>
         <h1 className={style.sarlavha}>Etnosport turlari</h1>
         <div className={style.chiziq}></div>
         
         <Carousel
                    responsive={responsive1}
                    infinite={true}
                    autoPlaySpeed={800}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  >
                  <div style={{padding:'10px'}}><div className={style.sport} onClick={this.openModalA}>
                  <img src={kurash}/>
                  <p>Belbog'li kurash</p>
                  </div></div>
                  
<div style={{padding:'10px'}}><div className={style.sport} onClick={this.openModalA}>
<img src={kurash}/>
<p>Belbog'li kurash</p>
</div></div>

<div style={{padding:'10px'}}><div className={style.sport} onClick={this.openModalA}>
<img src={kurash}/>
<p>Belbog'li kurash</p>
</div></div>

<div style={{padding:'10px'}}><div className={style.sport} onClick={this.openModalA}>
<img src={kurash}/>
<p>Belbog'li kurash</p>
</div></div>

<div style={{padding:'10px'}}><div className={style.sport} onClick={this.openModalA}>
<img src={kurash}/>
<p>Belbog'li kurash</p>
</div></div>

<div style={{padding:'10px'}}><div className={style.sport} onClick={this.openModalA}>
<img src={kurash}/>
<p>Belbog'li kurash</p>
</div></div>

<div style={{padding:'10px'}}><div className={style.sport} onClick={this.openModalA}>
<img src={kurash}/>
<p>Belbog'li kurash</p>
</div></div>

<div style={{padding:'10px'}}><div className={style.sport} onClick={this.openModalA}>
<img src={kurash}/>
<p>Belbog'li kurash</p>
</div></div>

<div style={{padding:'10px'}}><div className={style.sport} onClick={this.openModalA}>
<img src={kurash}/>
<p>Belbog'li kurash</p>
</div></div>

<div style={{padding:'10px'}}><div className={style.sport} onClick={this.openModalA}>
<img src={kurash}/>
<p>Belbog'li kurash</p>
</div></div>

<div style={{padding:'10px'}}><div className={style.sport} onClick={this.openModalA}>
<img src={kurash}/>
<p>Belbog'li kurash</p>
</div></div>

<div style={{padding:'10px'}}><div className={style.sport} onClick={this.openModalA}>
<img src={kurash}/>
<p>Belbog'li kurash</p>
</div></div>

<div style={{padding:'10px'}}><div className={style.sport} onClick={this.openModalA}>
<img src={kurash}/>
<p>Belbog'li kurash</p>
</div></div>

                  </Carousel>
              <br />
              <br />
             
         </div>
         <div className={style.sports}>
         <h1 className={style.sarlavha}>Sportchilar</h1>
         <div className={style.chiziq}></div>
        

         <Carousel
                    responsive={responsive3}
                    infinite={true}
                    autoPlaySpeed={800}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  >
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src={rishod}/>
                  <h5>Rishod Sobirov</h5>
                  <p>Belbogʻli kurash ustasi</p>
                  </div></div>
                  
 


                  </Carousel>
              <br />
              <br />

         </div>
         
          <div></div>
          <div className={style.news}>
          <h1 className={style.sarlavha}>Yangiliklar</h1>
         <div className={style.chiziq}></div>
        
            <Container>
              <Row>
                        <Col lg={6} md={6} sm={12} className={style.new}>
<Link to="/yangiliklar">
  <Row className={style.n}>
    <Col lg={4}>
      <img src={head5} alt="..."/>
    </Col>
    <Col lg={8}>
      <p>Poytaxtimizda “O‘zbekistonda etnosportni rivojlantirish istiqbollari” mavzuida xalqaro konferensiya bo‘lib o‘tdi.</p>
    </Col>
    </Row>
</Link>
                </Col>
                <Col lg={6} md={6} sm={12} className={style.new}>
<Link to="/yangiliklar">
  <Row className={style.n}>
    <Col lg={4}>
      <img src={head5} alt="..."/>
    </Col>
    <Col lg={8}>
      <p>Poytaxtimizda “O‘zbekistonda etnosportni rivojlantirish istiqbollari” mavzuida xalqaro konferensiya bo‘lib o‘tdi.</p>
    </Col>
    </Row>
</Link>
                </Col>
                <Col lg={6} md={6} sm={12} className={style.new}>
<Link to="/yangiliklar">
  <Row className={style.n}>
    <Col lg={4}>
      <img src={head5} alt="..."/>
    </Col>
    <Col lg={8}>
      <p>Poytaxtimizda “O‘zbekistonda etnosportni rivojlantirish istiqbollari” mavzuida xalqaro konferensiya bo‘lib o‘tdi.</p>
    </Col>
    </Row>
</Link>
                </Col>
                <Col lg={6} md={6} sm={12} className={style.new}>
<Link to="/yangiliklar">
  <Row className={style.n}>
    <Col lg={4}>
      <img src={head5} alt="..."/>
    </Col>
    <Col lg={8}>
      <p>Poytaxtimizda “O‘zbekistonda etnosportni rivojlantirish istiqbollari” mavzuida xalqaro konferensiya bo‘lib o‘tdi.</p>
    </Col>
    </Row>
</Link>
                </Col>
              </Row>
              <Link className={style.but} to="/yangiliklar"> Barchasini ko'rish</Link>
            </Container>
          </div>
          <h1 className={style.sarlavha}>Tadbirlar</h1>
         <div className={style.chiziq}></div>
        
          <Dashnews/>
       <>
       
       <div
              style={{
                backgroundColor: "white",
                marginTop: "-30px",
                textAlign: "center",
              }}
              className={style.homiy}
            ><br/>
         <h1 className={style.sarlavha}>Videolavhalar</h1>
         <div className={style.chiziq}></div>
        
                    <div className={stylev.videos}>
          

          <br />

          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsiveY}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={100}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className={stylev.videos_item}>
              <YouTube
                
                showCaptions={false}
                showRelatedVideos={false}
                opts={{
                  playerVars: {
                    rel: 0,
                  },
                }}
                video="FY_6xf6leCA"
                className={stylev.you}
               
              />
            </div>
            <div className={stylev.videos_item}>
              <YouTube
                
                showCaptions={false}
                showRelatedVideos={false}
                opts={{
                  playerVars: {
                    rel: 0,
                  },
                }}
                video="nRpmfAU7ttk"
                className={stylev.you}
               
              />
            </div>
            <div className={stylev.videos_item}>
              <YouTube
                
                showCaptions={false}
                showRelatedVideos={false}
                opts={{
                  playerVars: {
                    rel: 0,
                  },
                }}
                video="3_iAy1vdTGE"
                className={stylev.you}
               
              />
            </div>
            <div className={stylev.videos_item}>
              <YouTube
                
                showCaptions={false}
                showRelatedVideos={false}
                opts={{
                  playerVars: {
                    rel: 0,
                  },
                }}
                video="2yiW87QtFjY"
                className={stylev.you}
               
              />
            </div>
          </Carousel>
        </div>

            <br/>
              <h1 className={style.sarlavha}> Bizning hamkorlarimiz</h1>
              <div className={style.chiziq}></div>
              <br />

              <div className="sliderHomiy" style={{ backgroundColor: "white" }}>
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
            </div>
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
                          center: [41.318973, 69.303470],
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
                            geometry={ [41.318973, 69.303470]}
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
       </>
          </div>
                <Footer/>
            </div>
        )
    }
}
