 import React, {Component} from "react"
// import believer from "../../../../assets/images/believer.jpg"
// import undecided from "../../../../assets/images/undecided.jpg"
// import notABeliever from "../../../../assets/images/not-a-believer.jpg"

import fireDb from '../../../../firebase config/firebase-config'
import axios from "axios"
 class StageTwoQuery extends Component{

    state={
      client:{
        firstName:"",
        lastName:"",
        email:"",
        city:"",
        country:""
      },
     
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
       console.log(client);
       let key=this.state.client.email.replace('.','DOT');

       //axios.post("https://god-s-plan-60b86.firebaseio.com/client.json",{test:"234"}).then(d=>alert(d)).catch(er=>alert("23"+er));
     
       fireDb.child("client/"+key).on('value',res=>{
        
          fireDb.child("client").child(key).set(client);
       
       })



    }

   render(){
     // <img className="query__item-image query__believer-image" src={believer} alt=""/>

     // <img className="query__item-image query__non-believer-image" src={notABeliever} alt=""/>

     // <img className="query__item-image query__non-believer-image" src={undecided} alt=""/>


     return (
       this.props.believer==="yes"?
       <>
       <div className="query__item query__fixer query__believer">
           <div className="query__item-text query__believer-text">I AM A BELIEVER</div>
       </div>
       <form onSubmit={this.onSubmitHandler} className="form query__item query__fixer query__believer">
         <input value={this.state.client.firstName} name="firstName" placeholder="First Name" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.client.lastName} name="lastName" placeholder="Last Name" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.client.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.client.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input disabled value={this.state.client.country} name="country" placeholder="country" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
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
         <button type="submit" className="form__btn" >Submit</button>
       </form>
       </>:null
     )
   }
 }


export default StageTwoQuery;
