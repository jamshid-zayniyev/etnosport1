import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import style from '../css/Dashboard.module.css'
import { Col, Row } from 'react-bootstrap'
import head from '../img/head.jpg'
import head1 from '../img/head1.jpg'
import head2 from '../img/head2.jpg'
import head3 from '../img/head3.jpg'
import head5 from '../img/head5.jpg'
import head4 from '../img/head4.jpg'
import kurash from '../img/kurash.PNG'
import back2 from '../videos/b.mp4'
import kurash1 from "../img/kurash1.jpg"
import kurash2 from "../img/kurash2.jpg"
import kurash3 from "../img/kurash3.jpg"
import kurash4 from "../img/kurash4.jpg"
import shaxram1 from "../img/shaxram1.jpg"
import shaxram2 from "../img/shaxram2.jpg"
import shaxram3 from "../img/shaxram3.jpg"
import shaxram4 from "../img/shaxram4.jpg"
import axios from 'axios'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { url } from '../host/Host'
import { Link } from 'react-router-dom'
import { Modal } from 'antd'
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
        title="Shaxram G'iyosov"
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
          <b>SHahram G'iyosov</b> – 1993 yilning 7 iyul kuni Buxoro shahrida dunyoga kelgan. 10 yoshidan boks bilan shug'ullanishni boshlagan. 2003 yili Buxoro shahridagi Bolalar va o'smirlar sport maktabining boks bo'limiga qabul qilingan. Ilk murabbiyi Olim Muhammedov. Bu mutaxassis ikki karra jahon chempioni Abbos Atoevning murabbiyi ham hisoblanadi. Malumot uchun, Atoev bokschilik faoliyatini yakunlab, bugungi kunda Buxoroda murabbiylik faoliyatini olib boryapti.
  </p>
          </Col>
       </Row>
      </Modal>
          <div className={style.head}>
              <Row>
                  <Col lg={6} md={12}>
                      <h2>
                      "Mahallarda <span>Etnosportni</span> rivojlantirish"<br/> elektron platformasi
                      </h2>
                      <a className={style.but} href="tel: +998930820372">Biz bilan bog'laning</a>
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
                    <img src={head5} alt="..." />
                    
                </div>
                  <div>
                    <img src={head} alt="..." />
                    
                </div>
                <div>
                    <img src={head2} alt="..." />
                    
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
              <div className={style.new}>
              <div className={style.back}></div>
              {this.state.news !== null && this.state.news.length !== 0 ? (
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive2}
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
                  {this.state.news.map((item, key) => {
                    return (
                      <div>
                      <Link to={`/yangiliklar/${key}`}>
                        <div className={style.new_item}>
                          <div>
                            <img src={item.image} />
                            <h4>{item.name}</h4>
                            <p className={style.date}>
                              <i className="fa fa-calendar">
                                {item.date_added}
                              </i>
                            </p>
                          </div>
                        </div>
                        </Link>
                      </div>
                    );
                  })}
                </Carousel>
              ) : (
                ""
              )}<br />{" "}</div>
         <div className={style.sports}>
         <h1 className={style.sarlavha}>Etnosport turlari</h1>
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

         <Carousel
                    responsive={responsive3}
                    infinite={true}
                    autoPlaySpeed={800}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  >
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  <div style={{padding:'10px'}}><div className={style.sportchi} onClick={this.openModalB}>
                  <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5F-d2FfVvQRMomTlDroRJKKxi5qiRxquPw5ioKjnuAI6Lg1-SG_ZKQfB7R2Hz"/>
                  <h5>Shaxram G'iyosov</h5>
                  <p>Bokschi</p>
                  </div></div>
                  
 


                  </Carousel>
              <br />
              <br />

         </div>
         
              {/* <video className={style.back2} src={back2} autoPlay loop muted={this.state.muted2}></video> */}
             
             {/* <div className={style.blue}>
               <div className={style.logo1} onClick={this.muted2}>{this.state.muted2?<i className="fa fa-volume-off"></i>:<i className="fa fa-volume-up"></i>}</div>
             </div> */}
          </div><br/><br/><br/><br/><br/>
                <Footer/>
            </div>
        )
    }
}
