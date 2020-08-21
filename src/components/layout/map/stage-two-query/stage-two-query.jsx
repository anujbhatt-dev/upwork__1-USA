 import React, {Component} from "react"
 import Recaptcha from "react-recaptcha"
 import fireDb from '../../../../firebase config/firebase-config'
 import axios from "axios"
// import believer from "../../../../assets/images/believer.jpg"
// import undecided from "../../../../assets/images/undecided.jpg"
// import notABeliever from "../../../../assets/images/not-a-believer.jpg"
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from 'react-router-dom';
toast.configure();


 class StageTwoQuery extends Component{

    state={
      client:{
        firstName:"",
        lastName:"",
        email:"",
        city:"",
        country:""
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

       let uri="http://localhost:3000/verified";

       Object.keys(client).map(k=>{
               client[k]=`${btoa(client[k])}`;
       })


       let url= `http://localhost:3000/verified/${client.email}/${client.firstName}/${client.lastName}/${client.date}/${client.city}/${client.country}/${client.category}`;

        if(this.state.isVerified){
          axios.post("/v1/client/verify?url="+url+"&to="+this.state.client.email)
          // .then(res=>{
          //   toast.success("done");
          // });
          this.props.history.push("/checkEmail")
        }else{
          toast.warning("Complete the form")
        }

       // send email verification

       // alert(`mailing  http://localhost:3000/verified/${client.email}/${client.firstName}/${client.lastName}/${client.date}/${client.city}/${client.country}/${client.category}`);

      //  let key=this.state.client.email.replace('.','DOT');
      //  fireDb.child("client/"+key).on('value',res=>{

      //     fireDb.child("client").child(key).set(client);

      //  })

      // emailjs.send("","","").then(res=>{
      //   alert("send")
      // }).catch(err=>{
      //   alert("failed")
      // })

    }

    callback=()=>{
      console.log("loaded");
    }

    verifyCallback=()=>{
      this.setState({
        isVerified:true
      })
    }

   render(){
     // <img className="query__item-image query__believer-image" src={believer} alt=""/>

     // <img className="query__item-image query__non-believer-image" src={notABeliever} alt=""/>

     // <img className="query__item-image query__non-believer-image" src={undecided} alt=""/>


     return (
       this.props.believer==="yes"?
       <>
       <div className="query__item query__fixer query__believer query__believer-1">
           <div className="query__item-text query__believer-text">I AM A BELIEVER</div>
       </div>
       <form onSubmit={this.onSubmitHandler} className="form query__item query__fixer query__believer">
         <input value={this.state.client.firstName} name="firstName" placeholder="First Name" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.client.lastName} name="lastName" placeholder="Last Name" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.client.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.client.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input disabled value={this.state.client.country} name="country" placeholder="country" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <Recaptcha
           className="form__captcha"
           sitekey="6LesvMEZAAAAAGxm_vMtt_AhG4YHZ0XObuwqhPui"
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
         <input value={this.state.client.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input value={this.state.client.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input disabled value={this.state.client.country} name="country" placeholder="Country" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <Recaptcha
           className="form__captcha"
           sitekey="6LesvMEZAAAAAGxm_vMtt_AhG4YHZ0XObuwqhPui"
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
       </div>
       <form onSubmit={this.onSubmitHandler} className="form query__item query__fixer query__non-believer">
         <input  value={this.state.client.firstName} name="firstName" placeholder="First Name" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input  value={this.state.client.lastName} name="lastName" placeholder="Last Name" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input value={this.state.client.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input value={this.state.client.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input disabled value={this.state.client.country} name="country" placeholder="Country" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <Recaptcha
           className="form__captcha"
           sitekey="6LesvMEZAAAAAGxm_vMtt_AhG4YHZ0XObuwqhPui"
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
