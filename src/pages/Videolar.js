import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import style from "../css/Videolar.module.css";
import YouTube from "@u-wave/react-youtube";
import Carousel from "react-multi-carousel";
import etnosport9 from "../img/etnoimg3.jpg";
import etnosport7 from "../img/etnoimg7.jpg";
export default class Videolar extends Component {
  onEndY = (e) => {
    console.log(e);
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
        <Header />
        <div className={style.head}>
          <img src={etnosport9} alt="..."/>
          <div className={style.headsarlavha}>Videolavhalar</div>
        </div>
        <div className={style.videos}>
          <div id="video"></div>

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
            <div className={style.videos_item}>
              <YouTube
                onEnd={this.onEndY(this)}
                showCaptions={false}
                showRelatedVideos={false}
                opts={{
                  playerVars: {
                    rel: 0,
                  },
                }}
                video="FY_6xf6leCA"
                className={style.you}
                // autoplay={true}
                muted={true}
              />
            </div>
            <div className={style.videos_item}>
              <YouTube
                onEnd={this.onEndY(this)}
                showCaptions={false}
                showRelatedVideos={false}
                opts={{
                  playerVars: {
                    rel: 0,
                  },
                }}
                video="FY_6xf6leCA"
                className={style.you}
                // autoplay={true}
                muted={true}
              />
            </div>
            <div className={style.videos_item}>
              <YouTube
                onEnd={this.onEndY(this)}
                showCaptions={false}
                showRelatedVideos={false}
                opts={{
                  playerVars: {
                    rel: 0,
                  },
                }}
                video="FY_6xf6leCA"
                className={style.you}
                // autoplay={true}
                muted={true}
              />
            </div>
          </Carousel>
        </div>
        <Footer />
      </div>
    );
  }
}
