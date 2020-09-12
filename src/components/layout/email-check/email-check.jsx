import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';


 class EmailCheck extends Component {
    render() {
        return (
            <div className="landing__item landing__item--11 landing__item--11-2">
                 <div style={{left:"0"}} className="landing__item-text landing__item-text-1">You are one step away from joining with other like-minded people from around the world.<br/>Check your email to verify and complete your sign-up.<br/>If you do not see your verification email, please check your spam folder.</div>              
            </div>
        )
    }
    }



export default withRouter(EmailCheck);
