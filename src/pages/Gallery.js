
import React, { Component } from 'react'
import style from '../css/Dashboard.module.css'
import styles from '../css/Gallery.module.css'
import { Col, Row } from 'react-bootstrap'
import "react-multi-carousel/lib/styles.css";
import GridLoader from "react-spinners/GridLoader";
import axios from 'axios'
import {url, } from '../host/Host'
import Header from './Header'
import Footer from './Footer'
import etnosport9 from "../img/etnoimg2.jpg";
import kurash from "../img/kurash.PNG"
import kurash1 from "../img/kurash1.jpg"
import kurash2 from "../img/kurash2.jpg"
import kurash3 from "../img/kurash3.jpg"
import kurash4 from "../img/kurash4.jpg"
import kurash5 from "../img/kurash5.jfif"
import kurash6 from "../img/kurash6.jpg"
import kurash7 from "../img/kurash7.jpg"
import head from "../img/head.jpg"
import head1 from "../img/head1.jpg"
import head2 from "../img/head2.jpg"
import head3 from "../img/head3.jpg"
import head4 from "../img/head4.jpg"
import head5 from "../img/head5.jpg"

export default class Gallery extends Component {
state={
    loader:true,
   images:null,
   boshqarma:null,
}

    render() {
       
        return (
          <>
          <div>
                <Header/>
                
                <div className={styles.head}>
          <img src={etnosport9} alt="..."/>
          <div className={styles.headsarlavha}>Fotolavhalar</div>
        </div>
<div className={styles.rasmlar}>
    <Row style={{justifyContent:'center'}}>
    <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={head}/>
   </Col>
   <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={head1}/>
   </Col>
   <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={head2}/>
   </Col>
   <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={head3}/>
   </Col> <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={head4}/>
   </Col> <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={head5}/>
   </Col>
    <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={kurash}/>
   </Col>
   <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={kurash1}/>
   </Col>
   <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={kurash2}/>
   </Col>
   <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={kurash3}/>
   </Col> <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={kurash4}/>
   </Col> <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={kurash5}/>
   </Col> <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={kurash6}/>
   </Col> <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={kurash7}/>
   </Col>
    </Row>
</div>
<Footer/>
            </div>
    </>)
    }
}

