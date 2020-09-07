 import React, {Component} from "react"
import axios from "axios"
import Flag from "react-world-flags"


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

         let data={... this.state};
         data.code=data.country.substring(data.country.indexOf(',')+1);
         data.country=data.country.substring(0,data.country.indexOf(','));

         axios.post("/v1/admin/client",data).then(res=>{alert("saved");this.setState({ firstName:"",
         lastName:"",
         category:"",
         publicFigure:"other",
         email:"",
         verified:"",
         country:"",
         city:"",
         background:""})})
   }

   render(){
     const countries=[["Afghanistan","AF"],["Albania","AL"],["Algeria","DZ"],["Andorra","AD"],["Angola","AO"],["Anguilla","AI"],["Antigua and Barbuda","AG"],["Argentina","AR"],["Armenia","AM"],["Aruba","AW"],["Australia","AU"],["Austria","AT"],["Azerbaijan","AZ"],["Bahamas","BS"],["Bahrain","BH"],["Bangladesh","BD"],["Barbados","BB"],["Belarus","BY"],["Belgium","BE"],["Belize","BZ"],["Benin","BJ"],["Bermuda","BM"],["Bhutan","BT"],["Bolivia","BO"],["Bosnia and Herzegovina","BA"],["Botswana","BW"],["Brazil","BR"],["British Virgin Islands","VG"],["Brunei Darussalam","BN"],["Bulgaria","BG"],["Burkina Faso","BF"],["Burundi","BI"],["Cambodia","KH"],["Cameroon","CM"],["Canada","CA"],["Canary Islands (Spain)","IC"],["Cape Verde","CV"],["Cayman Islands","KY"],["Central African Republic","CF"],["Chad","TD"],["Chile","CL"],["China","CN"],["Colombia","CO"],["Comoros","KM"],["Costa Rica","CR"],["Croatia","HR"],["Cuba","CU"],["Curaco (Netherlands)","CW"],["Cyprus","CY"],["Czech Republic","CZ"],["Côte d'Ivoire","CI"],["Dem. Rep. Korea","KP"],["Democratic Republic of the Congo","CD"],["Denmark","DK"],["Djibouti","DJ"],["Dominica","DM"],["Dominican Republic","DO"],["Ecuador","EC"],["Egypt","EG"],["El Salvador","SV"],["Equatorial Guinea","GQ"],["Eritrea","ER"],["Estonia","EE"],["Ethiopia","ET"],["Faeroe Islands","FO"],["Falkland Islands","FK"],["Fiji","FJ"],["Finland","FI"],["France","GF"],["France","FR"],["French Polynesia","PF"],["Gabon","GA"],["Georgia","GE"],["Germany","DE"],["Ghana","GH"],["Greece","GR"],["Greenland","GL"],["Grenada","GD"],["Guadeloupe (France)","GP"],["Guatemala","GT"],["Guinea","GN"],["Guinea-Bissau","GW"],["Guyana","GY"],["Haiti","HT"],["Honduras","HN"],["Hong Kong","HK"],["Hungary","HU"],["Iceland","IS"],["India","IN"],["Indonesia","ID"],["Iran","IR"],["Iraq","IQ"],["Ireland","IE"],["Israel","IL"],["Italy","IT"],["Jamaica","JM"],["Japan","JP"],["Jordan","JO"],["Kazakhstan","KZ"],["Kenya","KE"],["Kosovo","XK"],["Kuwait","KW"],["Kyrgyzstan","KG"],["Lao PDR","LA"],["Latvia","LV"],["Lebanon","LB"],["Lesotho","LS"],["Liberia","LR"],["Libya","LY"],["Liechtenstein","LI"],["Lithuania","LT"],["Luxembourg","LU"],["Macedonia","MK"],["Madagascar","MG"],["Malawi","MW"],["Malaysia","MY"],["Maldives","MV"],["Mali","ML"],["Malta","MT"],["Martinique (France)","MQ"],["Mauritania","MR"],["Mauritius","MU"],["Mayotte (France)","YT"],["Mexico","MX"],["Moldova","MD"],["Mongolia","MN"],["Montenegro","ME"],["Montserrat","MS"],["Morocco","MA"],["Mozambique","MZ"],["Myanmar","MM"],["Namibia","NA"],["Nauru","NR"],["Nepal","NP"],["Netherlands","NL"],["New Caledonia","NC"],["New Zealand","NZ"],["Nicaragua","NI"],["Niger","NE"],["Nigeria","NG"],["Norway","NO"],["Oman","OM"],["Pakistan","PK"],["Palestine","PS"],["Panama","PA"],["Papua New Guinea","PG"],["Paraguay","PY"],["Peru","PE"],["Philippines","PH"],["Pitcairn Islands","PN"],["Poland","PL"],["Portugal","PT"],["Puerto Rico","PR"],["Qatar","QA"],["Republic of Congo","CG"],["Republic of Korea","KR"],["Reunion (France)","RE"],["Romania","RO"],["Russia","RU"],["Rwanda","RW"],["Saint Kitts and Nevis","KN"],["Saint Lucia","LC"],["Saint Martin (Dutch)","SX"],["Saint Martin (French)","MF"],["Saint Vincent and the Grenadines","VC"],["Saudi Arabia","SA"],["Senegal","SN"],["Serbia","RS"],["Seychelles","SC"],["Sierra Leone","SL"],["Singapore","SG"],["Slovakia","SK"],["Slovenia","SI"],["Solomon Islands","SB"],["Somalia","SO"],["South Africa","ZA"],["South Sudan","SS"],["Spain","ES"],["Sri Lanka","LK"],["Sudan","SD"],["Suriname","SR"],["Swaziland","SZ"],["Sweden","SE"],["Switzerland","CH"],["Syria","SY"],["São Tomé and Principe","ST"],["Taiwan","TW"],["Tajikistan","TJ"],["Tanzania","TZ"],["Thailand","TH"],["The Gambia","GM"],["Timor-Leste","TL"],["Togo","TG"],["Tonga","TO"],["Trinidad and Tobago","TT"],["Tunisia","TN"],["Turkey","TR"],["Turkmenistan","TM"],["Turks and Caicos Islands","TC"],["Uganda","UG"],["Ukraine","UA"],["United Arab Emirates","AE"],["United Kingdom","GB"],["United States","US"],["United States Virgin Islands","VI"],["Uruguay","UY"],["Uzbekistan","UZ"],["Vanuatu","VU"],["Venezuela","VE"],["Vietnam","VN"],["Western Sahara","EH"],["Yemen","YE"],["Zambia","ZM"],["Zimbabwe","ZW"]]

     return (
        <form className="add-client" onSubmit={this.onSubmitHandler}>
        <input value={this.state.firstName} name="firstName" placeholder="First Name" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text"/>
        <input value={this.state.lastName} name="lastName" placeholder="Last Name" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text"/>
        <input value={this.state.email} name="email" placeholder="Email" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="email"/>
        <select value={this.state.category} name="category" placeholder="category" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text">
        <option value="yes">Beleiver</option>
           <option value="no">Non Beleiver</option>
           <option value="undecided">Un Decided</option>
        </select>
        <select id="cars" name="publicFigure" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text">
           <option value="other">Other</option>
           <option value="PF1">Public Figure</option>
           <option value="PF2">Scientist</option>

         </select>
        <textarea  value={this.state.background} name="background" placeholder="background" required onChange={(e)=>this.onChangeHandler(e)} className="form__input add-client-background" type="text"/>
        <input value={this.state.city} name="city" placeholder="City" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text"/>
        <select value={this.state.country} name="country" placeholder="country" required onChange={(e)=>this.onChangeHandler(e)} className="form__input" type="text">
         {countries.map(c=> <option value={c}>{c[0]}</option>)}

        </select>

         <div>
             <h1 className="label" htmlFor="verify">Verified</h1>
              <input id="verify" value={true}   name="verified" placeholder="background" required onChange={(e)=>this.onChangeHandler(e)} className="" type="radio"/>
              <label className="label" htmlFor="verify">yes</label>
              <input id="unverify" value={false}  name="verified" placeholder="background" required onChange={(e)=>this.onChangeHandler(e)} className="" type="radio"/>
              <label className="label" htmlFor="unverify">no</label>
          </div>
          <button type="submit" className="form__btn">Submit</button>
        </form>
     )
   }
 }


export default AddClientForm;
