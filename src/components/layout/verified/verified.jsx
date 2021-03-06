import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
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
     var publicFigure = atob(this.props.match.params.publicFigure);
     var knowMore=atob(this.props.match.params.knowMore)

     var  code=this.props.match.params.code;

     let client={
         email:email,
         firstName:firstName,
         lastName:lastName,
         date:date,
         city:city,
         country:country,
         category:category,
         publicFigure:publicFigure,
         code:code,
         knowMore:knowMore,
     }

       axios.post("/v1/client",client);

         }


    render() {
        return (
            <div className="landing__item landing__item--11 landing__item--11-3">
                 <div style={{left:"0"}} className="landing__item-text landing__item-text-1">
                 Congratulations! You have now joined with other<br/>like-minded people from around the world!
                </div>
                 <button style={{top:"80%"}} onClick={()=>{window.location=
                                  "http://www.bigq.world/map"
                                  // "http://localhost:3000/map"
                             }} className="landing__item-button">Go Back</button>
            </div>
        )
    }
    }



export default withRouter(Verified);
