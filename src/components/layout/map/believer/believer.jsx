 import React, {Component} from "react"

 class Believer extends Component{
   state={
     count:0
   }

   componentDidMount=()=>{
    if(this.props.count)
     this.props.count.map(data=>{
       if(data[1]===this.props.country && data[2]==="yes"){
           this.setState({
             count: data[0]
           })
       }
     })
   }

   render(){

     return (
        <div className="query__item query__believer" onClick={this.props.clicked}>
          <p>
             I join <strong>{this.state.count}</strong><br/><br/> others in<br/><strong style={{textTransform:"uppercase"}}>{this.props.country}</strong><br/><br/>
             and<br/><strong>{this.props.world.worldTotalBeliever}</strong><br/>others in the<br/><strong>WORLD</strong><br/><br/>
             <strong style={{textDecoration:"underline"}}>ACKNOWLEDGING</strong><br/>that
             the<br/><strong>universe was created by</strong><br/>an
             intelligent Being<br/>we refer to as <strong>God.</strong>
          </p>
        </div>
     )
   }
 }


export default Believer;
