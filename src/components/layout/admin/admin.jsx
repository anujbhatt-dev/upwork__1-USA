 import React, {Component} from "react"
import {withRouter} from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
toast.configure()


class Admin extends Component{

   state={
     adminId:"",
     adminSecret:"",
     verified:false
   }

   onChangeHandler=(e)=>{
     let newState= {...this.state}
     newState[e.target.name]=e.target.value;
     this.setState({
       ...newState
     })
   }

   onSubmitHandler=(e)=>{
    e.preventDefault();

     axios.post("/v1/admin/authenticate",{adminId:this.state.adminId,adminSecret:this.state.adminSecret}).
        then(res=>{
                    toast.info("verified");
                   // console.log(this.props.history);\
                   // this.setState({
                   //   verified:true
                   // })
                    this.props.history.push("/admin/list",{verified:this.state.verified})
                  }).
        catch(err=>
       toast.error("invalid credentials")
        )
   }


   render(){

     return (
       <div className="adminVerification">
          <h1>Welcome to Admin controls</h1>
          <form onSubmit={this.onSubmitHandler} className="form adminVerification__form">
                 <input onChange={this.onChangeHandler} name="adminId" value={this.state.adminId} required placeholder="Admin Id" className="form__input" type="text"/>
                 <input onChange={this.onChangeHandler} name="adminSecret" value={this.state.adminSecret} required placeholder="Admin Secret" className="form__input" type="password"/>
                 <button className="form__btn">Verify</button>
          </form>
        </div>
     )
   }
 }


export default withRouter(Admin);
