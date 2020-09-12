 import React, {Component} from "react"


 class Modal extends Component{




   render(){
     let modal=null
     if(this.props.show){
       modal=<div style={this.props.styles}
        className={"modal "+this.props.classModal}>
                  {this.props.children}
                  <i onClick={this.props.clicked}  className="fa fa-times modalCross" aria-hidden="true"></i>
              </div>
     }
     return (
         modal
     )
   }
 }


export default Modal;
