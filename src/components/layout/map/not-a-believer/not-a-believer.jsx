import React, {Component} from "react"
// import notABeliever from "../../../../assets/images/not-a-believer.jpg"

class NotABeliever extends Component{
  state={
    count:0
  }

  componentDidMount=()=>{
    if(this.props.count)
    this.props.count.map(data=>{
      if(data[1]===this.props.country && data[2]==="no"){
          this.setState({
            count: data[0]
          })
      }
    })
  }


  render(){
    // <img className="query__item-image query__non-beliver-image" src={notABeliever} alt=""/>

    return (
       <div className="query__item query__non-believer" onClick={this.props.clicked}>
       <p>
          I Join With all <strong>{this.state.count}</strong> people in <br/> <strong style={{textTransform:"uppercase"}}>{this.props.country}</strong><br/>
          and <br/> <strong>{this.props.world.worldTotalNonBeliever}</strong> people in the <strong>WORLD</strong> <br/>
          in<br/> <strong>DENYING</strong><br/>that
          the <strong>universe was created by GOD</strong>
       </p>
       </div>
    )
  }
}


export default NotABeliever;
