 import React, {Component} from "react"
import {Link } from "react-router-dom"
import logo from "../../../../assets/images/logo.jpg"
import SideDrawer from "./side-drawer/side-drawer"
import AdminBackdrop from "./admin-backdrop/admin-backdrop"

 class AdminHeader extends Component{

   state={
     open:false
   }

   sideDrawerToggleHandler=()=>{
     if(this.state.open){
       this.setState({
         open:false
       })
     }else{
       this.setState({
         open:true
       })
     }
   }

   render(){

     return (
       <header className="adminHeader">
            <div><i onClick={this.sideDrawerToggleHandler} className="fa fa-bars adminHeader__menuIcon" aria-hidden="true"></i>
           <Link to="/" className="logo adminHeader__logo"><img className="logo__img" src={logo} alt=""/></Link>
           <AdminBackdrop show={this.state.open} clicked={this.sideDrawerToggleHandler}/>
           <SideDrawer selectHandler={this.props.selectHandler} countries={this.props.countries} clicked={this.sideDrawerToggleHandler} toggler={this.state.open?"sideDrawer__open":"sideDrawer__close"}/>
           </div>
           <div className="socialMedia">
               <div className="instagram"> <Link to="/admin/claims"><i className="fa fa-bell" aria-hidden="true"></i>Claims</Link> </div>
               <div className="instagram"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-instagram" aria-hidden="true"></i></a> </div>
               <div className="facebook"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-facebook" aria-hidden="true"></i></a> </div>
               <div className="twitter"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-twitter" aria-hidden="true"></i></a> </div>
           </div>
       </header>
     )
   }
 }


export default AdminHeader;
