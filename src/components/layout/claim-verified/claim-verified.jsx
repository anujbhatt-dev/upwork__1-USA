import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';


 class ClaimVerified extends Component {


    componentDidMount=()=>{

         let usedEmail=atob(this.props.match.params.emailUsed);
         let email=atob(this.props.match.params.email);
         let phone=atob(this.props.match.params.phone);

       console.log(usedEmail+"  "+phone+"  "+email)
    //   console.log(this.props.match)
         axios.post("/v1/client/claim",null,{params:{usedEmail:usedEmail,email:email,phone:phone}});
    }

    render() {

        
        return (
            <div>
                24234
            </div>
        )
    }
}


export default withRouter(ClaimVerified);