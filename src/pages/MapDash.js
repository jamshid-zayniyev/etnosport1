import { vil } from "./MapViloyatlar";
import style from '../css/MapDash.module.css'
import '../css/map.scss'
import { useState } from "react";
import { Modal } from "antd";
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
                        <Modal footer={false} title={modalData!==null?modalData.name:''} visible={show} onCancel={()=>{setShow(false)}}>
     <ul>
         <li>
             
         </li>
     </ul>
      </Modal>
        </div>
    );
}

