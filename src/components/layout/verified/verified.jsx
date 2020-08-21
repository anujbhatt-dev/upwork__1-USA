import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import fireDb from '../../../firebase config/firebase-config'


 class Verified extends Component {
    
    componentDidMount(){
     var email = atob(this.props.match.params.email); 
     var firstName = atob(this.props.match.params.firstName); 
      var lastName = atob(this.props.match.params.lastName); 
     var date = atob(this.props.match.params.date); 
     var city = atob(this.props.match.params.city); 
     var country = atob(this.props.match.params.country); 
     var category = atob(this.props.match.params.category); 

     let client={
         email:email,
         firstName:firstName,
         lastName:lastName,
         date:date,
         city:city,
         country:country,
         category:category,
     }



     let key=email.replace('.','DOT');     
     fireDb.child("client/"+key).on('value',res=>{
      
        fireDb.child("client").child(key).set(client);
     
     })

         }


    render() {
        return (
            <div>
                Congrats Your Submission is Accepted 
                You Are one of a kind :{")"}
            </div>
        )
    }
    }
 


export default withRouter(Verified);
