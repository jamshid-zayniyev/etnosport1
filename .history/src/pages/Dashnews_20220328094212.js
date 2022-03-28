import React, { Component } from 'react'
import "../css/Dashnews.css"


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import YouTube from "@u-wave/react-youtube";
import { url } from '../host/Host'
import axios from 'axios'
export default class Dashnews extends Component {
  state={
    events:null,
    eventsF:null,
  }
  getEvents=()=>{
    axios.get(`${url}/events/`).then(res=>{
     this.setState({eventsF:res.data,events:res.data.reverse().slice(0,4)})
    })
  }  
  componentDidMount(){
    this.getEvents()
  }
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
    {
      this.props.id==="H"?
      this.state.events!==null?this.state.events.map(item=>{
return( <li className="card" id="card_1">
		
<div className="card__content">
  <div className="gh">
          <h1>{item.name} </h1>
    <h2>{item.region.name}</h2>
    <p>{item.text}
    </p>
    {/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
  </div>
  <figure>
    <div className="imgs">
      {item.get_images.length!==0?  <Carousel
            responsive={responsive2}
                    infinite={true}
                    autoPlaySpeed={1500}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
          >
            {item.get_images.map(item1=>{
              return( <div className="imgdiv">
              <img src={item1.image}/>
          </div>)
            })}
         
          
          </Carousel>:''}
            
              </div>
<div className="you">
  <Carousel
            responsive={responsive2}
                    infinite={true}
                    autoPlaySpeed={1500}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
          >
            {item.videos.length!==0 ? (
                    item.videos.map((item2) => {
                  
                      return (
                        <div>
                          <YouTube
                            showCaptions={false}
                            showRelatedVideos={false}
                            opts={{
                              playerVars: {
                                rel: 0,
                              },
                            }}
                            video={
                              String(item2.split('/')[item2.split('/').length-1]
                          
                            }
                            className="vid"
                            // autoplay={true}
                         
                          />
                        </div>
                      );
                    })
                  ) : (
                    <div></div>
                  )}
          </Carousel>

</div>
  </figure>
</div>
</li>
)
      }):''
   :this.state.eventsF!==null?this.state.eventsF.map(item=>{
     if(item.region.id===Number(this.props.id)){
     
      return( <li className="card" id="card_1">
        
      <div className="card__content">
        <div className="gh">
                <h1>{item.name} </h1>
          <h2>{item.region.name}</h2>
          <p>{item.text}
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
                  {item.get_images.map(item1=>{
                    return( <div className="imgdiv">
                    <img src={item1.image}/>
                </div>)
                  })}
               
                
                </Carousel>
                    </div>
      <div className="you">
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
              
                  {item.videos.map(item2=>{
             
                    return(
      <div>
      <YouTube
                      onEnd={this._onEnd}
                      opts={{
                        playerVars: {
                          rel: 0,
                        },
                      }}
                      video={item2.split('/')[item2.split('/').length-1]}
                      className="vid"
      
                    />
      
      </div>
      
                    )
                  })}
      
                </Carousel>
      </div>
        </figure>
      </div>
      </li>
      )
     }
    
          }):'' }
       
	</ul>
</main>
            </div>
        )
    }
}
