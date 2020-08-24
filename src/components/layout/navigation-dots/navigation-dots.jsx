 import React, {Component} from "react"
 import {Link} from "react-scroll"


 class NavigationDots extends Component{


   render(){

     // <Link to="div11" smooth="true" duration={500} className="nav__dots"></Link>
     // <Link to="div22" smooth="true" duration={500} className="nav__dots"></Link>
     return (
        <nav className="nav">
            <Link hashSpy={true} spy={true} activeClass="nav__active" to="screen1" smooth="true" duration={500} className="nav__dots"></Link>
            <Link hashSpy={true} spy={true} activeClass="nav__active" to="screen2" smooth="true" duration={500} className="nav__dots"></Link>
            <Link hashSpy={true} spy={true} activeClass="nav__active" to="screen3" smooth="true" duration={500} className="nav__dots"></Link>
            <Link hashSpy={true} spy={true} activeClass="nav__active" to="screen4" smooth="true" duration={500} className="nav__dots"></Link>
            <Link hashSpy={true} spy={true} activeClass="nav__active" to="screen5" smooth="true" duration={500} className="nav__dots"></Link>
        </nav>
     )
   }
 }


export default NavigationDots;
