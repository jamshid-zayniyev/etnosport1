import React, { Component } from "react";
import style from "../css/Dashboard.module.css";
import styles from "../css/Gallery.module.css";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import GridLoader from "react-spinners/GridLoader";
import axios from "axios";
import { url } from "../host/Host";
import Header from "./Header";
import school from "../img/gerb.png";
import { Collapse } from "antd";

import Footer from "./Footer";
import rasm from "../img/head.jpg";
import etnosport8 from "../img/etnoimg8.jpg";
const { Panel } = Collapse;

export default class Yangiliklar extends Component {
  state = {
    loader: true,
    news: null,
    school: null,
    raqam: "0",
  };

  componentDidMount() {
    this.getNews();
    setTimeout(() => {
      this.setState({
        loader: false,
      });
    }, 3000);
  }
  getNews = () => {
    axios.get(`${url}/news/`).then((res) => {
      this.setState({
        news: res.data.reverse(),
      });
      console.log(res.data);
    });
  };
  // componentDidMount() {
  //   this.getNews();
  //   var link = window.location.href;

  //   this.setState({
  //     raqam: link.slice(link.lastIndexOf("/") + 1, link.length),
  //   });
  // }
  // getNews = () => {
  //   axios.get(`${url}/boshqarma`).then((res) => {
  //     this.setState({
  //       school: res.data[0],
  //     });
  //     axios.get(`${url}/news/`).then((res) => {
  //       var a = res.data.reverse();
  //       a.splice(0, 1);
  //       a.splice(1, 1);
  //       a.splice(4, 1);
  //       this.setState({
  //         news: a,
  //       });
  //       setTimeout(() => {
  //         this.setState({ loader: false });
  //       }, 1000);
  //     });
  //   });
  // };
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
          <img src={etnosport8}></img>
          <div className={styles.headsarlavhaa}>
            Butun jahon etnosport oid qonunlar
          </div>
        </div>

        <div className={styles.newsY}>
          <Collapse accordion defaultActiveKey={[this.state.raqam]}>
            <Panel
              className={styles.panel}
              header={
                <p style={{ color: "white" }}>
                  O‘zbekistonda Etnosport uyushmasi tashkil etildi
                </p>
              }
            >
              <div>
                <Container>
                  <div className={styles.flex}>
                    <div className={styles.imag}>
                      <img src={rasm} />
                    </div>
                    <div className={styles.yozuv}>
                      <h1>O‘zbekistonda Etnosport uyushmasi tashkil etildi</h1>
                      <p className={styles.dat}>
                        <i className="fa fa-calendar"></i>
                        10.10.2021 yil
                      </p>
                    </div>
                  </div>
                  <div className={styles.yozuv}>
                    <p className={styles.text}>
                      Turizm va sport vazirligi tomonidan tashkil etilgan
                      tadbirni O‘zbekiston Respublikasi Bosh vaziri o‘rinbosari,
                      Turizm va sport vaziri Aziz Abduhakimov, Butunjahon
                      etnosport konfederatsiyasi raisi Nejmeddin Bilol Erdo‘g‘on
                      ochib berdi. – O‘zbekistonda milliy sport turlarini
                      rivojlantirish va ommalashtirish, nomoddiy madaniy merosni
                      asrab-avaylash, shuningdek, O‘zbekiston aholisi o‘rtasida
                      jismoniy tarbiya va sportni rivojlantirishga alohida
                      e’tibor qaratilayotgani rahbariyat tomonidan ilgari
                      surilayotgan muhim yo‘nalishlardan biridir.
                      davlatimizning. Shu maqsadda va shiori ostida xalqaro
                      konferensiya tashkil etildi “O‘zbekistonni etnosport va
                      milliy qadriyatlar orqali kashf et!”. Milliy o‘yinlar
                      azal-azaldan davlatlarning shakllanishida, qabila va
                      elatlarning birlashuvida, shuningdek, odamlarni himoya
                      qilishda muhim ahamiyatga ega bo‘lgan. Bugungi kunda xalq
                      o‘yinlariga e’tiborni kuchaytirish, ularni yoshlar
                      o‘rtasida ommalashtirish insonni jismonan sog‘lom,
                      matonatli, sabr-toqatli, sezgir, ma’nan yetuk bo‘lib
                      yetishishi uchun aholi salomatligini mustahkamlashga katta
                      hissa qo‘shadi. Xalq tarixining ming yillar davomida
                      shakllanganligi uning moddiy-madaniy boyligi,
                      etnografiyasida o‘z ifodasini topadi. Shuning uchun
                      fursatdan foydalanib, O‘zbekiston etnosport
                      assotsiatsiyasi ochilganini e’lon qilmoqchiman”, — dedi
                      Aziz Abduhakimov.
                    </p>
                  </div>
                </Container>
              </div>
            </Panel>

