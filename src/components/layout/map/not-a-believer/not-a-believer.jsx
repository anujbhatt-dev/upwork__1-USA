import React, {Component} from "react"
// import notABeliever from "../../../../assets/images/not-a-believer.jpg"

class NotABeliever extends Component{
  state={
    count:0
  }

  componentDidMount=()=>{
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
       <div className="query__item-text query__non-believer-text">I AM NOT A BELIEVER</div>
       <p>
          I Join With all <strong>{this.state.count}</strong> others from <strong>{this.props.country}</strong> on <br/>
          this list in acknowledging that<br/>
          the universe was not created by God
       </p>
       </div>
    )
  }
}


export default NotABeliever;
