import React, {Component} from "react"
import landscape1 from "../../../assets/images/landscape1.jpg"
import landscape2 from "../../../assets/images/landscape2.jpg"
import landscape3 from "../../../assets/images/landscape3.jpg"
import landscape4 from "../../../assets/images/landscape4.jpg"
import landscape5 from "../../../assets/images/landscape5.jpg"

import {Link} from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"

 class Landing extends Component{


   componentDidMount=()=>{
    Aos.init({duration:2000,delay:100})
  }
  componentDidUpdate=()=>{
    Aos.init({duration:2000,delay:100})
  }

   render(){

     return (
          <div className="landing">
              <div id="div1" className="landing__item landing__item--1">
                   <img className="landing__item-image" src={landscape1} alt="landscape"/>
                   <div data-aos="fade-down" className="landing__item-text">There is one single question that is fundamental to how you live your life</div>

                   {/* <Link to="/map" className="landing__item-button">Sign the petition</Link> */}
                   <button data-aos="fade-down" onClick={()=>{window.location="http://localhost:3000/map"}} className="landing__item-button">Sign petition</button>

              </div>
              <div id="div2" className="landing__item landing__item--2">
                  <img className="landing__item-image" src={landscape2} alt="person swimming"/>
                  <div data-aos="fade-down" className="landing__item-text">Avoiding it is the easy and lazy choice but is a decision to ignore your very existence and the meaning of your life</div>
              </div>
              <div id="div11" className="landing__item landing__item--11">
                   <div data-aos="fade-down" className="landing__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, amet!</div>
              </div>
              <div id="div22" className="landing__item landing__item--22">
                   <div data-aos="fade-down" className="landing__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, amet!</div>
              </div>
              <div id="div3" className="landing__item landing__item--3">
                  <img className="landing__item-image" src={landscape4} alt="foggy river"/>
                  <div data-aos="fade-down" className="landing__item-text">Facing it is harder and requires thought and courage. But it gives your life clarity and definition.</div>
              </div>
              <div id="div33" className="landing__item landing__item--33">
                   <div data-aos="fade-down" className="landing__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, amet!</div>
              </div>
              <div id="div4" className="landing__item landing__item--4">
                  <img className="landing__item-image" src={landscape5} alt="foggy river"/>
                  <div data-aos="fade-down" className="landing__item-text">Ask yourself the question</div>
                  <button data-aos="fade-down" onClick={()=>{window.location="https://ancient-woodland-30225.herokuapp.com/map"}} className="landing__item-button landing__item-button-2">Sign petition</button>
              </div>
          </div>
     )
   }
 }


export default Landing;
