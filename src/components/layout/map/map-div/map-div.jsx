 import React, {Component} from "react"
 import Aos from "aos"
 import "aos/dist/aos.css"



 class MapDiv extends Component{


   componentDidMount=()=>{
    Aos.init({duration:2000,delay:100})
  }
  componentDidUpdate=()=>{
    Aos.init({duration:2000,delay:100})
  }


   render(){

     return (
         this.props.country?<div className="map__div">
             <div className="map__div-country">{this.props.country}</div>
               <div className="map__div-believer">
                     <div className="map__div-believer-text">Total Believers</div>
                     <div className="map__div-believer-number">1234562</div>
               </div>
               <div className="map__div-nonBeliever">
                     <div className="map__div-nonBeliever-text">Total Non Believers</div>
                     <div className="map__div-nonBeliever-number">432104</div>
               </div>

         </div>: <div className="map__div">
                                <div className="map__div-believer-text">Hover over a country to know the stats</div>
         </div>
     )
   }
 }


export default MapDiv;
