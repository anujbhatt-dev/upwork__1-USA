import React, {Component} from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

 class BelieverList extends Component{



   deleteHandler=()=>{
      toast.info("removed function working")
   }

   render(){
    if(!this.props.adminVerified){
      window.location.href="https://ancient-woodland-30225.herokuapp.com/admin"
    }

     return (
        <div className="list">
           <div className="list__h1">Believer List</div>
           <table className="list__table">
               <thead className="list__table-head">
                  <tr className="list__table-head-row">
                      <td  className="list__table-head-row-cell">First Name</td>
                      <td  className="list__table-head-row-cell">Last Name</td>
                      <td  className="list__table-head-row-cell">Email</td>
                      <td  className="list__table-head-row-cell">City</td>
                      <td  className="list__table-head-row-cell">Country</td>
                      <td  className="list__table-head-row-cell"></td>
                  </tr>
               </thead>
               <tbody className="list__table-body">
                  <tr className="list__table-body-row">
                      <td  className="list__table-body-row-cell">First</td>
                      <td  className="list__table-body-row-cell">Last</td>
                      <td  className="list__table-body-row-cell">Email@gmail.com</td>
                      <td  className="list__table-body-row-cell">City</td>
                      <td  className="list__table-body-row-cell">Country</td>
                      <td onClick={this.deleteHandler} className="list__table-body-row-cell list__table-body-row-cell--delete">remove</td>
                  </tr>
               </tbody>
           </table>
        </div>
     )
   }
 }


export default BelieverList;
