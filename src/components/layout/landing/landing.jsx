// import pic1 from "../../../assets/images/pic1.jpg"
// import pic2 from "../../../assets/images/pic2.jpg"
// import pic3 from "../../../assets/images/pic3.jpg"
// import landscape3 from "../../../assets/images/landscape3.jpg"
// import {Link} from "react-router-dom"
import React, {Component} from "react"
import landscape1 from "../../../assets/images/landscape1.jpg"
import landscape2 from "../../../assets/images/landscape2.jpg"
import landscape4 from "../../../assets/images/landscape4.jpg"
import landscape5 from "../../../assets/images/landscape5.jpg"
import $ from "jquery"
import Aos from "aos"
import "aos/dist/aos.css"

 class Landing extends Component{

    state= {
      height:"",
      width:""
    }

   componentDidMount=()=>{

     let mylet=setTimeout(()=>{
       $('html, body').animate({
             scrollTop: $("#screen2").offset().top
         }, 500);
     }, 8000);
     let mylet2=setTimeout(()=>{
       $('html, body').animate({
             scrollTop: $("#screen3").offset().top
         }, 500);
     }, 16000);
     let mylet3=setTimeout(()=>{
       $('html, body').animate({
             scrollTop: $("#screen4").offset().top
         }, 500);
     }, 24000);
     let mylet4=setTimeout(()=>{
       $('html, body').animate({
             scrollTop: $("#screen5").offset().top
         }, 500);
     }, 32000);


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

    Aos.init({duration:2000,delay:100})
    let lastScrollTop = 0;
    let viewportHeight = $("#screen1").innerHeight()
    // $(window).scroll((e)=>{
    //    let st = $(this).scrollTop();
    //    console.log(st);
    //    let pageY = null;
    //    if (st > lastScrollTop){
    //         pageY = window.pageYOffset
    //         if(pageY>=1&& pageY<=20){
    //             window.scrollTo({top:viewportHeight, behavior:"smooth"})
    //         }else if(pageY>=viewportHeight+1 && pageY<=viewportHeight+20){
    //             window.scrollTo({top:2*viewportHeight, behavior:"smooth"})
    //         }else if(pageY>=2*viewportHeight+1 && pageY<=2*viewportHeight+20){
    //             window.scrollTo({top:3*viewportHeight, behavior:"smooth"})
    //         }else if(pageY>=3*viewportHeight+1 && pageY<=3*viewportHeight+20){
    //             window.scrollTo({top:4*viewportHeight, behavior:"smooth"})
    //         }else if(pageY>=4*viewportHeight+1 && pageY<=4*viewportHeight+20){
    //             window.scrollTo({top:5*viewportHeight, behavior:"smooth"})
    //         }
    //    } else {
    //         pageY = window.pageYOffset
    //         if(pageY>=viewportHeight-20 && pageY<=viewportHeight-1){
    //             window.scrollTo({top:0, behavior:"smooth"})
    //         }else if(pageY>=2*viewportHeight-20 && pageY<=2*viewportHeight-1){
    //             window.scrollTo({top:viewportHeight, behavior:"smooth"})
    //         }else if(pageY>=3*viewportHeight-20 && pageY<=3*viewportHeight-1){
    //             window.scrollTo({top:2*viewportHeight, behavior:"smooth"})
    //         }else if(pageY>=4*viewportHeight-20 && pageY<=4*viewportHeight-1){
    //             window.scrollTo({top:3*viewportHeight, behavior:"smooth"})
    //         }else if(pageY>=5*viewportHeight-20 && pageY<=5*viewportHeight-1){
    //             window.scrollTo({top:4*viewportHeight, behavior:"smooth"})
    //         }
    //    }
    //    lastScrollTop = st;
    // });
  }




  componentDidUpdate=()=>{
    Aos.init({duration:2000,delay:100})
  }

   render(){

     return (
          <div className="landing">
              <div id="screen1" className="landing__item landing__item--1">
                   <img className="landing__item-image" src={landscape1} alt="landscape"/>
                   <div data-aos="fade-down" className="landing__item-text">There is one,<br/>single question<br/>that is fundamental<br/>to how you live your life...</div>
              </div>
              <div id="screen2" className="landing__item landing__item--2">
                  <img className="landing__item-image" src={landscape2} alt="person swimming"/>
                  <div data-aos="fade-down" className="landing__item-text">
                      <span data-aos="fade-down" className="landing__item-text-span1">Avoiding it<br/>is the easier option...</span><br/>
                      <span data-aos="fade-up" data-aos-delay={2100} className="landing__item-text-span2">but means ignoring<br/>your reality, existence<br/> and the meaning of it all.</span>
                  </div>
              </div>
              <div id="screen3" className="landing__item landing__item--3">
                  <img className="landing__item-image" src={landscape4} alt="foggy river"/>
                  <div data-aos="fade-down" className="landing__item-text">
                      <span data-aos="fade-down" className="landing__item-text-span1">Facing it<br/>is harder choice...</span><br/>
                      <span data-aos="fade-down" data-aos-delay={1500} className="landing__item-text-span1">it requires<br/>thought and courage...</span><br/>
                      <span data-aos="fade-up" data-aos-delay={2500} className="landing__item-text-span2">but it gives your life<br/>clarity and definition.</span>
                  </div>
              </div>
              <div id="screen4" className="landing__item landing__item--33">
                  <div data-aos="fade-down" className="landing__item-text">
                       <span data-aos="fade-down" className="landing__item-text-span1">Make the right Decision.</span><br/>
                       <span data-aos="fade-up" data-aos-delay={1100} className="landing__item-text-span1">Don't be lazy.</span><br/>
                       <span data-aos="fade-up" data-aos-delay={2100} className="landing__item-text-span2">Ask yourself a question !</span>
                  </div>
              </div>
              <div id="screen5" className="landing__item landing__item--4">
                  <img className="landing__item-image" src={landscape5} alt="foggy river"/>
                  <div data-aos="fade-down" className="landing__item-text">
                      <span data-aos="fade-down" data-aos-delay={1500} className="landing__item-text-span2">DO YOU BELIEVE IN GOD ?</span>
                  </div>
                  <button data-aos="fade-up"  data-aos-delay={3000} onClick={()=>{window.location=
                                   "http://safe-headland-47190.herokuapp.com/map"
                                    // "http://localhost:3000/map"
                              }} className="landing__item-button">Decide Here</button>
              </div>
          </div>
     )
   }
 }


export default Landing;
