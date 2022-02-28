import React, { useState, useEffect } from "react";
import {
  YMaps,
  Map,
  Clusterer,
  Placemark,
  TypeSelector,
  ZoomControl,
  GeolocationControl,
  RouteButton,
  TrafficControl,
  GeoObject,
} from "react-yandex-maps";
import style from "../css/Dashboard.module.css";
import GridLoader from "react-spinners/GridLoader";
import person from "../img/boy.png";
import "antd/dist/antd.css";
import axios from "axios";
import { url } from "../host/Host";
import { message } from "antd";
import Footer from "./Footer";
import Header from "./Header";

export const Xarita=()=> {
  const [loading, setLoading] = useState(true);
  const [forclick, setforclick] = useState(false);
  const [village, setVillage] = useState("");
  const [data, setData] = useState([
    {params:[41.313480,69.279285],
      nomi:'1-maktab'},
      {params:[41.312962,69.278672],
        nomi:'2-maktab'},
        {params:[40.325966,69.275163],
          nomi:'3-maktab'},
          {params:[41.336433,69.275813],
            nomi:'4-maktab'},
            {params:[41.340889,69.273360],
              nomi:'5-maktab'},
              {params:[40.355859,69.278894],
                nomi:'6-maktab'},
                {params:[41.321925,69.276691],
                  nomi:'7-maktab'},
                  {params:[40.314152,69.279840],
                    nomi:'8-maktab'},
                    {params:[41.324257,69.276516],
                      nomi:'9-maktab'},
                      {params:[41.392184,69.275686],
                        nomi:'101-maktab'},
                        {params:[40.405448,69.270709],
                          nomi:'92-maktab'},
                          {params:[40.316896,69.278955],
                            nomi:'83-maktab'},
                            {params:[40.310935,69.272845],
                              nomi:'64-maktab'},
                              {params:[41.318740,69.274563],
                                nomi:'115-maktab'},
                                {params:[41.319775,69.278032],
                                  nomi:'56-maktab'},
                                  {params:[41.314693,69.274927],
                                    nomi:'47-maktab'},
                                    {params:[41.318385,69.278682],
                                      nomi:'28-maktab'},
                                      {params:[41.319443,69.274253],
                                        nomi:'19-maktab'},
  ]);
  const [user, setUser] = useState([]);
  const [coor, setCoor] = useState([]);
  const [Points, setPoints] = useState([]);

  const [zoom, setZoom] = useState(6);

  useEffect(() => {
    // axios.get(`${url}/kg/`).then((res) => {
    //   setData(res.data);
    //   setPoints(res.data);
      // navigator.geolocation.getCurrentPosition(function (position) {
      //   setUser([position.coords.latitude, position.coords.longitude]);
      // });
    //   var coord = [];
    //   res.data.map((item) =>
    //     item.paramss !== null ? coord.push(item.paramss) : coord.push([])
    //   );
    //   setCoor(coord);
    //   setLoading(false);
    // });
    navigator.geolocation.getCurrentPosition(function (position) {
      setUser([position.coords.latitude, position.coords.longitude]);
    });
    setTimeout(()=>{
      setLoading(false);
    }, 6000)

  }, []);

  
  return (
    <>
      
     
        <Header/>
          <YMaps key={"uz_UZ"} query={{ lang: "uz_UZ" }}>
            <Map
              width="100vw"
              height="95vh"
              state={{
                center: data[0].params,
                zoom:7,
              }}
            >
              <Clusterer
                options={{
                  groupByCoordinates: false,
                }}
              >
                {data.map((info, index) => {
                  return (
                    // <a href="http://maktablar.bogot47idum.uz/" traget="_blank">
                    <Placemark
                      key={index}
                      className="placeMark"
                      geometry={
                        info.params !== null
                          ? info.params
                          : message.info("Param mavjuda emas")
                      }
                     
                      options={{
                        preset: "islands#greenDotIconWithCaption",
                        iconColor: "#aeca3b",
                        iconLayout: "default#image",
                      }}
                      properties={{
                        hintContent: `<h6><b className="personStyle">${info.nomi}</b></h6>`,
                      }}
                      modules={["geoObject.addon.hint"]}
                    />
                    // </a>
                  );
                })}
              </Clusterer>
              {isNaN(user[0]) || isNaN(user[1]) ? (
                ""
              ) : (
                <Clusterer
                  options={{
                    groupByCoordinates: false,
                  }}
                >
                  <Placemark
                    key={-1}
                    geometry={user !== null ? user : []}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: person,
                      iconImageSize: [40, 60],
                      iconImageOffset: [-1, -28],
                    }}
                    properties={{
                      hintContent: `<h6><b className="personStyle">Siz</b></h6>`,
                    }}
                    modules={["geoObject.addon.hint"]}
                  />
                </Clusterer>
              )}
              
              <GeolocationControl options={{ float: "left" }} />
              <TypeSelector options={{ float: "right" }} />
              <TrafficControl options={{ float: "right" }} />
              <RouteButton options={{ float: "right" }} />
              <ZoomControl options={{ float: "left" }} />
            </Map>
          </YMaps>
          <Footer />
       
    </>
  );
}

































