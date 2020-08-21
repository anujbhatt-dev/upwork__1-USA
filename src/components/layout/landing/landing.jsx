import React, {Component} from "react"
import landscape1 from "../../../assets/images/landscape1.jpg"
import landscape2 from "../../../assets/images/landscape2.jpg"
// import landscape3 from "../../../assets/images/landscape3.jpg"
import landscape4 from "../../../assets/images/landscape4.jpg"
import landscape5 from "../../../assets/images/landscape5.jpg"
// import pic1 from "../../../assets/images/pic1.jpg"
// import pic2 from "../../../assets/images/pic2.jpg"
// import pic3 from "../../../assets/images/pic3.jpg"

// import {Link} from "react-router-dom"
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

     // <button data-aos="fade-down" onClick={()=>{window.location="https://ancient-woodland-30225.herokuapp.com/map"}} className="landing__item-button">Sign petition</button>
     //
     //
     // <div id="div11" className="landing__item landing__item--11">
     //      <img className="landing__item-image1" src={pic1} alt="foggy river"/>
     //      <div data-aos="fade-down" className="landing__item-text"><i className="quote-left fa fa-quote-left" aria-hidden="true"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, amet!<i className="quote-left fa fa-quote-right" aria-hidden="true"></i></div>
     // </div>
     // <div id="div22" className="landing__item landing__item--22">
     //      <div data-aos="fade-down" className="landing__item-text"><i className="quote-left fa fa-quote-left" aria-hidden="true"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, amet!<i className="quote-left fa fa-quote-right" aria-hidden="true"></i></div>
     //      <img className="landing__item-image2" src={pic2} alt="foggy river"/>
     // </div>
     //
     //<img className="landing__item-image3" src={pic3} alt="foggy river"/>
     //
     // <span data-aos="fade-down" className="landing__item-text-span1">Ask yourself a question !</span>
     //
     return (
          <div className="landing">
              <div id="div1" className="landing__item landing__item--1">
                   <img className="landing__item-image" src={landscape1} alt="landscape"/>
                   <div data-aos="fade-down" className="landing__item-text"><i className="quote-left fa fa-quote-left" aria-hidden="true"></i>There is one single question that is fundamental to how you live your life<i className="quote-left fa fa-quote-right" aria-hidden="true"></i></div>
              </div>
              <div id="div2" className="landing__item landing__item--2">
                  <img className="landing__item-image" src={landscape2} alt="person swimming"/>
                  <div data-aos="fade-down" className="landing__item-text">
                      <span data-aos="fade-down" className="landing__item-text-span1"><i className="quote-left fa fa-quote-left" aria-hidden="true"></i>Avoiding it is the easy and lazy choice </span><br/>
                      <span data-aos="fade-up" data-aos-delay={2100} className="landing__item-text-span2">but is a decision to ignore your very existence and the meaning of your life<i className="quote-left fa fa-quote-right" aria-hidden="true"></i></span>
                  </div>
              </div>
              <div id="div3" className="landing__item landing__item--3">
                  <img className="landing__item-image" src={landscape4} alt="foggy river"/>
                  <div data-aos="fade-down" className="landing__item-text">
                      <span data-aos="fade-down" className="landing__item-text-span1"><i className="quote-left fa fa-quote-left" aria-hidden="true"></i>Facing it is harder and requires thought and courage</span><br/>
                      <span data-aos="fade-up" data-aos-delay={2100} className="landing__item-text-span2">but it gives your life clarity and definition<i className="quote-left fa fa-quote-right" aria-hidden="true"></i></span>
                  </div>
              </div>
              <div id="div33" className="landing__item landing__item--33">
                  <div data-aos="fade-down" className="landing__item-text">
                       <span data-aos="fade-down" className="landing__item-text-span1"><i className="quote-left fa fa-quote-left" aria-hidden="true"></i>Make the right choice</span><br/>
                       <span data-aos="fade-up" data-aos-delay={2100} className="landing__item-text-span2">Ask yourself a question !<i className="quote-left fa fa-quote-right" aria-hidden="true"></i></span>
                  </div>
              </div>
              <div id="div4" className="landing__item landing__item--4">
                  <img className="landing__item-image" src={landscape5} alt="foggy river"/>
                  <div data-aos="fade-down" className="landing__item-text">
                      <span data-aos="fade-down" data-aos-delay={1500} className="landing__item-text-span2">DO YOU BELEIVE IN GOD ?</span>
                  </div>
                  <button data-aos="fade-up"  data-aos-delay={3000} onClick={()=>{window.location="https://ancient-woodland-30225.herokuapp.com/map"}} className="landing__item-button">Decide Here</button>
              </div>
          </div>
     )
   }
 }


export default Landing;