            <Panel
              className={styles.panel}
              header={
                <p style={{ color: "white" }}>
                  O‘zbekistonda Etnosport uyushmasi tashkil etildi
                </p>
              }
            >
              <div>
                <Container>
                  <div style={{ display: "flex" }}>
                    <div className={styles.imag}>
                      <img src={rasm} />
                    </div>
                    <div className={styles.yozuv}>
                      <h1>O‘zbekistonda Etnosport uyushmasi tashkil etildi</h1>
                      <p className={styles.dat}>
                        <i className="fa fa-calendar"></i>
                        10.10.2021 yil
                      </p>
                    </div>
                  </div>
                  <div className={styles.yozuv}>
                    <p className={styles.text}>
                      Turizm va sport vazirligi tomonidan tashkil etilgan
                      tadbirni O‘zbekiston Respublikasi Bosh vaziri o‘rinbosari,
                      Turizm va sport vaziri Aziz Abduhakimov, Butunjahon
                      etnosport konfederatsiyasi raisi Nejmeddin Bilol Erdo‘g‘on
                      ochib berdi. – O‘zbekistonda milliy sport turlarini
                      rivojlantirish va ommalashtirish, nomoddiy madaniy merosni
                      asrab-avaylash, shuningdek, O‘zbekiston aholisi o‘rtasida
                      jismoniy tarbiya va sportni rivojlantirishga alohida
                      e’tibor qaratilayotgani rahbariyat tomonidan ilgari
                      surilayotgan muhim yo‘nalishlardan biridir.
                      davlatimizning. Shu maqsadda va shiori ostida xalqaro
                      konferensiya tashkil etildi “O‘zbekistonni etnosport va
                      milliy qadriyatlar orqali kashf et!”. Milliy o‘yinlar
                      azal-azaldan davlatlarning shakllanishida, qabila va
                      elatlarning birlashuvida, shuningdek, odamlarni himoya
                      qilishda muhim ahamiyatga ega bo‘lgan. Bugungi kunda xalq
                      o‘yinlariga e’tiborni kuchaytirish, ularni yoshlar
                      o‘rtasida ommalashtirish insonni jismonan sog‘lom,
                      matonatli, sabr-toqatli, sezgir, ma’nan yetuk bo‘lib
                      yetishishi uchun aholi salomatligini mustahkamlashga katta
                      hissa qo‘shadi. Xalq tarixining ming yillar davomida
                      shakllanganligi uning moddiy-madaniy boyligi,
                      etnografiyasida o‘z ifodasini topadi. Shuning uchun
                      fursatdan foydalanib, O‘zbekiston etnosport
                      assotsiatsiyasi ochilganini e’lon qilmoqchiman”, — dedi
                      Aziz Abduhakimov.
                    </p>
                  </div>
                </Container>
              </div>
            </Panel>

