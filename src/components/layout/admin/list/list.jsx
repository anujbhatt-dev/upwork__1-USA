import React, {Component} from "react"
import AdminHeader from "../admin-header/admin-header"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fireDb from '../../../../firebase config/firebase-config'
import axios from "axios";
toast.configure()

 class List extends Component{

   state={
      data:[],
   }

   currentIndex=null;
   currentChar=null;
   currentCountry=null;

   componentDidMount(){

      axios.get("/v1/admin/data").then(res=>{
           console.log(res.data);
           if(res.data)
           {
               current:res.data[0].country.charAt(0)}
             this.setState({data:res.data});
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

      entry=()=>{

        return this.state.data.map((client,index)=>{
          if(this.currentChar!==client.country.charAt(0)){
            this.currentChar=client.country.charAt(0);
            this.currentCountry=client.country;
            return (
              <div className="list">
              <h1 className="list__char">{this.currentCountry.charAt(0)}</h1><br></br>
              <h2 className="list__country">{this.currentCountry}</h2>
              <div className="list__category list__category--believer">
                  <h1 className="list__category-head">Believer</h1>
                  <div className="list__category-division">First Name</div>
                  <div className="list__category-division">Last Name</div>
                  <div className="list__category-division">Email</div>
                  <div className="list__category-division">city</div>
                  <div className="list__category-division">Added on</div>
                  <div className="list__category-division"></div>
              </div>
              <div className="list__category list__category--notABeliever">
                  <h1 className="list__category-head">Non Believers</h1>
                  <div className="list__category-division">First Name</div>
                  <div className="list__category-division">Last Name</div>
                  <div className="list__category-division">Email</div>
                  <div className="list__category-division">city</div>
                  <div className="list__category-division">Added on</div>
                  <div className="list__category-division"></div>
              </div>
              <div className="list__category list__category--undecided">
                  <h1 className="list__category-head">Undecided</h1>
                  <div className="list__category-division">First Name</div>
                  <div className="list__category-division">Last Name</div>
                  <div className="list__category-division">Email</div>
                  <div className="list__category-division">city</div>
                  <div className="list__category-division">Added on</div>
                  <div className="list__category-division"></div>
              </div>
              {client.category==="yes"?
              <div className="list__category list__category--undecided left">
                  <div className="list__category-division">{client.firstName}</div>
                  <div className="list__category-division">{client.lastName}</div>
                  <div className="list__category-division">{client.email}</div>
                  <div className="list__category-division">{client.city}</div>
                  <div className="list__category-division">{client.date}</div>
                  <div className="list__category-division"></div>
              </div>:
               client.category==="no"?
               <div className="list__category list__category--undecided left">
                   <div className="list__category-division">{client.firstName}</div>
                   <div className="list__category-division">{client.lastName}</div>
                   <div className="list__category-division">{client.email}</div>
                   <div className="list__category-division">{client.city}</div>
                   <div className="list__category-division">{client.date}</div>
                   <div className="list__category-division"></div>
               </div>
               :
               <div className="list__category list__category--undecided left">
                   <div className="list__category-division">{client.firstName}</div>
                   <div className="list__category-division">{client.lastName}</div>
                   <div className="list__category-division">{client.email}</div>
                   <div className="list__category-division">{client.city}</div>
                   <div className="list__category-division">{client.date}</div>
                   <div className="list__category-division"></div>
               </div>}
              </div>
               )
        }else if(this.currentCountry!==client.country){
          this.currentCountry=client.country;
            return (
         <div>
         <h2>{this.currentCountry}</h2>
         <h3>Beleiver</h3><h3>Non Beleiver</h3><h3>Not Decided</h3>
         {client.category==="yes"?client.firstName+" "+client.lastName:
          client.category==="no"?<>{client.firstName+" "}{client.lastName}</>:
          <>{client.firstName+" "}{client.lastName}</>}
         </div>
            )
   }

   else{
      return (
         <div>
         {client.category==="yes"?client.firstName+" "+client.lastName:
          client.category==="no"?<>{client.firstName+" "}{client.lastName}</>:
          <>{client.firstName+" "}{client.lastName}</>}
         </div>
            )
   }
}
)
   }

   // perCountryChar=(char)=>{
   //
   // }
   //
   // perCountry=(client)=>{
   //    return (
   //       <div className="list__wrapper">
   //       <table className="list__table">
   //           <thead className="list__table-head">
   //              <tr className="list__table-head-row" ><td className="list__table-head-row-head" colspan={6}>Believers</td></tr>
   //              <tr className="list__table-head-row">
   //                  <td  className="list__table-head-row-cell">First Name</td>
   //                  <td  className="list__table-head-row-cell">Last Name</td>
   //                  <td  className="list__table-head-row-cell">Email</td>
   //                  <td  className="list__table-head-row-cell">City</td>
   //                  <td  className="list__table-head-row-cell">Added On</td>
   //                  <td  className="list__table-head-row-cell"></td>
   //              </tr>
   //           </thead>
   //           <tbody className="list__table-body">
   //
   //           {this.state.data?Object.keys(this.state.data).map(key=>{
   //
   //              let val=this.state.data[key];
   //
   //              return (
   //               <tr className="list__table-body-row">
   //                   <td  className="list__table-body-row-cell">{val.firstName}</td>
   //                  <td  className="list__table-body-row-cell">{val.lastName}</td>
   //                  <td  className="list__table-body-row-cell">{val.email}</td>
   //                  <td  className="list__table-body-row-cell">{val.city}</td>
   //                  <td  className="list__table-body-row-cell">{val.date}</td>
   //                  <td onClick={()=>this.deleteHandler(key)} className="list__table-body-row-cell list__table-body-row-cell--delete"><i className="fa fa-trash" aria-hidden="true"></i></td>
   //              </tr>)}
   //              ):null}
   //           </tbody>
   //       </table>
   //       <table className="list__table">
   //           <thead className="list__table-head">
   //           <tr className="list__table-head-row" ><td className="list__table-head-row-head" colspan={6}>Non Believers</td></tr>
   //              <tr className="list__table-head-row">
   //                  <td  className="list__table-head-row-cell">First Name</td>
   //                  <td  className="list__table-head-row-cell">Last Name</td>
   //                  <td  className="list__table-head-row-cell">Email</td>
   //                  <td  className="list__table-head-row-cell">City</td>
   //
   //                  <td  className="list__table-head-row-cell">Added On</td>
   //
   //                  <td  className="list__table-head-row-cell"></td>
   //              </tr>
   //           </thead>
   //           <tbody className="list__table-body">
   //
   //           {this.state.data?Object.keys(this.state.data).map(key=>{
   //
   //              let val=this.state.data[key];
   //
   //              return (
   //               <tr className="list__table-body-row">
   //                   <td  className="list__table-body-row-cell">{val.firstName}</td>
   //                  <td  className="list__table-body-row-cell">{val.lastName}</td>
   //                  <td  className="list__table-body-row-cell">{val.email}</td>
   //                  <td  className="list__table-body-row-cell">{val.city}</td>
   //                  <td  className="list__table-body-row-cell">{val.date}</td>
   //                  <td onClick={()=>this.deleteHandler(key)} className="list__table-body-row-cell list__table-body-row-cell--delete"><i className="fa fa-trash" aria-hidden="true"></i></td>
   //              </tr>)}
   //              ):null}
   //           </tbody>
   //       </table>
   //       <table className="list__table">
   //           <thead className="list__table-head">
   //              <tr className="list__table-head-row"><td className="list__table-head-row-head" colspan={6}>Undecided</td></tr>
   //              <tr className="list__table-head-row">
   //                  <td  className="list__table-head-row-cell">First Name</td>
   //                  <td  className="list__table-head-row-cell">Last Name</td>
   //                  <td  className="list__table-head-row-cell">Email</td>
   //                  <td  className="list__table-head-row-cell">City</td>
   //                  <td  className="list__table-head-row-cell">Added On</td>
   //                  <td  className="list__table-head-row-cell"></td>
   //              </tr>
   //           </thead>
   //           <tbody className="list__table-body">
   //           </tbody>
   //
   //       </table>
   //       </div>
   //
   //    )
   //
   //
   // }
   //
   // perClient=()=>{
   //
   // }
   //
    // if(!this.props.adminVerified){
    //   window.location.href= "http://localhost:3000/admin"//"https://ancient-woodland-30225.herokuapp.com/admin"
    // }

    // let perCountry=
    render(){
    return  <>
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
  }

   //  render(){
   //  return (
   //     [
   //       <AdminHeader/>
   //      , this.entry()
   //     ]
   //       )
   // }
 }


export default List;
