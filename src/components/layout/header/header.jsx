 import React, {Component} from "react"
import {Link} from 'react-router-dom'
import logo from "../../../assets/images/logo.jpg"
import Modal from "../../../UI/modal/modal"
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

 class Header extends Component{

   state={
     show2:false
   }

   modalShowHandler2=()=>{
     this.setState({
       show2:!this.state.show2
     })
   }

   copyToClipboard=()=>{
     let copyTextarea = document.getElementById("clipboard");
      copyTextarea.select();
      document.execCommand("copy");
      toast.info("Copied to clipboard")
   }


   render(){

     return (
       <>
       <Modal classModal="modal2" styles={{padding:"1rem"}} clicked={this.modalShowHandler2} show={this.state.show2}>
                   <div className="extra-wrapper" >
                   <div className="extra-1">We’re a group of unimportant citizens from around the world<br/>bringing awareness to a very important question.</div><br/>
                   <figure className="extra-figure">
                        <img className="extra-figure--img" src={logo} alt="bigq"/>
                        <figcaption className="extra-figure--cap">It is undeniable.</figcaption>
                   </figure><br/>
                   <div className="extra-2">Your perspective of existence and its purpose are substantially<br/>dependent on either embracing belief in God or Atheism.</div><br/>
                   <div className="extra-3">If you’ve given THE BIG QUESTION thought and<br/>have already made a determination,</div>
                   <div className="extra-4">then you should be joining with other like-minded people to promote your vision.</div><br/>
                   <div className="extra-5">If you haven’t,<br/>you really should.</div><br/>
                   <div className="extra-6">Do your research, get informed and then MAKE YOUR DECISION.</div></div>
       </Modal>
        <header className="header">
            <Link to="/" className="logo"><img className="logo__img" src={logo} alt="The big QUESTION"/></Link>
            <div className="socialMedia">
                <div className="instagram"><a  href="http://www.bigq.world/map" style={{textDecoration:"none"}} >Join</a></div>
                <div className="instagram"><a href="http://www.bigq.world/publicFigure" style={{textDecoration:"none"}} >Joined</a></div>
                <div className="twitter info" onClick={this.modalShowHandler2}><i className="fa fa-info" aria-hidden="true"></i></div>
                <div className="instagram mobileFooter"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-instagram" aria-hidden="true"></i></a> </div>
                <div className="facebook mobileFooter"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-facebook" aria-hidden="true"></i></a> </div>
                <div className="twitter mobileFooter"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-twitter" aria-hidden="true"></i></a> </div>
                <div onClick={this.copyToClipboard} data-class="tooltip" data-tip="admin@bigq.world" className="twitter info mobileFooter"><i className="fa fa-envelope-o" aria-hidden="true"></i></div><ReactTooltip/>
            </div>
        </header>
            <textarea style={{zIndex:"-10",position:"absolute"}} name="" id="clipboard" cols="30" rows="10">admin@bigq.world</textarea>
        </>
     )
   }
 }


export default Header;
