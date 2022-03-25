
import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import style from "../css/Hujjatlart.module.css";
import Header from "./Header";
import Footer from "./Footer";
import uzb from "../img/doc.png";
import otchop from "../img/Otchoptirish.jfif";
import eskietno from "../img/kurash7.jpg";
import etnosport7 from "../img/etnoimg7.jpg";
import school from "../img/gerb.png";
import axios from "axios";
import { url } from "../host/Host";
export default class Svmh extends Component {
  state = {
    loader: true,
    error:false,
  docs:null,
  urlA:""
  };
  componentDidMount() {
    setInterval(()=>{
       if(window.location.href!==this.state.urlA){
         this.edit()
       }
    }, 500)
     }
  edit=()=> {
this.setState({loader:true})
    var url1 = window.location.href.split('/')
    var id = url1[url1.length-1]
    
    axios.get(`${url}/categorydocs/${id}/`).then(res=>{
      console.log(res.data)
      this.setState({docs:res.data,urlA:window.location.href, loader: false,})
    })
  
  }
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
        <div className={style.head}>
          <img src={etnosport7}></img>
          <div className={style.headsarlavha}>
          {window.location.href.split('/')[window.location.href.split('/').length-2].replaceAll('%20', " ")}
          </div>
        </div>
      
        <div className={style.hujjat}>
          <Row className={style.rowT}>
            {this.state.docs!==null?this.state.docs.get_docs.map(item=>{
              return(<Col
                lg={6}
                md={12}
                className={style.colT}
                style={{ marginTop: "20px" }}
                sm={12}
              >
                <a className={style.ss} href= target="_blank">
                  <Row>
                    <Col lg={4}>
                      <img src={uzb} />
                    </Col>
                    <Col
                      lg={8}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <h1>
                        {item.name}
                      </h1>
                    </Col>
                  </Row>
                </a>
              </Col>)
            }):''}
            
           
          </Row>

          <br />
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}
