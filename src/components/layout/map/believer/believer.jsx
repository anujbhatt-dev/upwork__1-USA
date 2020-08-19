 import React, {Component} from "react"
import believer from "../../../../assets/images/believer.jpg"

 class Believer extends Component{

   render(){

     return (
        <div className="query__item query__beliver" onClick={this.props.clicked}>
          <div className="query__item-text query__beliver-text">Believer</div>
          <img className="query__item-image query__beliver-image" src={believer} alt=""/>
        </div>
     )
   }
 }


export default Believer;
