import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { url } from "../host/Host";
import style from "../css/Videolar.module.css";
import YouTube from "@u-wave/react-youtube";
import Carousel from "react-multi-carousel";
import etnosport9 from "../img/etnoimg3.jpg";
import school from "../img/gerb.png";
import {Row, Col} from 'antd'
export default class Videolar extends Component {
  state = {
    loader: true,
    videoss:null
  };
  
  componentDidMount() {
    this.getVideos();
   
  }
  getVideos = () => {
    axios.get(`${url}/videos/`).then((res) => {
      this.setState({
        videoss: res.data.reverse(),
      });
      setTimeout(() => {
        this.setState({ loader: false });
      }, 2000);
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
        <Header />
        <div className={style.head}>
          <img src={etnosport9} alt="..." />
          <div className={style.headsarlavha}>Videolavhalar</div>
        </div>
        <div className={style.videos}>
          <div id="video"></div>

          <br />
<Row>
            {this.state.videoss !== null
              ? this.state.videoss.map((item) => {
               
                  return (
                    <Col lg={12} md={24} sm={24}>
                    <div className={style.videos_item}>
                      <YouTube
                       
                        showCaptions={false}
                        showRelatedVideos={false}
                        opts={{
                          playerVars: {
                            rel: 0,
                          },
                        }}
                        video={item.url.split('/')[item.url.split('/').length-1]}
                        className={style.you}
                        // autoplay={true}
                        muted={true}
                      />
                  
                    </div>
                    </Col>
                  );
                })
              : <div></div>}
           
           </Row>
        </div>
        <Footer />
      </div>
    );
  }
}
