 import React, {Component} from "react"


 class Header extends Component{

   render(){

     return (
        <header>
            <div className="logo">logo</div>
            <div className="socialMedia">
                <div className="instagram"> <a href="https://www.google.com">{""}<i className="fa fa-instagram" aria-hidden="true"></i></a> </div>
                <div className="facebook"> <a href="https://www.google.com">{""}<i className="fa fa-facebook" aria-hidden="true"></i></a> </div>
                <div className="twitter"> <a href="https://www.google.com">{""}<i className="fa fa-twitter" aria-hidden="true"></i></a> </div>
            </div>
        </header>
     )
   }
 }


export default Header;
