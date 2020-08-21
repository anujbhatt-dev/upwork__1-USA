import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';


 class Verified extends Component {
    
    componentDidMount(){
     var email = atob(this.props.match.params.email); 
     var firstName = atob(this.props.match.params.firstName); 
      var lastName = atob(this.props.match.params.lastName); 
     var date = atob(this.props.match.params.date); 
     var location = atob(this.props.match.params.location); 
     var country = atob(this.props.match.params.country); 
     var category = atob(this.props.match.params.category); 

         }


    render() {
        return (
            <div>
                Congrats Your Submission is Accepted 
                You Are one of a kind :)
            </div>
        )
    }
}


export default withRouter(Verified);

//c2FnYXJtb25AZ21haWwuY29t/c2FnYXI=/cGFud2Fy/MTIvMzQvNDU2Nw==/REQ=SW5kaWE=/bm8=/bm8=
//12/34/4567