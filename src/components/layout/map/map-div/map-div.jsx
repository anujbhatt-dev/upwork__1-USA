 import React, {Component} from "react"


 class MapDiv extends Component{

   render(){

     return (
         <div className="map__div">
             <div className="map__div-country">{this.props.country}</div>
               <div className="map__div-believer">
                     <div className="map__div-believer-text">Total Believers</div>
                     <div className="map__div-believer-number">1234562</div>
               </div>
               <div className="map__div-nonBeliever">
                     <div className="map__div-nonBeliever-text">Total Non Believers</div>
                     <div className="map__div-nonBeliever-number">432104</div>
               </div>

         </div>
     )
   }
 }


export default MapDiv;
