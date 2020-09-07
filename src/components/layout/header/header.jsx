 import React, {Component} from "react"
import {Link} from 'react-router-dom'
import logo from "../../../assets/images/logo.jpg"
import Modal from "../../../UI/modal/modal"

 class Header extends Component{

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
       <Modal styles={{width:"50rem",height:"50rem",padding:"1rem"}} clicked={this.modalShowHandler2} show={this.state.show2}>
                   <h1 className="claim__form" style={{display:"flex",justifyContent:"center",alignItems:"center",lineHeight:"1"}}><span style={{fontSize:"2rem",textAlign:"center"}}>We’re a group of unimportant citizens from around the world who are bringing awareness to a very important question. It is undeniable. Your perspective of existence and its purpose are substantially dependent on either embracing belief in God or Atheism. If you’ve given THE BIG QUESTION thought and have already made a determination, then you should be joining with other like-minded people to promote your vision. If you haven’t, you really should. Do your research, get informed and then MAKE YOUR DECISION.</span></h1>}
       </Modal>
        <header className="header">
            <Link to="/" className="logo"><img className="logo__img" src={logo} alt="The big QUESTION"/></Link>
            <div className="socialMedia">
                <div className="instagram"><a href="http://peaceful-temple-48896.herokuapp.com/map" style={{textDecoration:"none"}} >Join</a></div>
                <div className="instagram"><a href="http://peaceful-temple-48896.herokuapp.com/publicFigure" style={{textDecoration:"none"}} >Joined</a></div>
                <div className="twitter info" onClick={this.modalShowHandler2}><i className="fa fa-info" aria-hidden="true"></i></div>
                <div className="instagram"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-instagram" aria-hidden="true"></i></a> </div>
                <div className="facebook"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-facebook" aria-hidden="true"></i></a> </div>
                <div className="twitter"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-twitter" aria-hidden="true"></i></a> </div>
            </div>
        </header>

        </>
     )
   }
 }


export default Header;
