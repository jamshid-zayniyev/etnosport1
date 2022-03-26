// import { vil } from "./MapViloyatlar";
import style from '../css/MapDash.module.css'
import '../css/map.scss'
import { useState } from "react";
import { Modal } from "antd";
import {FaUserTie, FaEnvelope} from 'react-icons/fa'
import {GiRotaryPhone} from 'react-icons/gi'
import {HiLocationMarker} from 'react-icons/hi'
// import Particles from 'react-particles-js';
// import particlesConfig from './particlesConfig';
export function MapDash(props) {
 
const [modalData, setModalData]=useState(null)
    const[show, setShow]=useState(false)
    
    return (
        <div className="maps">
            <div className="stars">
             <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  </div>
           
            <svg className={style.mapA} style={{ width: "100%", }} xmlns="http://www.w3.org/2000/svg"
                        baseProfile="tiny"
                        fill="grey" height="652" stroke="white"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" version="1.2"
                        viewBox="0 0 1000 652"
                        width="1000">
{props.regions!==null?props.regions.map((item, key)=>{
 
    return(<path key={key} 
        d={item.d}
        onClick={()=>{
            setShow(true)
            setModalData(item)
        }}
        id={item.reg_id} name={item.name}>
            </path>)
}):''}

<circle cx="673.4" cy="626" id="0">
                        </circle>
                        <circle cx="637.6" cy="506" id="1">
                        </circle>
                        <circle cx="636" cy="498.9" id="2">
                        </circle>
                        </svg>
                        <Modal footer={false} className={style.mod} title={modalData!==null?<h3>{modalData.name}</h3>:''} visible={show} onCancel={()=>{setShow(false)}}>
     <ul>
         <li>
            <FaUserTie size="1.3rem"/> <span>{ modalData!==null?modalData.boss!==null?modalData.boss:" - ":' - '}</span>
         </li>
         
         <li>
            <GiRotaryPhone size="1.3rem"/> <span>{ modalData!==null?modalData.phone!==null?modalData.phone:" - ":' - '}</span>
         </li>
         
         <li>
            <FaEnvelope size="1.3rem"/> <span>{ modalData!==null?modalData.email!==null?modalData.email:" - ":' - '}</span>
         </li>
         
         <li>
            <HiLocationMarker size="1.3rem"/> <span>{ modalData!==null?modalData.address!==null?modalData.address:" - ":' - '}</span>
         </li>
     </ul>
      </Modal>
        </div>
    );
}

