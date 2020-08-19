 import React, {Component} from "react"


 class Admin extends Component{

   state={
     stage:1
   }

   onSubmitHandler=(e)=>{
     this.setState({
       stage:2
     })
     e.preventDefault();
   }

   render(){

     return (
       this.state.stage===1?<div className="adminVerification">
          <h1>Welcome to Admin controls</h1>
          <form onSubmit={this.onSubmitHandler} className="form adminVerification__form">
                 <input required placeholder="Admin Id" className="form__input" type="text"/>
                 <input required placeholder="Admin Secret" className="form__input" type="password"/>
                 <button className="form__btn">Verify</button>
          </form>
        </div>:this.state.stage===2?<div className="adminVerification"><h1>Go to Belivers section / Go to Non Belivers section</h1></div>:null
     )
   }
 }


export default Admin;
