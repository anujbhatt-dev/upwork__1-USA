 import React, {Component} from "react"


 class AddClientForm extends Component{

   state={
     firstName:"",
     lastName:"",
     category:"",
     publicFigure:"",
     email:"",
     verified:"",
     country:"",
     city:"",
     background:""
   }


   onChangeHandler=(e)=>{

     this.setState({
        [e.target.name]:e.target.value
     })
   }

   onSubmitHandler=(e)=>{
         e.preventDefault();
   }

   render(){

     return (
        <form className="add-client" onSubmit={this.onSubmitHandler}>
        <input value={this.state.firstName} name="firstName" placeholder="First Name" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text"/>
        <input value={this.state.lastName} name="lastName" placeholder="Last Name" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text"/>
        <input value={this.state.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="email"/>
        <input value={this.state.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text"/>
        <textarea  value={this.state.background} name="background" placeholder="background" required onChange={(e)=>this.onChangeHandler(e)} className="form__input add-client-background" type="text"/>
        <select id="cars" name="publicFigure" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text">
           <option value="">Choose your category</option>
           <option value="PH1">Public Figure</option>
           <option value="PH2">Scientist</option>
           <option value="other">Other</option>
         </select>

         <select value={this.state.country} name="country" placeholder="country" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text">
          {this.props.countries.map(c=> <option value={c.substring(c.indexOf(','))}>{c}</option>)}
          
         </select>
         <div>
             <label className="label" htmlFor="verify">Verifiy</label>
              <input value={true}   name="verify" placeholder="background" required onChange={(e)=>this.onChangeHandler(e)} className="" type="radio"/>
              <input  value={false}  name="verify" placeholder="background" required onChange={(e)=>this.onChangeHandler(e)} className="" type="radio"/>
          </div>
          <button type="submit" className="form__btn">Submit</button>
        </form>
     )
   }
 }


export default AddClientForm;
