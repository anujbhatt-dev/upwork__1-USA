 import React, {Component} from "react"


 class Statistics extends Component{

   componentDidMount=()=>{
     let element = document.getElementById("gradient");
     element.style.backgroundImage = '-webkit-linear-gradient('
        + 'left'  + ', ' + 'red 75%' + ', ' + 'blue 25%' + ')'
   }

   render(){

     return (
       <div className="map__statistics">
          <div className="map__statistics--head">world data</div>
          <div className="map__statistics--body">
               <div className="map__statistics--body-item map__statistics--body-item1">
                    <div className="map__statistics--body-item1-number">12345</div>
                    <div className="map__statistics--body-item1-text">Total Answers</div>
               </div>
               <div id="gradient" className="map__statistics--body-item map__statistics--body-item2">
                    <i className="fa fa-male" aria-hidden="true"></i>
                    <i className="fa fa-male" aria-hidden="true"></i>
                    <i className="fa fa-male" aria-hidden="true"></i>
                    <i className="fa fa-male" aria-hidden="true"></i>
                    <i className="fa fa-male" aria-hidden="true"></i>
                    <i className="fa fa-male" aria-hidden="true"></i>
                    <i className="fa fa-male" aria-hidden="true"></i>
                    <i className="fa fa-male" aria-hidden="true"></i>
                    <i className="fa fa-male" aria-hidden="true"></i>
                    <i className="fa fa-male" aria-hidden="true"></i>
               </div>
               <div className="map__statistics--body-item map__statistics--body-item3">
                    <div className="map__statistics--body-item3-believer">
                          <i className="fa fa-male map__statistics--body-item3-believer-icon" aria-hidden="true"></i>
                          <div className="map__statistics--body-item3-text"><div className="map__statistics--body-item3-text1">believer</div><div>75%</div></div>
                    </div>
                    <div className="map__statistics--body-item3-believer">
                          <i className="fa fa-male map__statistics--body-item3-nonBeliever-icon" aria-hidden="true"></i>
                          <div className="map__statistics--body-item3-text"><div className="map__statistics--body-item3-text1">non believer</div><div>25%</div></div>
                    </div>
               </div>
          </div>
       </div>
     )
   }
 }


export default Statistics;
