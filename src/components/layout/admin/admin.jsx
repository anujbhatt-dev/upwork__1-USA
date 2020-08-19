 import React, {Component} from "react"
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


class Admin extends Component{

   state={
     stage:1,
     adminId:"",
     adminSecret:""
   }

   onChangeHandler=(e)=>{
     let newState= {...this.state}
     newState[e.target.name]=e.target.value;
     this.setState({
       ...newState
     })
   }

   onSubmitHandler=(e)=>{
     if(this.state.adminId==="adminid" && this.state.adminSecret==="123"){
       this.setState({
         stage:2
       })
       this.props.verify();
       toast.success("VERIFIED")
     }else{
       toast.error("INVALID CREDENTIALS")
     }
     e.preventDefault();
   }


   render(){

     return (
       this.state.stage===1?<div className="adminVerification">
          <h1>Welcome to Admin controls</h1>
          <form onSubmit={this.onSubmitHandler} className="form adminVerification__form">
                 <input onChange={this.onChangeHandler} name="adminId" value={this.state.adminId} required placeholder="Admin Id" className="form__input" type="text"/>
                 <input onChange={this.onChangeHandler} name="adminSecret" value={this.state.adminSecret} required placeholder="Admin Secret" className="form__input" type="password"/>
                 <button className="form__btn">Verify</button>
          </form>
        </div>:this.state.stage===2?<div className="adminVerification choice">
             <Link className="choice__item" to="/admin/believer">Go to Believer</Link>
             <Link className="choice__item" to="/admin/notABeliever">Go to Non-Believer</Link>
        </div>:null
     )
   }
 }


export default Admin;
