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
     const countries = ['Afghanistan','Albania','Algeria','Andorra','Angola','Anguilla','Antigua and Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','British Virgin Islands','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Canary Islands (Spain)','Cape Verde','Cayman Islands','Central African Republic','Chad','Chile','China','Colombia','Comoros','Costa Rica','Croatia','Cuba','Curaco (Netherlands)','Cyprus','Czech Republic',"Côte d'Ivoire",'Dem. Rep. Korea','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Faeroe Islands','Falkland Islands','Fiji','Finland','France','France','French Polynesia','Gabon','Georgia','Germany','Ghana','Greece','Greenland','Grenada','Guadeloupe (France)','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kosovo','Kuwait','Kyrgyzstan','Lao PDR','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Martinique (France)','Mauritania','Mauritius','Mayotte (France)','Mexico','Moldova','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcairn Islands','Poland','Portugal','Puerto Rico','Qatar','Republic of Congo','Republic of Korea','Reunion (France)','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Martin (Dutch)','Saint Martin (French)','Saint Vincent and the Grenadines','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','São Tomé and Principe','Taiwan','Tajikistan','Tanzania','Thailand','The Gambia','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Turks and Caicos Islands','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','United States Virgin Islands','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Western Sahara','Yemen','Zambia','Zimbabwe']

     return (
        <form className="add-client" onSubmit={this.onSubmitHandler}>
        <input value={this.state.firstName} name="firstName" placeholder="First Name" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text"/>
        <input value={this.state.lastName} name="lastName" placeholder="Last Name" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text"/>
        <input value={this.state.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="email"/>
        <input value={this.state.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text"/>
        <textarea  value={this.state.background} name="background" placeholder="background" required onChange={(e)=>this.onChangeHandler(e)} className="form__input add-client-background" type="text"/>
        <select value={this.state.country} name="country" placeholder="country" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text">
         {countries.map(c=> <option value={c}>{c}</option>)}

        </select>
        <select id="cars" name="publicFigure" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text">
           <option value="">Choose your category</option>
           <option value="PH1">Public Figure</option>
           <option value="PH2">Scientist</option>
           <option value="other">Other</option>
         </select>


         <div>
             <h1 className="label" htmlFor="verify">Verifiy</h1>
              <input id="verify" value={true}   name="verify" placeholder="background" required onChange={(e)=>this.onChangeHandler(e)} className="" type="radio"/>
              <label className="label" htmlFor="verify">yes</label>
              <input id="unverify" value={false}  name="verify" placeholder="background" required onChange={(e)=>this.onChangeHandler(e)} className="" type="radio"/>
              <label className="label" htmlFor="unverify">no</label>
          </div>
          <button type="submit" className="form__btn">Submit</button>
        </form>
     )
   }
 }


export default AddClientForm;
