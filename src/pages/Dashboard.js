import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import style from '../css/Dashboard.module.css'
import { Col, Row } from 'react-bootstrap'
import head from '../img/head.jpg'
import head1 from '../img/head1.jpg'
import head2 from '../img/head2.jpg'
import head3 from '../img/head3.jpg'
import head4 from '../img/head4.jpg'
import back2 from '../videos/b.mp4'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
export default class Dashboard extends Component {
    state={
        muted2:true,
        muted3:true,
        loader:true,
      }  
      componentDidMount(){
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
        return (
            <div>
                <Header/>
          <div className={style.head}>
              <Row>
                  <Col lg={6} md={12}>
                      <h2>
                      "Mahallarda <span>Etnosportni</span> rivojlantirish"<br/> elektron platformasi
                      </h2>
                      <a href="tel: +998930820372">Biz bilan bog'laning</a>
                  </Col>
                  <Col lg={6} md={12}>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={2000}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  >
                  <div>
                    <img src={head} alt="..." />
                    
                </div>
                <div>
                    <img src={head1} alt="..." />
                    
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
              <video className={style.back2} src={back2} autoPlay loop muted={this.state.muted2}></video>
             
             <div className={style.blue}>
               <div className={style.logo1} onClick={this.muted2}>{this.state.muted2?<i className="fa fa-volume-off"></i>:<i className="fa fa-volume-up"></i>}</div>
             </div>
          </div><br/><br/><br/><br/><br/>
                <Footer/>
            </div>
        )
    }
}
