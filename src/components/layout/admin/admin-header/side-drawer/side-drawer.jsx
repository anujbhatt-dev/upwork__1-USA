 import React, {Component} from "react"


 class SideDrawer extends Component{

   state={
     stage:true
   }

   stageHandler=()=>{
     // alert("d")
     this.setState({
       stage:!this.state.stage
     })
   }

    onClickHandler=()=>{
      this.props.clicked()
      this.setState({
          stage:true
      })
    }


   render(){
     let stage1 = null
     let stage2 = null
    const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    stage1 =  alphabets.map(alphabet=>{
      return <div onClick={this.stageHandler} className="sideDrawer__container-stage1 sideDrawer__container-stage">{alphabet} <i className="fa fa-angle-right" aria-hidden="true"></i></div>
    })
    stage2 =  alphabets.map(alphabet=>{
      return <div onClick={this.onClickHandler} className="sideDrawer__container-stage2 sideDrawer__container-stage">{alphabet}</div>
    })


     return (
        <div className={"sideDrawer "+this.props.toggler}>
            <div className="sideDrawer__container">
              <i onClick={this.props.clicked} className="fa fa-times sideDrawer__container-cross" aria-hidden="true"></i>
              <div className="sideDrawer__container-logo">{this.state.stage?"Logo":<div onClick={this.stageHandler}><i style={{cursor:"pointer"}} className="fa fa-angle-left" aria-hidden="true"></i><span  style={{cursor:"pointer",paddingLeft:"2rem"}}>back</span></div>}</div>
               {this.state.stage?stage1:stage2}
            </div>
        </div>
     )
   }
 }


export default SideDrawer;