            <Panel
              className={styles.panel}
              header={
                <p style={{ color: "white" }}>
                  O‘zbekistonda Etnosport uyushmasi tashkil etildi
                </p>
              }
            >
              <div>
                <Container>
                  <div style={{ display: "flex" }}>
                    <div className={styles.imag}>
                      <img src={rasm} />
                    </div>
                    <div className={styles.yozuv}>
                      <h1>O‘zbekistonda Etnosport uyushmasi tashkil etildi</h1>
                      <p className={styles.dat}>
                        <i className="fa fa-calendar"></i>
                        10.10.2021 yil
                      </p>
                    </div>
                  </div>
                  <div className={styles.yozuv}>
                    <p className={styles.text}>
                      Turizm va sport vazirligi tomonidan tashkil etilgan
                      tadbirni O‘zbekiston Respublikasi Bosh vaziri o‘rinbosari,
                      Turizm va sport vaziri Aziz Abduhakimov, Butunjahon
                      etnosport konfederatsiyasi raisi Nejmeddin Bilol Erdo‘g‘on
                      ochib berdi. – O‘zbekistonda milliy sport turlarini
                      rivojlantirish va ommalashtirish, nomoddiy madaniy merosni
                      asrab-avaylash, shuningdek, O‘zbekiston aholisi o‘rtasida
                      jismoniy tarbiya va sportni rivojlantirishga alohida
                      e’tibor qaratilayotgani rahbariyat tomonidan ilgari
                      surilayotgan muhim yo‘nalishlardan biridir.
                      davlatimizning. Shu maqsadda va shiori ostida xalqaro
                      konferensiya tashkil etildi “O‘zbekistonni etnosport va
                      milliy qadriyatlar orqali kashf et!”. Milliy o‘yinlar
                      azal-azaldan davlatlarning shakllanishida, qabila va
                      elatlarning birlashuvida, shuningdek, odamlarni himoya
                      qilishda muhim ahamiyatga ega bo‘lgan. Bugungi kunda xalq
                      o‘yinlariga e’tiborni kuchaytirish, ularni yoshlar
                      o‘rtasida ommalashtirish insonni jismonan sog‘lom,
                      matonatli, sabr-toqatli, sezgir, ma’nan yetuk bo‘lib
                      yetishishi uchun aholi salomatligini mustahkamlashga katta
                      hissa qo‘shadi. Xalq tarixining ming yillar davomida
                      shakllanganligi uning moddiy-madaniy boyligi,
                      etnografiyasida o‘z ifodasini topadi. Shuning uchun
                      fursatdan foydalanib, O‘zbekiston etnosport
                      assotsiatsiyasi ochilganini e’lon qilmoqchiman”, — dedi
                      Aziz Abduhakimov.
                    </p>
                  </div>
                </Container>
              </div>
            </Panel>

            <Panel
              className={styles.panel}
              header={
                <p style={{ color: "white" }}>
                  O‘zbekistonda Etnosport uyushmasi tashkil etildi
                </p>
              }
            >
              <div>
                <Container>
                  <div style={{ display: "flex" }}>
                    <div className={styles.imag}>
                      <img src={rasm} />
                    </div>
                    <div className={styles.yozuv}>
                      <h1>O‘zbekistonda Etnosport uyushmasi tashkil etildi</h1>
                      <p className={styles.dat}>
                        <i className="fa fa-calendar"></i>
                        10.10.2021 yil
                      </p>
                    </div>
                  </div>
                  <div className={styles.yozuv}>
                    <p className={styles.text}>
                      Turizm va sport vazirligi tomonidan tashkil etilgan
                      tadbirni O‘zbekiston Respublikasi Bosh vaziri o‘rinbosari,
                      Turizm va sport vaziri Aziz Abduhakimov, Butunjahon
                      etnosport konfederatsiyasi raisi Nejmeddin Bilol Erdo‘g‘on
                      ochib berdi. – O‘zbekistonda milliy sport turlarini
                      rivojlantirish va ommalashtirish, nomoddiy madaniy merosni
                      asrab-avaylash, shuningdek, O‘zbekiston aholisi o‘rtasida
                      jismoniy tarbiya va sportni rivojlantirishga alohida
                      e’tibor qaratilayotgani rahbariyat tomonidan ilgari
                      surilayotgan muhim yo‘nalishlardan biridir.
                      davlatimizning. Shu maqsadda va shiori ostida xalqaro
                      konferensiya tashkil etildi “O‘zbekistonni etnosport va
                      milliy qadriyatlar orqali kashf et!”. Milliy o‘yinlar
                      azal-azaldan davlatlarning shakllanishida, qabila va
                      elatlarning birlashuvida, shuningdek, odamlarni himoya
                      qilishda muhim ahamiyatga ega bo‘lgan. Bugungi kunda xalq
                      o‘yinlariga e’tiborni kuchaytirish, ularni yoshlar
                      o‘rtasida ommalashtirish insonni jismonan sog‘lom,
                      matonatli, sabr-toqatli, sezgir, ma’nan yetuk bo‘lib
                      yetishishi uchun aholi salomatligini mustahkamlashga katta
                      hissa qo‘shadi. Xalq tarixining ming yillar davomida
                      shakllanganligi uning moddiy-madaniy boyligi,
                      etnografiyasida o‘z ifodasini topadi. Shuning uchun
                      fursatdan foydalanib, O‘zbekiston etnosport
                      assotsiatsiyasi ochilganini e’lon qilmoqchiman”, — dedi
                      Aziz Abduhakimov.
                    </p>
                  </div>
                </Container>
              </div>
            </Panel>

