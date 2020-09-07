import React, {Component} from "react"
import landscape1 from "../../../assets/images/landscape1.jpg"
import landscape2 from "../../../assets/images/landscape2.jpg"
import landscape2mob from "../../../assets/images/landscape2-mobile.jpg"
import landscape4 from "../../../assets/images/landscape4.jpg"
import landscape5 from "../../../assets/images/landscape5.jpg"
import $ from "jquery"
import Aos from "aos"
import "aos/dist/aos.css"

 class Landing extends Component{

    state= {
      height:"",
      width:"",
      img:false
    }

   componentDidMount=()=>{

     let mylet=setTimeout(()=>{
       $('html, body').animate({
             scrollTop: $("#screen2").offset().top
         }, 500);
     }, 10000);
     let mylet2=setTimeout(()=>{
       $('html, body').animate({
             scrollTop: $("#screen3").offset().top
         }, 500);
     }, 20000);
     let mylet3=setTimeout(()=>{
       $('html, body').animate({
             scrollTop: $("#screen4").offset().top
         }, 500);
     }, 30000);
     let mylet4=setTimeout(()=>{
       $('html, body').animate({
             scrollTop: $("#screen5").offset().top
         }, 500);
     }, 40000);


     document.addEventListener("wheel", ()=>{
       clearTimeout(mylet)
       clearTimeout(mylet2)
       clearTimeout(mylet3)
       clearTimeout(mylet4)
     })

     document.addEventListener("touchmove", ()=>{
       clearTimeout(mylet)
       clearTimeout(mylet2)
       clearTimeout(mylet3)
       clearTimeout(mylet4)
     })

    if(window.innerWidth<=700){
      this.setState({
        img:true
      })
    }

    Aos.init({duration:2000,delay:100})
    let lastScrollTop = 0;
    let viewportHeight = $("#screen1").innerHeight()
  }



  componentDidUpdate=()=>{
    Aos.init({duration:2000,delay:100})
  }

   render(){

     return (
          <div className="landing">
              <div id="screen1" className="landing__item landing__item--1">
                   <img className="landing__item-image" src={landscape1} alt="landscape"/>
                   <div data-aos="fade-down" className="landing__item-text">There is one,<br/>SINGLE question<br/>that is fundamental<br/>to how you live your life...</div>
              </div>
              <div id="screen2" className="landing__item landing__item--2">
                  {this.state.img?<img className="landing__item-image" src={landscape2mob} alt="person swimming"/>:<img className="landing__item-image" src={landscape2} alt="person swimming"/>}
                  <div data-aos="fade-down" className="landing__item-text">
                      <span data-aos="fade-down" className="landing__item-text-span1">Avoiding it<br/>is the easier option...</span><br/>
                      <span data-aos="fade-up" data-aos-delay={2100} className="landing__item-text-span2">but means ignoring<br/>your reality, existence<br/>and the meaning of it all.</span>
                  </div>
              </div>
              <div id="screen3" className="landing__item landing__item--3">
                  <img className="landing__item-image" src={landscape4} alt="foggy river"/>
                  <div data-aos="fade-down" className="landing__item-text">
                      <span data-aos="fade-down" className="landing__item-text-span1">Facing it<br/>is the harder choice...</span><br/>
                      <span data-aos="fade-down" data-aos-delay={2000} className="landing__item-text-span1">It requires<br/>thought and courage...</span><br/>
                      <span data-aos="fade-up" data-aos-delay={2900} className="landing__item-text-span2">But it gives your life<br/>clarity and definition.</span>
                  </div>
              </div>
              <div id="screen4" className="landing__item landing__item--33">
                  <div data-aos="fade-down" className="landing__item-text">
                       <span data-aos="fade-down" className="landing__item-text-span1">Make the right decision.</span><br/>
                       <span data-aos="fade-up" data-aos-delay={1100} className="landing__item-text-span1">Don't be lazy.</span><br/>
                       <span data-aos="fade-up" data-aos-delay={2100} className="landing__item-text-span2">Ask yourself THE question !</span>
                  </div>
              </div>
              <div id="screen5" className="landing__item landing__item--4">
                  <img className="landing__item-image" src={landscape5} alt="foggy river"/>
                  <div data-aos="fade-down" className="landing__item-text">
                      <span data-aos="fade-down" data-aos-delay={1500} className="landing__item-text-span2">DO YOU BELIEVE<br/>IN GOD?</span>
                  </div>
                  <button data-aos="fade-up"  data-aos-delay={3000} onClick={()=>{window.location=
                                   "http://peaceful-temple-48896.herokuapp.com/map"
                              }} className="landing__item-button">Decide Here</button>
              </div>
          </div>
     )
   }
 }


export default Landing;
