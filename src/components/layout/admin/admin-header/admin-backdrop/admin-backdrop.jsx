import React, {Component} from "react"


 class AdminBackdrop extends Component{

   render(){
     let backdrop=null;
     if(this.props.show){
       backdrop=<div onClick={this.props.clicked} className="backdrop sideDrawer__backdrop"></div>
     }
     return (
       backdrop
     )
   }
 }


export default AdminBackdrop;
