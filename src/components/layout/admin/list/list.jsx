import React, {Component} from "react"
import AdminHeader from "../admin-header/admin-header"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
toast.configure()

 class List extends Component{

   state={
      data:[],
      actualData:[],
      modifiedData:[],
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
this.setState({data:data,modifiedData:data});
   })

      }


      selectHandler=(charIndex,countryIndex)=>{
           // alert(charIndex+"- "+countryIndex)
        if(countryIndex===-1){
           let data=[... this.state.modifiedData]
           console.log(data);
         this.setState({data:data});
         return ;
        }

        let data=[];
         let char={value:this.state.modifiedData[charIndex].value.charAt(0),country:[]};
         let country={name:this.state.modifiedData[charIndex].country[countryIndex].name};
         let clients=this.state.modifiedData[charIndex].country[countryIndex].clients
         country.clients=clients;
         char.country.push(country);
         data.push(char);
         console.log(data);
         this.setState({data:data});
      }



   deleteHandler=(chari, countryi,category,clienti)=>{

      let data=[... this.state.data];
      let char=data[chari];
      console.log(char.value);
       let country=char.country[countryi];
       console.log(country.name);
       let cat;
       if(category==="yes")
         cat=country.clients.yes;
       else if(category==="no")
         cat=country.clients.no;
       else
         cat=country.clients.notDecided;

       console.log(cat);
       cat.splice(clienti,1);
       this.setState({data:data});
   }


   render(){
    // if(!this.props.adminVerified){
    //   window.location.href= "http://localhost:3000/admin"//"https://ancient-woodland-30225.herokuapp.com/admin"
    // }

    let perCountry=null;

    if(this.state.data)
     perCountry=
      <>
      <AdminHeader  selectHandler={this.selectHandler}  data={this.state.modifiedData}/>
      <div className="list">
         <div className="list__h1">Do you believe in God ?</div>

          {this.state.data.map((char,chari)=>
          <>
          <h1 className="list__char">{char.value}</h1>
          <div className="list__wrapper">

        {char.country.map((country,countryi)=>
        <>
        <h2  className="list__country">{country.name}</h2>
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

               {country.clients.yes.map((client,clienti)=>
                 <tr className="list__table-body-row">
                   <td  className="list__table-body-row-cell">{client.firstName}</td>
                    <td  className="list__table-body-row-cell">{client.lastName}</td>
                    <td  className="list__table-body-row-cell">{client.email}</td>
                    <td  className="list__table-body-row-cell">{client.city}</td>
                    <td  className="list__table-body-row-cell">{client.createdOn}</td>
                    <td onClick={()=>this.deleteHandler(chari,countryi,"yes",clienti)} className="list__table-body-row-cell list__table-body-row-cell--delete"><i className="fa fa-trash" aria-hidden="true"></i></td>
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
             {country.clients.no.map((client,clienti)=>
                  <tr className="list__table-body-row">
                  <td  className="list__table-body-row-cell">{client.firstName}</td>
                    <td  className="list__table-body-row-cell">{client.lastName}</td>
                    <td  className="list__table-body-row-cell">{client.email}</td>
                    <td  className="list__table-body-row-cell">{client.city}</td>
                    <td  className="list__table-body-row-cell">{client.createdOn}</td>
                    <td onClick={()=>this.deleteHandler(chari,countryi,"no",clienti)} className="list__table-body-row-cell list__table-body-row-cell--delete"><i className="fa fa-trash" aria-hidden="true"></i></td>
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

             {country.clients.notDecided.map((client,clienti)=>
                 <tr className="list__table-body-row">
                   <td  className="list__table-body-row-cell">{client.firstName}</td>
                    <td  className="list__table-body-row-cell">{client.lastName}</td>
                    <td  className="list__table-body-row-cell">{client.email}</td>
                    <td  className="list__table-body-row-cell">{client.city}</td>
                    <td  className="list__table-body-row-cell">{client.createdOn}</td>
                    <td onClick={()=>this.deleteHandler(chari,countryi,"notDecided",clienti)} className="list__table-body-row-cell list__table-body-row-cell--delete"><i className="fa fa-trash" aria-hidden="true"></i></td>
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
