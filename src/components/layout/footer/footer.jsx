 import React, {Component} from "react"
import {Link} from 'react-router-dom'
import logo from "../../../assets/images/logo.jpg"
import Modal from "../../../UI/modal/modal"
import ReactTooltip from 'react-tooltip';

 class Footer extends Component{

   state={
     show2:false
   }

   modalShowHandler2=()=>{
     this.setState({
       show2:!this.state.show2
     })
   }

   render(){

     return (
       <>
        <header className="footer">
            <div className="socialMedia">
                <div className="instagram"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-instagram" aria-hidden="true"></i></a> </div>
                <div className="facebook"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-facebook" aria-hidden="true"></i></a> </div>
                <div className="twitter"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-twitter" aria-hidden="true"></i></a> </div>
                <div data-class="tooltip" data-offset="{'bottom':0}" data-event="click" data-tip="admin@bigq.world" className="twitter info"><i className="fa fa-envelope-o" aria-hidden="true"></i></div><ReactTooltip/>
            </div>
        </header>

        </>
     )
   }
 }


export default Footer;
