 import React, {Component} from "react"
 import Recaptcha from "react-recaptcha"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from 'react-router-dom';
import axios from "axios";
toast.configure();

 class StageTwoQuery extends Component{

    state={
      client:{
        firstName:"",
        lastName:"",
        email:"",
        city:"",
        country:"",
        publicFigure:"",
        knowMore:false
      },
       isVerified:false
    }

    componentDidMount(){
      this.state.client.country=this.props.country
    }

    onChangeHandler=(e,identifier)=>{

      let newState = {...this.state}
      const name = e.target.name
      const value = e.target.value

           newState.client[name]=value;
           this.setState({
             ...newState
           })

    }

     onSubmitHandler=(e)=>{
      e.preventDefault();
      e.preventDefault();

      let client={...this.state.client}
       client.category= this.props.believer;
       client.date=new Date().toLocaleDateString();

       let uri="http://www.bigq.world/verified";

       Object.keys(client).map(k=>{
               client[k]=`${btoa(client[k])}`;
       })



      let url= `http://www.bigq.world/verified/${client.email}/${client.firstName}/${client.lastName}/${client.date}/${client.city}/${client.country}/${client.category}/${client.publicFigure}/${client.knowMore}/${this.props.code}`;


        if(this.state.isVerified){
          axios.post("/v1/client/verify",null,{params:{url:url,to:this.state.client.email,name:this.state.client.firstName,category:this.props.believer}})
          .then(res=>{
            toast.info("done");
            alert(client.publicFigure)
          });
          this.props.history.push("/checkEmail")
        }else{
          toast.warning("Complete the form")
        }
    }


    callback=()=>{
    }



verifyCallback=()=>{
   this.setState({
      isVerified:true
   })
}


   render(){

     return (
       this.props.believer==="yes"?
       <>
       <div className="query__item query__fixer query__believer query__believer-1">
           <div className="query__item-text query__believer-text">I AM A BELIEVER</div>
       </div>
       <form onSubmit={this.onSubmitHandler} className="form query__item query__fixer query__believer">
         <input value={this.state.client.firstName} name="firstName" placeholder="First Name" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.client.lastName} name="lastName" placeholder="Last Name" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.client.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="email"/>
         <input value={this.state.client.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <select id="cars" name="publicFigure" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text">
            <option value="volvo">Choose your category</option>
            <option value="PF1">Public Figure</option>
            <option value="PF2">Scientist</option>
            <option value="other">Neither</option>
          </select>
         <input disabled value={this.state.client.country} name="country" placeholder="country" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <Recaptcha
           className="form__captcha"
           sitekey="6Lc9F8oZAAAAAIcBkFNGNGPfK2pDLcxbi_hUGBMr"
           render="explicit"
           verifyCallback={this.verifyCallback}
           onloadCallback={this.callback}
         />
         <button   type="submit" className="form__btn" >Submit</button>
       </form>
       </>:
       this.props.believer==="no"?
       <>
       <form onSubmit={this.onSubmitHandler} className="form query__item query__fixer query__non-believer">
         <input value={this.state.client.firstName} name="firstName" placeholder="First Name" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input value={this.state.client.lastName} name="lastName" placeholder="Last Name" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input value={this.state.client.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="email"/>
         <input value={this.state.client.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <select id="cars" name="publicFigure" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text">
            <option value="volvo">Choose your category</option>
            <option value="PF1">Public Figure</option>
            <option value="PF2">Scientist</option>
            <option value="other">Neither</option>
          </select>
         <input disabled value={this.state.client.country} name="country" placeholder="Country" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <Recaptcha
           className="form__captcha"
           sitekey="6Lc9F8oZAAAAAIcBkFNGNGPfK2pDLcxbi_hUGBMr"
           render="explicit"
           verifyCallback={this.verifyCallback}
           onloadCallback={this.callback}
         />
         <button type="submit" className="form__btn" onSubmit={this.onSubmitHandler}>Submit</button>
       </form>
       <div className="query__item query__fixer query__non-believer">
           <div className="query__item-text query__non-believer-text">I AM NOT A BELIEVER</div>
       </div>
       </>:
       this.props.believer==="undecided"?
       <>
       <div className="query__item query__fixer query__non-believer">
           <div className="query__item-text query__non-believer-text">WOULD YOU LIKE TO LEARN MORE?</div>
           <div style={{fontSize:"1.5rem"}}>
               <input onChange={(e)=>{let client={...this.state.client};client.knowMore=true; this.setState({client:client})}}  type="radio" name="knowMore" id="learnMoreYes" value="yes"/>
               <label  style={{padding:"0 1.5rem"}} htmlFor="learnMoreYes">Yes</label>
               <input onChange={(e)=>{let client={...this.state.client};client.knowMore=false; this.setState({client:client})}}  defaultChecked type="radio" name="knowMore" id="learnMoreNo" value="yes"/>
               <label  style={{padding:"0 1.5rem"}} htmlFor="learnMoreNo">No</label>
           </div>
       </div>
       <form onSubmit={this.onSubmitHandler} className="form query__item query__fixer query__non-believer">
         <input  value={this.state.client.firstName} name="firstName" placeholder="First Name" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input  value={this.state.client.lastName} name="lastName" placeholder="Last Name" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input value={this.state.client.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="email"/>
         <input value={this.state.client.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <select id="cars" name="publicFigure" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text">
            <option value="volvo">Choose your category</option>
            <option value="PF1">Public Figure</option>
            <option value="PF2">Scientist</option>
            <option value="other">Neither</option>
          </select>
       <input disabled value={this.state.client.country} name="country" placeholder="Country" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <Recaptcha
           className="form__captcha"
           sitekey="6Lc9F8oZAAAAAIcBkFNGNGPfK2pDLcxbi_hUGBMr"
           render="explicit"
           verifyCallback={this.verifyCallback}
           onloadCallback={this.callback}
         />
         <button type="submit" className="form__btn" >Submit</button>
       </form>
       </>:null
     )
   }
 }


export default withRouter(StageTwoQuery);
