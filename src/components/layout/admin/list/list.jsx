import React, {Component} from "react"
import AdminHeader from "../admin-header/admin-header"
import { toast } from 'react-toastify';
import Flag from "react-world-flags"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import LayoutContext from "../../../layoutcontext";
toast.configure()


 class List extends Component{

   state={
      data:[],
      actualData:[],
      chars:[],
      modifiedData:[],
      deletedSet:new Set(),
      totalPages:0,
      pageNumber:0,
      loading:true,
      selectedCountry:"",
      selectedCategory:"all",
      countries:[],
   }

   static contextType=LayoutContext;

   currentIndex=null;
   currentChar=null;
   currentCountry=null;

   componentDidMount=()=>{

      axios.get("/v1/admin/data/all/0").then(res=>{
         axios.get("/v1/admin/country").then(res=>{
            console.log(res.data);
            this.setState({
              countries:res.data
            })        
         } )
         .catch(err=>{alert("error")})

         this.setState({
            totalPages:res.data.totalPages,
            data:res.data.content,
            loading:false,
         })        
      } )
      .catch(err=>{alert("error")})

      }

      

      componentDidUpdate(){
         
         if(this.state.loading==true)
         if(this.state.selectedCountry.length==0)
         axios.get(`/v1/admin/data/${this.state.selectedCategory}/${this.state.pageNumber}`).then(res=>{
            this.setState({
               totalPages:res.data.totalPages,
               data:res.data.content,
               loading:false,
               
            }) 
         }).catch(err=>alert("error"));
         else 
         axios.get(`/v1/admin/data/country/${this.state.selectedCountry}/${this.state.selectedCategory}/${this.state.pageNumber}`).then(res=>{
            this.setState({
               totalPages:res.data.totalPages,
               data:res.data.content,
               loading:false,
               
            }) 
         }).catch(err=>alert("error"));

      }

      pageHandler=(val)=>{

         if(this.state.pageNumber+val<0 || this.state.pageNumber+val>=this.state.totalPages)
         return ;
          
         this.setState((state)=>{
            return {pageNumber:state.pageNumber+val,loading:true}
         })

      }



      selectHandler=(val)=>{
              if(val==="all")
               this.setState({selectedCountry:"",selectedCategory:"all",loading:true,pageNumber:0});
            else
               this.setState({selectedCountry:val,selectedCategory:"all",loading:true,pageNumber:0});

      }



   deleteHandler=(index)=>{
         
// axios.delete("/v1/admin",{params:{email:this.state.data[i].email}}).
// then((res)=>{ 
   let data=[... this.state.data];
   data.splice(index,1);
      this.setState({data:data})
//    }).
// catch(err=>alert("an alert occured try again"));
      }

      filterHandler=(category)=>{
         this.setState({selectedCategory:category,loading:true,pageNumber:0});

      }
  


   render(){
     let perCountry = null
     if(this.state.data){

       perCountry =   <>
       <AdminHeader  selectHandler={this.selectHandler}  countries={this.state.countries}/>
         <div>
           <h2 onClick={()=>this.filterHandler("all")}>All</h2>
             <h2 onClick={()=>this.filterHandler("yes")}>BEL</h2>            
          <h2 onClick={()=>this.filterHandler("no")}>NONBEl</h2>
          <h2 onClick={()=>this.filterHandler("undecided")}>UnDE</h2>
           </div>
       
          <div className="list__heading">Do you believe in god ? </div>
          <table className="list">
              <thead className="list__head">
                   <tr className="list__head-row">
                       <td className="list__head-row-column">Name</td>
                       <td className="list__head-row-column">Added On</td>
                       <td className="list__head-row-column">Email</td>
                       <td className="list__head-row-column">City</td>
                       <td className="list__head-row-column">Country</td>
                       <td className="list__head-row-column">Status</td>
                       <td className="list__head-row-column list__head-row-coloumn--delete">delete</td>
                   </tr>
              </thead>
              {this.state.data.map((client,i)=>{
                 if( this.state.deletedSet.has(client.email))
                 return null;
                return (<tbody className="list__body">
                     <tr className="list__body-row">
              <td className="list__body-row-column">{client.firstName+" "}{client.lastName}</td>
                         <td className="list__body-row-column">{client.createdOn}</td>
                         <td className="list__body-row-column">{client.email}</td>
                         <td className="list__body-row-column">{client.city}</td>
                         <td className="list__body-row-column">{client.country}</td>
                         <td className="list__body-row-column">{client.category}</td>
                         <td className="list__body-row-column list__body-row-column--delete"><i onClick={()=>this.deleteHandler(i)} class="fa fa-trash" aria-hidden="true"></i></td>
                     </tr>
                </tbody>)
              })}
          </table>
{this.state.data.length>0?<><button onClick={()=>this.pageHandler(-1)} >{"<<  "}</button>
{this.state.pageNumber+1}/{this.state.totalPages}
<button onClick={()=>this.pageHandler(1)}>{"  >>"}</button></>
:"No DATA Yet"}       </>
     }


    return (
       <> {this.state.loading?"Loading...":perCountry}</>
         )
   }
 }


export default List;