            <Panel
              className={styles.panel}
              header={
                <p style={{ color: "white" }}>
                  O‘zbekistonda Etnosport uyushmasi tashkil etildi
                </p>
              }
            >
              <div>
                <Container>
                  <div style={{ display: "flex" }}>
                    <div className={styles.imag}>
                      <img src={rasm} />
                    </div>
                    <div className={styles.yozuv}>
                      <h1>O‘zbekistonda Etnosport uyushmasi tashkil etildi</h1>
                      <p className={styles.dat}>
                        <i className="fa fa-calendar"></i>
                        10.10.2021 yil
                      </p>
                    </div>
                  </div>
                  <div className={styles.yozuv}>
                    <p className={styles.text}>
                      Turizm va sport vazirligi tomonidan tashkil etilgan
                      tadbirni O‘zbekiston Respublikasi Bosh vaziri o‘rinbosari,
                      Turizm va sport vaziri Aziz Abduhakimov, Butunjahon
                      etnosport konfederatsiyasi raisi Nejmeddin Bilol Erdo‘g‘on
                      ochib berdi. – O‘zbekistonda milliy sport turlarini
                      rivojlantirish va ommalashtirish, nomoddiy madaniy merosni
                      asrab-avaylash, shuningdek, O‘zbekiston aholisi o‘rtasida
                      jismoniy tarbiya va sportni rivojlantirishga alohida
                      e’tibor qaratilayotgani rahbariyat tomonidan ilgari
                      surilayotgan muhim yo‘nalishlardan biridir.
                      davlatimizning. Shu maqsadda va shiori ostida xalqaro
                      konferensiya tashkil etildi “O‘zbekistonni etnosport va
                      milliy qadriyatlar orqali kashf et!”. Milliy o‘yinlar
                      azal-azaldan davlatlarning shakllanishida, qabila va
                      elatlarning birlashuvida, shuningdek, odamlarni himoya
                      qilishda muhim ahamiyatga ega bo‘lgan. Bugungi kunda xalq
                      o‘yinlariga e’tiborni kuchaytirish, ularni yoshlar
                      o‘rtasida ommalashtirish insonni jismonan sog‘lom,
                      matonatli, sabr-toqatli, sezgir, ma’nan yetuk bo‘lib
                      yetishishi uchun aholi salomatligini mustahkamlashga katta
                      hissa qo‘shadi. Xalq tarixining ming yillar davomida
                      shakllanganligi uning moddiy-madaniy boyligi,
                      etnografiyasida o‘z ifodasini topadi. Shuning uchun
                      fursatdan foydalanib, O‘zbekiston etnosport
                      assotsiatsiyasi ochilganini e’lon qilmoqchiman”, — dedi
                      Aziz Abduhakimov.
                    </p>
                  </div>
                </Container>
              </div>
            </Panel>

