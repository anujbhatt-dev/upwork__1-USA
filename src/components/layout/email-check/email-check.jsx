import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import fireDb from '../../../firebase config/firebase-config'
import axios from 'axios';


 class EmailCheck extends Component {
    render() {
        return (
            <div className="landing__item landing__item--11 landing__item--11-2">
                 <div style={{left:"0"}} className="landing__item-text landing__item-text-1"><i className="quote-left fa fa-quote-left" aria-hidden="true"></i>check you email for verification<i className="quote-left fa fa-quote-right" aria-hidden="true"></i></div>
                 <button onClick={()=>{window.location=
                                  // "https://ancient-woodland-30225.herokuapp.com/map"
                                  "http://localhost:3000/map"
                             }} className="landing__item-button">Go Back</button>
            </div>
        )
    }
    }



export default withRouter(EmailCheck);
