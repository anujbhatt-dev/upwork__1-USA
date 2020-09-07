 import React, {Component} from "react"


 class Undecided extends Component{

   render(){

     return (
       <div className="query__item query__undecided" onClick={this.props.clicked}>
         <div style={{textTransform:"underline"}}>I do not know enough to decide</div>
       </div>
     )
   }
 }


export default Undecided;