            <Panel
              className={styles.panel}
              header={
                <p style={{ color: "white" }}>
                  O‘zbekistonda Etnosport uyushmasi tashkil etildi
                </p>
              }
            >
              <div>
                <Container>
                  <div style={{ display: "flex" }}>
                    <div className={styles.imag}>
                      <img src={rasm} />
                    </div>
                    <div className={styles.yozuv}>
                      <h1>O‘zbekistonda Etnosport uyushmasi tashkil etildi</h1>
                      <p className={styles.dat}>
                        <i className="fa fa-calendar"></i>
                        10.10.2021 yil
                      </p>
                    </div>
                  </div>
                  <div className={styles.yozuv}>
                    <p className={styles.text}>
                      Turizm va sport vazirligi tomonidan tashkil etilgan
                      tadbirni O‘zbekiston Respublikasi Bosh vaziri o‘rinbosari,
                      Turizm va sport vaziri Aziz Abduhakimov, Butunjahon
                      etnosport konfederatsiyasi raisi Nejmeddin Bilol Erdo‘g‘on
                      ochib berdi. – O‘zbekistonda milliy sport turlarini
                      rivojlantirish va ommalashtirish, nomoddiy madaniy merosni
                      asrab-avaylash, shuningdek, O‘zbekiston aholisi o‘rtasida
                      jismoniy tarbiya va sportni rivojlantirishga alohida
                      e’tibor qaratilayotgani rahbariyat tomonidan ilgari
                      surilayotgan muhim yo‘nalishlardan biridir.
                      davlatimizning. Shu maqsadda va shiori ostida xalqaro
                      konferensiya tashkil etildi “O‘zbekistonni etnosport va
                      milliy qadriyatlar orqali kashf et!”. Milliy o‘yinlar
                      azal-azaldan davlatlarning shakllanishida, qabila va
                      elatlarning birlashuvida, shuningdek, odamlarni himoya
                      qilishda muhim ahamiyatga ega bo‘lgan. Bugungi kunda xalq
                      o‘yinlariga e’tiborni kuchaytirish, ularni yoshlar
                      o‘rtasida ommalashtirish insonni jismonan sog‘lom,
                      matonatli, sabr-toqatli, sezgir, ma’nan yetuk bo‘lib
                      yetishishi uchun aholi salomatligini mustahkamlashga katta
                      hissa qo‘shadi. Xalq tarixining ming yillar davomida
                      shakllanganligi uning moddiy-madaniy boyligi,
                      etnografiyasida o‘z ifodasini topadi. Shuning uchun
                      fursatdan foydalanib, O‘zbekiston etnosport
                      assotsiatsiyasi ochilganini e’lon qilmoqchiman”, — dedi
                      Aziz Abduhakimov.
                    </p>
                  </div>
                </Container>
              </div>
            </Panel>

            <Panel
              className={styles.panel}
              header={
                <p style={{ color: "white" }}>
                  O‘zbekistonda Etnosport uyushmasi tashkil etildi
                </p>
              }
            >
              <div>
                <Container>
                  <div style={{ display: "flex" }}>
                    <div className={styles.imag}>
                      <img src={rasm} />
                    </div>
                    <div className={styles.yozuv}>
                      <h1>O‘zbekistonda Etnosport uyushmasi tashkil etildi</h1>
                      <p className={styles.dat}>
                        <i className="fa fa-calendar"></i>
                        10.10.2021 yil
                      </p>
                    </div>
                  </div>
                  <div className={styles.yozuv}>
                    <p className={styles.text}>
                      Turizm va sport vazirligi tomonidan tashkil etilgan
                      tadbirni O‘zbekiston Respublikasi Bosh vaziri o‘rinbosari,
                      Turizm va sport vaziri Aziz Abduhakimov, Butunjahon
                      etnosport konfederatsiyasi raisi Nejmeddin Bilol Erdo‘g‘on
                      ochib berdi. – O‘zbekistonda milliy sport turlarini
                      rivojlantirish va ommalashtirish, nomoddiy madaniy merosni
                      asrab-avaylash, shuningdek, O‘zbekiston aholisi o‘rtasida
                      jismoniy tarbiya va sportni rivojlantirishga alohida
                      e’tibor qaratilayotgani rahbariyat tomonidan ilgari
                      surilayotgan muhim yo‘nalishlardan biridir.
                      davlatimizning. Shu maqsadda va shiori ostida xalqaro
                      konferensiya tashkil etildi “O‘zbekistonni etnosport va
                      milliy qadriyatlar orqali kashf et!”. Milliy o‘yinlar
                      azal-azaldan davlatlarning shakllanishida, qabila va
                      elatlarning birlashuvida, shuningdek, odamlarni himoya
                      qilishda muhim ahamiyatga ega bo‘lgan. Bugungi kunda xalq
                      o‘yinlariga e’tiborni kuchaytirish, ularni yoshlar
                      o‘rtasida ommalashtirish insonni jismonan sog‘lom,
                      matonatli, sabr-toqatli, sezgir, ma’nan yetuk bo‘lib
                      yetishishi uchun aholi salomatligini mustahkamlashga katta
                      hissa qo‘shadi. Xalq tarixining ming yillar davomida
                      shakllanganligi uning moddiy-madaniy boyligi,
                      etnografiyasida o‘z ifodasini topadi. Shuning uchun
                      fursatdan foydalanib, O‘zbekiston etnosport
                      assotsiatsiyasi ochilganini e’lon qilmoqchiman”, — dedi
                      Aziz Abduhakimov.
                    </p>
                  </div>
                </Container>
              </div>
            </Panel>

