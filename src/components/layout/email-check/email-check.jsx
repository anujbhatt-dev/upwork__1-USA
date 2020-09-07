import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';


 class EmailCheck extends Component {
    render() {
        return (
            <div className="landing__item landing__item--11 landing__item--11-2">
                 <div style={{left:"0"}} className="landing__item-text landing__item-text-1"><i className="quote-left fa fa-quote-left" aria-hidden="true"></i>check you email for verification<i className="quote-left fa fa-quote-right" aria-hidden="true"></i></div>              
            </div>
        )
    }
    }



export default withRouter(EmailCheck);
