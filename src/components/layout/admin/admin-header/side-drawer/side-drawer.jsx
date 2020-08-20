 import React, {Component} from "react"


 class SideDrawer extends Component{

   render(){

     return (
        <div className={"sideDrawer "+this.props.toggler}>
            <div className="sideDrawer__container">
              <i onClick={this.props.clicked} className="fa fa-times sideDrawer__container-cross" aria-hidden="true"></i>
            </div>
        </div>
     )
   }
 }


export default SideDrawer;
