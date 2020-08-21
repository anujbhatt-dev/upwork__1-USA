import React, {Component} from "react"
import AdminHeader from "../admin-header/admin-header"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fireDb from '../../../../firebase config/firebase-config'
toast.configure()

 class List extends Component{

   state={
      data:null
   }

   componentDidMount(){

      fireDb.child('client').on('value',res=>{
          this.setState({data:res.val()});
          console.log(this.state.data);

      })

   }

   deleteHandler=(key)=>{

      let client=this.state.data[key];
      let email=client.email;
alert("delete "+key)
let newData={... this.state.data};
delete newData[key];
this.setState({data:newData})
      fireDb.child(`client/${key}`).remove(res=>toast.info(`removed ${email}`));
   }

   render(){
    // if(!this.props.adminVerified){
    //   window.location.href= "http://localhost:3000/admin"//"https://ancient-woodland-30225.herokuapp.com/admin"
    // }

     return (
       <>
          <AdminHeader/>
          <div className="list">
             <div className="list__h1">List</div>
             <div className="list__wrapper">
             <table className="list__table">
                 <thead className="list__table-head">
                    <tr className="list__table-head-row" ><td className="list__table-head-row-head" colspan={6}>Believers</td></tr>
                    <tr className="list__table-head-row">
                        <td  className="list__table-head-row-cell">First Name</td>
                        <td  className="list__table-head-row-cell">Last Name</td>
                        <td  className="list__table-head-row-cell">Email</td>
                        <td  className="list__table-head-row-cell">City</td>
                        <td  className="list__table-head-row-cell">Added On</td>
                        <td  className="list__table-head-row-cell"></td>
                    </tr>
                 </thead>
                 <tbody className="list__table-body">

                 {this.state.data?Object.keys(this.state.data).map(key=>{

                    let val=this.state.data[key];

                    return (
                     <tr className="list__table-body-row">
                         <td  className="list__table-body-row-cell">{val.firstName}</td>
                        <td  className="list__table-body-row-cell">{val.lastName}</td>
                        <td  className="list__table-body-row-cell">{val.email}</td>
                        <td  className="list__table-body-row-cell">{val.city}</td>
                        <td  className="list__table-body-row-cell">{val.date}</td>
                        <td onClick={()=>this.deleteHandler(key)} className="list__table-body-row-cell list__table-body-row-cell--delete"><i className="fa fa-trash" aria-hidden="true"></i></td>
                    </tr>)}
                    ):null}
                 </tbody>
             </table>
             <table className="list__table">
                 <thead className="list__table-head">
                 <tr className="list__table-head-row" ><td className="list__table-head-row-head" colspan={6}>Non Believers</td></tr>
                    <tr className="list__table-head-row">
                        <td  className="list__table-head-row-cell">First Name</td>
                        <td  className="list__table-head-row-cell">Last Name</td>
                        <td  className="list__table-head-row-cell">Email</td>
                        <td  className="list__table-head-row-cell">City</td>

                        <td  className="list__table-head-row-cell">Added On</td>

                        <td  className="list__table-head-row-cell"></td>
                    </tr>
                 </thead>
                 <tbody className="list__table-body">

                 {this.state.data?Object.keys(this.state.data).map(key=>{

                    let val=this.state.data[key];

                    return (
                     <tr className="list__table-body-row">
                         <td  className="list__table-body-row-cell">{val.firstName}</td>
                        <td  className="list__table-body-row-cell">{val.lastName}</td>
                        <td  className="list__table-body-row-cell">{val.email}</td>
                        <td  className="list__table-body-row-cell">{val.city}</td>
                        <td  className="list__table-body-row-cell">{val.date}</td>
                        <td onClick={()=>this.deleteHandler(key)} className="list__table-body-row-cell list__table-body-row-cell--delete"><i className="fa fa-trash" aria-hidden="true"></i></td>
                    </tr>)}
                    ):null}
                 </tbody>
             </table>
             <table className="list__table">
                 <thead className="list__table-head">
                    <tr className="list__table-head-row"><td className="list__table-head-row-head" colspan={6}>Undecided</td></tr>
                    <tr className="list__table-head-row">
                        <td  className="list__table-head-row-cell">First Name</td>
                        <td  className="list__table-head-row-cell">Last Name</td>
                        <td  className="list__table-head-row-cell">Email</td>
                        <td  className="list__table-head-row-cell">City</td>
                        <td  className="list__table-head-row-cell">Added On</td>
                        <td  className="list__table-head-row-cell"></td>
                    </tr>
                 </thead>
                 <tbody className="list__table-body">

                 {this.state.data?Object.keys(this.state.data).map(key=>{

                    let val=this.state.data[key];

                    return (
                     <tr className="list__table-body-row">

                         <td  className="list__table-body-row-cell">{val.firstName}</td>
                        <td  className="list__table-body-row-cell">{val.lastName}</td>
                        <td  className="list__table-body-row-cell">{val.email}</td>
                        <td  className="list__table-body-row-cell">{val.city}</td>
                        <td  className="list__table-body-row-cell">{val.date}</td>
                        <td onClick={()=>this.deleteHandler(key)} className="list__table-body-row-cell list__table-body-row-cell--delete"><i className="fa fa-trash" aria-hidden="true"></i></td>
                    </tr>)}
                    ):null}
                 </tbody>
             </table>
             </div>
          </div>
        </>
     )
   }
 }


export default List;