            <Panel
              className={styles.panel}
              header={
                <p style={{ color: "white" }}>
                  O‘zbekistonda Etnosport uyushmasi tashkil etildi
                </p>
              }
            >
              <div>
                <Container>
                  <div style={{ display: "flex" }}>
                    <div className={styles.imag}>
                      <img src={rasm} />
                    </div>
                    <div className={styles.yozuv}>
                      <h1>O‘zbekistonda Etnosport uyushmasi tashkil etildi</h1>
                      <p className={styles.dat}>
                        <i className="fa fa-calendar"></i>
                        10.10.2021 yil
                      </p>
                    </div>
                  </div>
                  <div className={styles.yozuv}>
                    <p className={styles.text}>
                      Turizm va sport vazirligi tomonidan tashkil etilgan
                      tadbirni O‘zbekiston Respublikasi Bosh vaziri o‘rinbosari,
                      Turizm va sport vaziri Aziz Abduhakimov, Butunjahon
                      etnosport konfederatsiyasi raisi Nejmeddin Bilol Erdo‘g‘on
                      ochib berdi. – O‘zbekistonda milliy sport turlarini
                      rivojlantirish va ommalashtirish, nomoddiy madaniy merosni
                      asrab-avaylash, shuningdek, O‘zbekiston aholisi o‘rtasida
                      jismoniy tarbiya va sportni rivojlantirishga alohida
                      e’tibor qaratilayotgani rahbariyat tomonidan ilgari
                      surilayotgan muhim yo‘nalishlardan biridir.
                      davlatimizning. Shu maqsadda va shiori ostida xalqaro
                      konferensiya tashkil etildi “O‘zbekistonni etnosport va
                      milliy qadriyatlar orqali kashf et!”. Milliy o‘yinlar
                      azal-azaldan davlatlarning shakllanishida, qabila va
                      elatlarning birlashuvida, shuningdek, odamlarni himoya
                      qilishda muhim ahamiyatga ega bo‘lgan. Bugungi kunda xalq
                      o‘yinlariga e’tiborni kuchaytirish, ularni yoshlar
                      o‘rtasida ommalashtirish insonni jismonan sog‘lom,
                      matonatli, sabr-toqatli, sezgir, ma’nan yetuk bo‘lib
                      yetishishi uchun aholi salomatligini mustahkamlashga katta
                      hissa qo‘shadi. Xalq tarixining ming yillar davomida
                      shakllanganligi uning moddiy-madaniy boyligi,
                      etnografiyasida o‘z ifodasini topadi. Shuning uchun
                      fursatdan foydalanib, O‘zbekiston etnosport
                      assotsiatsiyasi ochilganini e’lon qilmoqchiman”, — dedi
                      Aziz Abduhakimov.
                    </p>
                  </div>
                </Container>
              </div>
            </Panel>
            <Panel
              className={styles.panel}
              header={
                <p style={{ color: "white" }}>
                  O‘zbekistonda Etnosport uyushmasi tashkil etildi
                </p>
              }
            >
              <div>
                <Container>
                  <div style={{ display: "flex" }}>
                    <div className={styles.imag}>
                      <img src={rasm} />
                    </div>
                    <div className={styles.yozuv}>
                      <h1>O‘zbekistonda Etnosport uyushmasi tashkil etildi</h1>
                      <p className={styles.dat}>
                        <i className="fa fa-calendar"></i>
                        10.10.2021 yil
                      </p>
                    </div>
                  </div>
                  <div className={styles.yozuv}>
                    <p className={styles.text}>
                      Turizm va sport vazirligi tomonidan tashkil etilgan
                      tadbirni O‘zbekiston Respublikasi Bosh vaziri o‘rinbosari,
                      Turizm va sport vaziri Aziz Abduhakimov, Butunjahon
                      etnosport konfederatsiyasi raisi Nejmeddin Bilol Erdo‘g‘on
                      ochib berdi. – O‘zbekistonda milliy sport turlarini
                      rivojlantirish va ommalashtirish, nomoddiy madaniy merosni
                      asrab-avaylash, shuningdek, O‘zbekiston aholisi o‘rtasida
                      jismoniy tarbiya va sportni rivojlantirishga alohida
                      e’tibor qaratilayotgani rahbariyat tomonidan ilgari
                      surilayotgan muhim yo‘nalishlardan biridir.
                      davlatimizning. Shu maqsadda va shiori ostida xalqaro
                      konferensiya tashkil etildi “O‘zbekistonni etnosport va
                      milliy qadriyatlar orqali kashf et!”. Milliy o‘yinlar
                      azal-azaldan davlatlarning shakllanishida, qabila va
                      elatlarning birlashuvida, shuningdek, odamlarni himoya
                      qilishda muhim ahamiyatga ega bo‘lgan. Bugungi kunda xalq
                      o‘yinlariga e’tiborni kuchaytirish, ularni yoshlar
                      o‘rtasida ommalashtirish insonni jismonan sog‘lom,
                      matonatli, sabr-toqatli, sezgir, ma’nan yetuk bo‘lib
                      yetishishi uchun aholi salomatligini mustahkamlashga katta
                      hissa qo‘shadi. Xalq tarixining ming yillar davomida
                      shakllanganligi uning moddiy-madaniy boyligi,
                      etnografiyasida o‘z ifodasini topadi. Shuning uchun
                      fursatdan foydalanib, O‘zbekiston etnosport
                      assotsiatsiyasi ochilganini e’lon qilmoqchiman”, — dedi
                      Aziz Abduhakimov.
                    </p>
                  </div>
                </Container>
              </div>
            </Panel>

