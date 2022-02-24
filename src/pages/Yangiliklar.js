import React, { Component } from "react";
import style from "../css/Yangiliklar.module.css";
import styles from "../css/Yangiliklartwo.module.css";
import Header from "./Header";
import Footer from "./Footer";
import img1 from "../img/head1.jpg";
import img2 from "../img/head2.jpg";
import img3 from "../img/head3.jpg";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
// import GridLoader from "react-spinners/GridLoader";
import { Collapse } from "antd";
const { Panel } = Collapse;
export default class Yangiliklar extends Component {
  render() {
    return (
      <div>
        <Header />

        <div>
        
          <div className={styles.newsY}>
            <Collapse defaultActiveKey={["1"]}>
              <Panel header="Mahallalarda_Etnosportni_rivojlantirish 1" key="1">
                <div>
                  <Container>
                    <div className={styles.imag}>
                      <img src={img1} />
                    </div>
                    <div className={styles.yozuv}>
                      <h1>Etnosport</h1>
                      <p>
                        <i className="fa fa-calendar"></i>
                        24.02.2022
                      </p>
                      <p>
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                      </p>
                    </div>
                  </Container>
                </div>
              </Panel>
              <Panel header="Mahallalarda_Etnosportni_rivojlantirish 2" key="2">
                <div>
                  <Container>
                    <div className={styles.imag}>
                      <img src={img2} />
                    </div>
                    <div className={styles.yozuv}>
                      <h1>Etnosport</h1>
                      <p>
                        <i className="fa fa-calendar"></i>
                        24.02.2022
                      </p>
                      <p>
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                      </p>
                    </div>
                  </Container>
                </div>
              </Panel>
              <Panel
                header="Mahallalarda_Etnosportni_rivojlantirish 3 "
                key="3"
              >
                <div>
                  <Container>
                    <div className={styles.imag}>
                      <img src={img3} />
                    </div>
                    <div className={styles.yozuv}>
                      <h1>Etnosport</h1>
                      <p>
                        <i className="fa fa-calendar"></i>
                        24.02.2022
                      </p>
                      <p>
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                        #Mahallalarda_Etnosportni_rivojlantirish
                      </p>
                    </div>
                  </Container>
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
