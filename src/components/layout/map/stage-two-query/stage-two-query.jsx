 import React, {Component} from "react"
import believer from "../../../../assets/images/believer.jpg"
import notABeliever from "../../../../assets/images/not-a-believer.jpg"
import emailjs from 'emailjs';

 class StageTwoQuery extends Component{

    state={
      believer:{
        firstName:"",
        lastName:"",
        email:"",
        city:"",
        country:""
      },
      notABeliever:{
        firstName:"",
        lastName:"",
        email:"",
        city:"",
        country:""
      },
    }

    


    emailSender=(e)=>{
      alert("S")
      e.preventDefault();
         emailjs.sendForm('gmail', 'template_CIFXS1Sr',e.target, ' user_oT3lPNtArYtDElxArBQ2V')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      }


    onChangeHandler=(e,identifier)=>{
      let newState = {...this.state}
      const name = e.target.name
      const value = e.target.value
         if(identifier==="believer"){
            newState.believer[name]=value;
            this.setState({
              ...newState
            })
         }
         else if(identifier==="notABeliever"){
           newState.notABeliever[name]=value;
           this.setState({
             ...newState
           })
         }
    }

    // onSubmitHandler=(e)=>{

    //    e.preventDefault()
    // }

   render(){

     return (
       this.props.believer?
       <>
       <div className="query__item query__beliver">
           <div className="query__item-text query__beliver-text">I AM A BELIEVER</div>
           <img className="query__item-image query__beliver-image" src={believer} alt=""/>
       </div>
       <form   onSubmit={(e)=>this.emailSender(e)} className="form query__item query__beliver">
         <input value={this.state.believer.firstName} name="firstName" placeholder="First Name" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.believer.lastName} name="lastName" placeholder="Last Name" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.believer.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.believer.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.believer.country} name="country" placeholder="country" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <button type="submit" className="form__btn">Submit</button>
       </form>
       </>:
       <>
       <div className="query__item query__non-beliver">
           <div className="query__item-text query__non-beliver-text">I AM NOT A BELIEVER</div>
           <img className="query__item-image query__non-beliver-image" src={notABeliever} alt=""/>
       </div>
       <form  onSubmit={(e)=>this.emailSender(e)} className="form query__item query__non-beliver">
         
         <input value={this.state.notABeliever.firstName} name="firstName" placeholder="First Name" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input  value={this.state.notABeliever.lastName} name="lastName" placeholder="Last Name" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input value={this.state.notABeliever.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input value={this.state.notABeliever.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input value={this.state.notABeliever.country} name="country" placeholder="Country" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <button type="submit" className="form__btn" >Submit</button>
       </form>
       </>
     )
   }
 }


export default StageTwoQuery;
