import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import school from "../img/gerb.png";
import style from "../css/About.module.css";
import kurash from "../img/kurash.PNG";
import Carousel from "react-multi-carousel";
import { Col, Row, Container } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import avatar1 from "../img/avatar1.png";
import styles from "../css/Dashboard.module.css";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar3.png";
import avatar4 from "../img/avatar4.png";
import head from "../img/head.jpg";
import head1 from "../img/head1.jpg";
import etnosport9 from "../img/etnoimg3.jpg";
import head2 from "../img/head2.jpg";
import head3 from "../img/head3.jpg";
import head5 from "../img/head5.jpg";
import head4 from "../img/head4.jpg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillPhone,
  AiFillYoutube,
} from "react-icons/ai";
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
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 650 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 650, min: 0 },
    items: 1,
  },
};
export default class Loyihahaqida extends Component {
  state = {
    loader: true,
    error: false,
    docs: null,
    urlA: "",
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
        <img src={etnosport9} className={style.headrasm} alt="..." />
        <div className={style.headsarlavha}>Biz haqimizda</div>
        <div className={style.about}>
          <div className={style.aboutconta}>
            <h1 className={style.sarlavha}>Biz haqimizda</h1>
            <div className={style.chiziq}></div>
            <div className={style.abouttext}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              voluptatum alias, deleniti rem reiciendis porro consequatur
              excepturi minima! Iste accusamus sunt laboriosam ducimus dolore
              amet aliquam quas perferendis asperiores distinctio numquam, ullam
              quod quis ab aperiam libero suscipit tenetur? Non rem ratione, at
              quam distinctio ea, corrupti eveniet quisquam incidunt quibusdam
              possimus consequatur culpa, magnam eos? Dolorem dolorum culpa nam
              quibusdam autem, laboriosam ipsum necessitatibus beatae laudantium
              labore. Cum obcaecati voluptas sequi reprehenderit. Possimus ipsam
              ea corrupti, voluptatum dolor doloremque deleniti quae dolorem
              optio, animi consequatur! Repudiandae nobis nesciunt temporibus
              reprehenderit, nisi quod sit autem corporis nemo dignissimos omnis
              aliquid!Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore voluptatum alias, deleniti rem reiciendis porro
              consequatur excepturi minima! Iste accusamus sunt laboriosam
              ducimus dolore amet aliquam quas perferendis asperiores distinctio
              numquam, ullam quod quis ab aperiam libero suscipit tenetur? Non
              rem ratione, at quam distinctio ea, corrupti eveniet quisquam
              incidunt quibusdam possimus consequatur culpa, magnam eos? Dolorem
              dolorum culpa nam quibusdam autem, laboriosam ipsum necessitatibus
              beatae laudantium labore. Cum obcaecati voluptas sequi
              reprehenderit. Possimus ipsam ea corrupti, voluptatum dolor
              doloremque deleniti quae dolorem optio, animi consequatur!
              Repudiandae nobis nesciunt temporibus reprehenderit, nisi quod sit
              autem corporis nemo dignissimos omnis aliquid!
            </div>
          </div>
          <div className={style.aboutteams}>
            <h1 className={style.sarlavha}>Bizning jamoa</h1>

            <div className={style.chiziq}></div>

            <Carousel
              responsive={responsive1}
              infinite={true}
              autoPlaySpeed={1500}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
            >
              <div style={{ padding: "10px" }}>
                <div className={style.aboutteam}>
                  <img src={avatar2} />
                  <p>
                    <strong>Rahmon Ismoilov</strong>
                  </p>{" "}
                  <p>Front end dasturchi</p>
                  <div className={style.abouticons}>
                    <i className={style.abouticonsphone}>
                      <AiFillPhone />
                    </i>
                    <i
                      className="fa fa-telegram"
                      aria-hidden="true"
                      style={{ color: "blue", margin: "auto 3px" }}
                    ></i>
                  </div>
                </div>
              </div>

              <div style={{ padding: "10px" }}>
                <div className={style.aboutteam}>
                  <img src={avatar1} />
                  <p>
                    <strong>Jamshid Zayniyev</strong>
                  </p>{" "}
                  <p>Front end dasturchi</p>
                  <div className={style.abouticons}>
                    <i className={style.abouticonsphone}>
                      <AiFillPhone />
                    </i>
                    <i
                      className="fa fa-telegram"
                      aria-hidden="true"
                      style={{ color: "blue", margin: "auto 3px" }}
                    ></i>
                  </div>
                </div>
              </div>

              <div style={{ padding: "10px" }}>
                <div className={style.aboutteam}>
                  <img src={avatar3} />
                  <p>
                    <strong>Manguberdi Jalolov</strong>
                  </p>{" "}
                  <p>Front end dasturchi</p>
                  <div className={style.abouticons}>
                    <i className={style.abouticonsphone}>
                      <AiFillPhone />
                    </i>
                    <i
                      className="fa fa-telegram"
                      aria-hidden="true"
                      style={{ color: "blue", margin: "auto 3px" }}
                    ></i>
                  </div>
                </div>
              </div>

              <div style={{ padding: "10px" }}>
                <div className={style.aboutteam}>
                  <img src={avatar4} />
                  <p>
                    <strong>Abror Axmadov</strong>
                  </p>{" "}
                  <p>Back end dasturchi</p>
                  <div className={style.abouticons}>
                    <i className={style.abouticonsphone}>
                      <AiFillPhone />
                    </i>
                    <i
                      className="fa fa-telegram"
                      aria-hidden="true"
                      style={{ color: "blue", margin: "auto 3px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </Carousel>
            <br />
            <br />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
