 import React, {Component} from "react"
import undecided from "../../../../assets/images/undecided.jpg"


 class Undecided extends Component{

   render(){

     return (
       <div className="query__item query__undecided" onClick={this.props.clicked}>
         <div>I do not know enough to decide</div>
         <img className="query__item-image query__beliver-image" src={undecided} alt=""/>
       </div>
     )
   }
 }


export default Undecided;
