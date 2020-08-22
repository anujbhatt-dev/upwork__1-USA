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
      actualData:[],
   }

   currentIndex=null;
   currentChar=null;
   currentCountry=null;

   componentDidMount(){

      axios.get("/v1/admin/data").then(res=>{
           this.setState({actualData:res.data});
      
        
       let data=[];
       let actualData=this.state.actualData;
       let count=0;
       console.log(this.state.actualData)
      while(count<actualData.length){
       let char={
          value:'',
          country:[],
       };
       data.push(char);
       console.log("added char "+data);
       char.value=actualData[count].country.charAt(0);
          while(count<actualData.length && actualData[count].country.charAt(0)===char.value){
             let country={
                name:'',
                clients:{
                   yes:[],
                   no:[],
                  notDecided:[]
                },
             }
             char.country.push(country);
             country.name=actualData[count].country;
              while(count<actualData.length && actualData[count].country===country.name){
                  let client={... actualData[count]};
                  if(client.category==="yes")
                    country.clients.yes.push(client);
                  else if(client.category==="no")
                    country.clients.no.push(client);
                  else            
                    country.clients.notDecided.push(client);

                     count++;  
                                  
              }
          }
      }

    console.log(data);
this.setState({data:data});
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

    let perCountry=
      <>
      <AdminHeader/>
      <div className="list">
         <div className="list__h1">List</div>
 
          {this.state.data.map(char=>
          <>
          <h1>{char.value}</h1>
          <div className="list__wrapper">
        
        {char.country.map(country=>
        <>
        <h2>{country.name}</h2>
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
               
               {country.clients.yes.map(client=>
                 <tr className="list__table-body-row">
                   <td  className="list__table-body-row-cell">{client.firstName}</td>
                    <td  className="list__table-body-row-cell">{client.lastName}</td>
                    <td  className="list__table-body-row-cell">{client.email}</td>
                    <td  className="list__table-body-row-cell">{client.city}</td>
                    <td  className="list__table-body-row-cell">{client.date}</td>
                    <td onClick={()=>this.deleteHandler(1)} className="list__table-body-row-cell list__table-body-row-cell--delete"><i className="fa fa-trash" aria-hidden="true"></i></td>
                </tr>
                )}

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
             {country.clients.no.map(client=>
                  <tr className="list__table-body-row">
                  <td  className="list__table-body-row-cell">{client.firstName}</td>
                    <td  className="list__table-body-row-cell">{client.lastName}</td>
                    <td  className="list__table-body-row-cell">{client.email}</td>
                    <td  className="list__table-body-row-cell">{client.city}</td>
                    <td  className="list__table-body-row-cell">{client.date}</td>
                    <td onClick={()=>this.deleteHandler(1)} className="list__table-body-row-cell list__table-body-row-cell--delete"><i className="fa fa-trash" aria-hidden="true"></i></td>
                </tr>
             )}
  
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
                
             {country.clients.no.map(client=>
                 <tr className="list__table-body-row">
                   <td  className="list__table-body-row-cell">{client.firstName}</td>
                    <td  className="list__table-body-row-cell">{client.lastName}</td>
                    <td  className="list__table-body-row-cell">{client.email}</td>
                    <td  className="list__table-body-row-cell">{client.city}</td>
                    <td  className="list__table-body-row-cell">{client.date}</td>
                    <td onClick={()=>this.deleteHandler(1)} className="list__table-body-row-cell list__table-body-row-cell--delete"><i className="fa fa-trash" aria-hidden="true"></i></td>
                </tr>
             )}

             </tbody>
         </table>
         </>
         )}

         </div>
         </>
         )}

      </div>
    </>

    
    return (
       perCountry
         )
   }
 }


export default List;
