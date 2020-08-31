 import React, {Component} from "react"
// import believer from "../../../../assets/images/believer.jpg"

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
     // <img className="query__item-image query__beliver-image" src={believer} alt=""/>

     return (
        <div className="query__item query__believer" onClick={this.props.clicked}>
          <p>
             I Join With <strong>{this.state.count}</strong> people in <br/> <strong style={{textTransform:"uppercase"}}>{this.props.country}</strong><br/>
             and <br/> <strong>{this.props.world.worldTotalBeliever}</strong> people in the <strong>WORLD</strong> <br/>
             in<br/> <strong>ACKNOWLEDGING</strong><br/>that
             the <strong>universe was created by</strong> an
             intelligent being we refer to as <strong>God</strong>
          </p>
        </div>
     )
   }
 }


export default Believer;
