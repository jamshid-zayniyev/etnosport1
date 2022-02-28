import React, { Component } from 'react'
import "../css/Dashnews.css"
import head from '../img/head.jpg'
import head1 from '../img/head1.jpg'
import head2 from '../img/head2.jpg'
import head3 from '../img/head3.jpg'
import head4 from '../img/head5.jpg'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import YouTube from "@u-wave/react-youtube";
export default class Dashnews extends Component {
    render() {
        const responsive2 = {
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
        return (
            <div className="dashnew">
<main>
	<ul id="cards">
    <li className="card" id="card_1">
			<div className="card__content">
				<div className="gh">
                <h1>Etnosport va yoshlar </h1>
					<h2>Buxoro viloyati Qorovulbozor tumani Imom-Buxoriy mahalla fuqarolar yig'ini</h2>
					<p>Mahalamizdagi yoshlar o'rtasida "Etnosport va yoshlar" tadbiri o'tqazildi. Bu tadbirda yoshlarimiz o'rtasida etnosportning ko'plab turlari (kurash, chillak, arqon tortish va boshqalar) bo'yicha musobaqalar o'tqazilib g'oliblar mahalla tomonidan ko'plab sovg'alar va faxriy yorliqlar bilan taqdirlandi. Shuningdek tadbirda otalar o'rtasida arqon tortish va onalar o'rtasida besh tosh o'yinlari bo'yicha musobaqalar ham bo'lib o'tdi. Tadbir turli kuy-qo'shiqlar va qiziqarli chiqishlar bilan ajoyib tarzda o'tdi.
          </p>
					{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
				</div>
				<figure>
					<div className="imgs">
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
                <div className="imgdiv">
                    <img src={head}/>
                </div>
                
                <div className="imgdiv">
                     <img src={head1}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={head2}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={head3}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={head4}/>
                 </div>
                </Carousel>
                    </div>
<div className="you">
<YouTube
                      onEnd={this._onEnd}
                      opts={{
                        playerVars: {
                          rel: 0,
                        },
                      }}
                      video="nRpmfAU7ttk"
                      className="vid"

                    />
</div>
				</figure>
			</div>
		</li>
        <li className="card" id="card_1">
			<div className="card__content">
				<div className="gh">
                <h1>Etnosport va yoshlar </h1>
					<h2>Buxoro viloyati Qorovulbozor tumani Imom-Buxoriy mahalla fuqarolar yig'ini</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. vLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
				</div>
				<figure>
					<div className="imgs">
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
                <div className="imgdiv">
                    <img src={head}/>
                </div>
                
                <div className="imgdiv">
                     <img src={head1}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={head2}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={head3}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={head4}/>
                 </div>
                </Carousel>
                    </div>
<div className="you">
<YouTube
                      onEnd={this._onEnd}
                      opts={{
                        playerVars: {
                          rel: 0,
                        },
                      }}
                      video="nRpmfAU7ttk"
                      className="vid"

                    />
</div>
				</figure>
			</div>
		</li>
       
	</ul>
</main>
            </div>
        )
    }
}
