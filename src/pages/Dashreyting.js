import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import style from '../css/Dashreyting.module.css' 
export default class Dashreyting extends Component {
    render() {
        return (
            <div>
               <Container>
                   <h1 className={style.reyh1}> O'zbekiston Respublikasida kiber sportni rivojlantirish bo'yicha mahallalar reytengi</h1>
                <ul className={style.rey}>
                <li>
                        <p className={style.p1}>
                            1-o'rin
                        </p>
                        
                        <p className={style.p2}>
                            Buxoro viloyati Qorovulbozor tumani Imom Buxoriy MFY
                        </p>
                        <p className={style.p3}>
                            95 %
                        </p>
                    </li>
                    <li>
                        <p className={style.p1}>
                            2-o'rin
                        </p>
                        
                        <p className={style.p2}>
                            Andijon viloyati Pop tumani Tinchlik MFY
                        </p>
                        <p className={style.p3}>
                            90 %
                        </p>
                    </li>
                    <li>
                        <p className={style.p1}>
                            3-o'rin
                        </p>
                        
                        <p className={style.p2}>
                            Toshkent Shahar Yakkasaroy tumani Yakkasaroy MFY
                        </p>
                        <p className={style.p3}>
                            93 %
                        </p>
                    </li>
                    <li>
                        <p className={style.p1}>
                            4-o'rin
                        </p>
                        
                        <p className={style.p2}>
                            Qashqadaryo viloyati Muborak tumani Vatanparvar MFY
                        </p>
                        <p className={style.p3}>
                            85 %
                        </p>
                    </li>
                    <li>
                        <p className={style.p1}>
                            5-o'rin
                        </p>
                        
                        <p className={style.p2}>
                            Surxandaryo viloyati Denov tumani Rohat MFY
                        </p>
                        <p className={style.p3}>
                            84.5 %
                        </p>
                    </li>
                   
                </ul>
                <button className={style.hamma}>Hammasini ko'rish</button>
                </Container>
            </div>
        )
    }
}
