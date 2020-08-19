 import React, {Component} from "react"
import believer from "../../../../assets/images/believer.jpg"

 class Believer extends Component{

   render(){

     return (
        <div className="query__item query__beliver" onClick={this.props.clicked}>
          <div className="query__item-text query__beliver-text">I AM A BELIEVER</div>
          <p>
             I Join With all <strong>2345</strong> others from <strong>{this.props.country}</strong> on<br/>
             this list in acknowledging that<br/>
             the universe was created by an<br/>
             intelligent being we refer to as God
          </p>
          <img className="query__item-image query__beliver-image" src={believer} alt=""/>
        </div>
     )
   }
 }


export default Believer;
