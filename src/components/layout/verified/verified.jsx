import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import fireDb from '../../../firebase config/firebase-config'
import axios from 'axios';


 class Verified extends Component {

    componentDidMount(){
     var email = atob(this.props.match.params.email);
     var firstName = atob(this.props.match.params.firstName);
      var lastName = atob(this.props.match.params.lastName);
     var date = atob(this.props.match.params.date);
     var city = atob(this.props.match.params.city);
     var country = atob(this.props.match.params.country);
     var category = atob(this.props.match.params.category);
     var  code=this.props.match.params.code;

     let client={
         email:email,
         firstName:firstName,
         lastName:lastName,
         date:date,
         city:city,
         country:country,
         category:category,
         code:code,
     }



    //  let key=email.replace('.','DOT');
    //  fireDb.child("client/"+key).on('value',res=>{

    //     fireDb.child("client").child(key).set(client);
     //}

       axios.post("/v1/client",client);

         }


    render() {
        return (
            <div className="landing__item landing__item--11 landing__item--11-3">
                 <div style={{left:"0"}} className="landing__item-text landing__item-text-1"><i className="quote-left fa fa-quote-left" aria-hidden="true"></i>
                 Congrats Your Submission is Accepted
                 You Are one of a kind
                 <i className="quote-left fa fa-quote-right" aria-hidden="true"></i></div>
                 <button onClick={()=>{window.location=
                                  // "https://ancient-woodland-30225.herokuapp.com/map"
                                  "http://localhost:3000/map"
                             }} className="landing__item-button">Go Back</button>
            </div>
        )
    }
    }



export default withRouter(Verified);
