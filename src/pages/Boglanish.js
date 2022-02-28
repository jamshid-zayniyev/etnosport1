import React, { Component } from "react";
import { Clusterer, Map, Placemark, YMaps } from "react-yandex-maps";
import Footer from "./Footer";
// import Loader from "./Loader";
import { Row, Col } from "react-bootstrap";
import Header from "./Header";
import style from "../css/Boglanish.module.css";
import GridLoader from "react-spinners/GridLoader";
import rasm from "../img/boglanish.jpg";
import { message } from "antd";
import etnosport7 from "../img/etnoimg7.jpg";

export default class Boglanish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
      boshqarma: null,
    };
  }

  //   sendMurojat=()=>{
  //     this.setState({
  //       timePassed: false,
  //     })
  //     var name = document.getElementById('name').value
  //     var phone = document.getElementById('phone').value
  //     var text = document.getElementById('text').value
  //     var today = new Date();
  // var date_sent = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  //     var seen=false
  //     var config={name, phone, text, seen, date_sent}
  //     axios.post(`${url}/murojaat/`,config).then(res=>{
  //         message.success("Xabar yuborildi")
  //         this.setState({
  //           timePassed: true,
  //         })
  //         document.getElementById('name').value=""
  //  document.getElementById('phone').value=""
  // document.getElementById('text').value=""
  //       }).catch(err=>{
  //         message.error("Xabar jo'natilmadi")
  //         this.setState({
  //           timePassed: true,
  //         })
  //       })
  //   }
  render() {
    return (
      <div>
        <Header />
        <div className={style.head}>
          <img src={etnosport7}></img>
          <div className={style.headsarlavha}>
            Butun jahon etnosport oid qonunlar
          </div>
        </div>
        <div>
          <Row style={{ marginTop: "-70px" }}>
            <Col lg={6} md={12} sm={12}>
              <h1 className={style.sarlavha}>Bizning manzilimiz</h1>
              <br />

              <YMaps>
                <div
                  className={style.xarita_item}
                  style={{ paddingLeft: "10%" }}
                >
                  <Map
                    style={{
                      width: "100%",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      height: "550px",
                    }}
                    defaultState={{ center: [41.318973, 69.303470], zoom: 12 }}
                  >
                    <Clusterer
                      options={{
                        groupByCoordinates: false,
                      }}
                    >
                      <Placemark
                        key={-1}
                        geometry={[41.318973, 69.303470]}
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
                      <button
                        type="button"
                        // onClick={this.sendMurojat}
                      >
                        Yuborish
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Footer />
        </div>
      </div>
    );
  }
}