            <Panel
              className={styles.panel}
              header={
                <p style={{ color: "white" }}>
                  O‘zbekistonda Etnosport uyushmasi tashkil etildi
                </p>
              }
            >
              <div>
                <Container>
                  <div style={{ display: "flex" }}>
                    <div className={styles.imag}>
                      <img src={rasm} />
                    </div>
                    <div className={styles.yozuv}>
                      <h1>O‘zbekistonda Etnosport uyushmasi tashkil etildi</h1>
                      <p className={styles.dat}>
                        <i className="fa fa-calendar"></i>
                        10.10.2021 yil
                      </p>
                    </div>
                  </div>
                  <div className={styles.yozuv}>
                    <p className={styles.text}>
                      Turizm va sport vazirligi tomonidan tashkil etilgan
                      tadbirni O‘zbekiston Respublikasi Bosh vaziri o‘rinbosari,
                      Turizm va sport vaziri Aziz Abduhakimov, Butunjahon
                      etnosport konfederatsiyasi raisi Nejmeddin Bilol Erdo‘g‘on
                      ochib berdi. – O‘zbekistonda milliy sport turlarini
                      rivojlantirish va ommalashtirish, nomoddiy madaniy merosni
                      asrab-avaylash, shuningdek, O‘zbekiston aholisi o‘rtasida
                      jismoniy tarbiya va sportni rivojlantirishga alohida
                      e’tibor qaratilayotgani rahbariyat tomonidan ilgari
                      surilayotgan muhim yo‘nalishlardan biridir.
                      davlatimizning. Shu maqsadda va shiori ostida xalqaro
                      konferensiya tashkil etildi “O‘zbekistonni etnosport va
                      milliy qadriyatlar orqali kashf et!”. Milliy o‘yinlar
                      azal-azaldan davlatlarning shakllanishida, qabila va
                      elatlarning birlashuvida, shuningdek, odamlarni himoya
                      qilishda muhim ahamiyatga ega bo‘lgan. Bugungi kunda xalq
                      o‘yinlariga e’tiborni kuchaytirish, ularni yoshlar
                      o‘rtasida ommalashtirish insonni jismonan sog‘lom,
                      matonatli, sabr-toqatli, sezgir, ma’nan yetuk bo‘lib
                      yetishishi uchun aholi salomatligini mustahkamlashga katta
                      hissa qo‘shadi. Xalq tarixining ming yillar davomida
                      shakllanganligi uning moddiy-madaniy boyligi,
                      etnografiyasida o‘z ifodasini topadi. Shuning uchun
                      fursatdan foydalanib, O‘zbekiston etnosport
                      assotsiatsiyasi ochilganini e’lon qilmoqchiman”, — dedi
                      Aziz Abduhakimov.
                    </p>
                  </div>
                </Container>
              </div>
            </Panel>
          </Collapse>
        </div>
        <Footer />
      </div>
    );
  }
}
