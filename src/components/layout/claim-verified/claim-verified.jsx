import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';


 class ClaimVerified extends Component {


    componentDidMount=()=>{

         let usedEmail=atob(this.props.match.params.emailUsed);
         let email=atob(this.props.match.params.email);
         let phone=atob(this.props.match.params.phone);

         axios.post("/v1/client/claim",null,{params:{usedEmail:usedEmail,email:email,phone:phone}});
    }

    render() {


        return (
          <div className="landing__item landing__item--11 landing__item--11-4">
               <div style={{left:"0",fontWeight:"bolder"}} className="landing__item-text landing__item-text-1"><i className="quote-left fa fa-quote-left" aria-hidden="true"></i>
               Congrats Your Claim has been initialed.<br/>we will reach out to you soon.
               <i className="quote-left fa fa-quote-right" aria-hidden="true"></i></div>
               <button onClick={()=>{window.location=
                                "http://www.bigq.world/publicFigure"
                           }} className="landing__item-button">Go Back</button>
          </div>
        )
    }
}


export default withRouter(ClaimVerified);
