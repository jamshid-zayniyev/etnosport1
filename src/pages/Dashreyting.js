import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import style from '../css/Dashreyting.module.css' 
export default class Dashreyting extends Component {
    render() {
        var regions=null
        
        if(this.props.regions!==null){
             regions=this.props.regions.sort((a, b)=>{return(b.statistics-a.statistics)})
        
        }
        
        return (

            <div>
           
               <Container>
                   
                <ul className={style.rey}>
                    {regions!==null?regions.map((item, key)=>{
                        return(   <li>
                            <p className={style.p1}>
                                {key+1}-o'rin
                            </p>
                            
                            <p className={style.p2}>
                                {item.name}
                            </p>
                            <p className={style.p3}>
                                {item.statistics} %
                            </p>
                        </li>
                        )
                    }):''}
             
                   
                </ul>
                
                </Container>
            </div>
        )
    }
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  