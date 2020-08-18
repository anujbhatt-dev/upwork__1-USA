 import React, {Component} from "react"
import landscape1 from "../../../assets/images/landscape1.jpg"
import landscape2 from "../../../assets/images/landscape2.jpg"
import landscape3 from "../../../assets/images/landscape3.jpg"
import Aos from "aos"
import "aos/dist/aos.css"

 class Landing extends Component{


   componentDidMount=()=>{
    Aos.init({duration:2000,delay:1000})
  }
  componentDidUpdate=()=>{
    Aos.init({duration:2000,delay:1000})
  }

   render(){

     return (
          <div className="landing">
              <div id="div1" className="landing__item landing__item--1">
                   <img className="landing__item-image" src={landscape1} alt="landscape"/>
                   <div data-aos="fade-down" className="landing__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, amet!</div>
              </div>
              <div id="div2" className="landing__item landing__item--2">
                  <img className="landing__item-image" src={landscape2} alt="person swimming"/>
                  <div data-aos="fade-down" className="landing__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, amet!</div>
              </div>
              <div id="div11" className="landing__item landing__item--11">
                   <div data-aos="fade-down" className="landing__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, amet!</div>
              </div>
              <div id="div22" className="landing__item landing__item--22">
                   <div data-aos="fade-down" className="landing__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, amet!</div>
              </div>
              <div id="div3" className="landing__item landing__item--3">
                  <img className="landing__item-image" src={landscape3} alt="foggy river"/>
                  <div data-aos="fade-down" className="landing__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, amet!</div>
              </div>
              <div id="div33" className="landing__item landing__item--33">
                   <div data-aos="fade-down" className="landing__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, amet!</div>
              </div>
              <div id="div4" className="landing__item landing__item--4">
                  <img className="landing__item-image" src={landscape3} alt="foggy river"/>
                  <div data-aos="fade-down" className="landing__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, amet!</div>
              </div>
          </div>
     )
   }
 }


export default Landing;