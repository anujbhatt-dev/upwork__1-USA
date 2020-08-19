import React, {Component} from "react"
import notABeliever from "../../../../assets/images/not-a-believer.jpg"

class NotABeliever extends Component{

  render(){

    return (
       <div className="query__item query__non-beliver" onClick={this.props.clicked}>
       <div className="query__item-text query__non-beliver-text">Not a Believer</div>
       <img className="query__item-image query__non-beliver-image" src={notABeliever} alt=""/>
       </div>
    )
  }
}


export default NotABeliever;
