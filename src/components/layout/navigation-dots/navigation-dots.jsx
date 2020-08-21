 import React, {Component} from "react"
 import {Link} from "react-scroll"


 class NavigationDots extends Component{


   render(){

     // <Link to="div11" smooth="true" duration={500} className="nav__dots"></Link>
     // <Link to="div22" smooth="true" duration={500} className="nav__dots"></Link>
     return (
        <nav className="nav">
            <Link to="div1" smooth="true" duration={500} className="nav__dots"></Link>
            <Link to="div2" smooth="true" duration={500} className="nav__dots"></Link>
            <Link to="div3" smooth="true" duration={500} className="nav__dots"></Link>
            <Link to="div33" smooth="true" duration={500} className="nav__dots"></Link>
            <Link to="div4" smooth="true" duration={500} className="nav__dots"></Link>
        </nav>
     )
   }
 }


export default NavigationDots;
