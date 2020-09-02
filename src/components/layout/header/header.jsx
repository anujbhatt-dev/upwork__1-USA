 import React, {Component} from "react"
import {Link} from 'react-router-dom'
import logo from "../../../assets/images/logo.jpg"

 class Header extends Component{

   render(){

     return (
        <header className="header">
            <Link to="/" className="logo"><img className="logo__img" src={logo} alt="The big QUESTION"/></Link>
            <div className="socialMedia">
                <div className="instagram"><a href="http://safe-headland-47190.herokuapp.com/publicFigure" style={{textDecoration:"none"}} >Notables</a></div>
                <div className="instagram"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-instagram" aria-hidden="true"></i></a> </div>
                <div className="facebook"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-facebook" aria-hidden="true"></i></a> </div>
                <div className="twitter"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-twitter" aria-hidden="true"></i></a> </div>
            </div>
        </header>
     )
   }
 }


export default Header;
