 import React, {Component} from "react"
import believer from "../../../../assets/images/believer.jpg"
import notABeliever from "../../../../assets/images/not-a-believer.jpg"

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

    onSubmitHandler=(e)=>{
      
       e.preventDefault()
    }

   render(){

     return (
       this.props.believer?
       <>
       <div className="query__item query__beliver">
           <div className="query__item-text query__beliver-text">Believer</div>
           <img className="query__item-image query__beliver-image" src={believer} alt=""/>
       </div>
       <form className="form query__item query__beliver">
         <input value={this.state.believer.firstName} name="firstName" placeholder="First Name" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.believer.lastName} name="lastName" placeholder="Last Name" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.believer.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.believer.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <input value={this.state.believer.country} name="country" placeholder="country" required onChange={(e)=>this.onChangeHandler(e,"believer")} className="form__input" type="text"/>
         <button type="submit" className="form__btn" onSubmit={this.onSubmitHandler}>Submit</button>
       </form>
       </>:
       <>
       <div className="query__item query__non-beliver">
           <div className="query__item-text query__non-beliver-text">Not a Believer</div>
           <img className="query__item-image query__non-beliver-image" src={notABeliever} alt=""/>
       </div>
       <form className="form query__item query__non-beliver">
         <input value={this.state.notABeliever.firstName} name="firstName" placeholder="First Name" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input value={this.state.notABeliever.lastName} name="lastName" placeholder="Last Name" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input value={this.state.notABeliever.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input value={this.state.notABeliever.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <input value={this.state.notABeliever.country} name="country" placeholder="Country" required onChange={(e)=>this.onChangeHandler(e,"notABeliever")} className="form__input" type="text"/>
         <button type="submit" className="form__btn" onSubmit={this.onSubmitHandler}>Submit</button>
       </form>
       </>
     )
   }
 }


export default StageTwoQuery;
