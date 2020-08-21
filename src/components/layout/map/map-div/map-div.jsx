 import React, {Component} from "react"
 import Aos from "aos"
 import "aos/dist/aos.css"
import Flag from "react-world-flags"


 class MapDiv extends Component{


   componentDidMount=()=>{
    Aos.init({duration:500,delay:100})
  }
  componentDidUpdate=()=>{
    Aos.init({duration:500,delay:100})
  }


   render(){

     return (
         this.props.country?<div data-aos="fade-right" className="map__div">
             <div className="map__div-country"><div>{this.props.country}</div>
                 <Flag height="26" code={this.props.code}/>
             </div>

               <div className="map__div-believer">
                     <div className="map__div-believer-number">1234562</div>
                     <div className="map__div-believer-text">believers</div>
               </div>
               <div className="map__div-nonBeliever">
               <div className="map__div-nonBeliever-number">432104</div>
                     <div className="map__div-nonBeliever-text">non believers</div>
               </div>
         </div>: null
     )
   }
 }


export default MapDiv;
