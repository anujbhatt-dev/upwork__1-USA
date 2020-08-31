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
      selectedVerified:"all",
      selectedPublicFigure:"all",
      search:"all",
      countries:[],
   }

   static contextType=LayoutContext;

   currentIndex=null;
   currentChar=null;
   currentCountry=null;

   componentDidMount=()=>{

      axios.get("/v1/admin/data/all/all/all/all/0").then(res=>{
         axios.get("/v1/admin/country").then(res=>{
            this.setState({
              countries:res.data
            })        
         } )
         .catch(err=>{alert("error")})
         console.log("-->"+res.data);
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
         axios.get(`/v1/admin/data/${this.state.selectedCategory}/${this.state.selectedPublicFigure}/${this.state.selectedVerified}/${this.state.search}/${this.state.pageNumber}`).then(res=>{
            console.log("res  "+(res.data.content));

            this.setState({
               totalPages:res.data.totalPages,
               data:res.data.content,
               loading:false,
               
            }) 
         }).catch(err=>alert("error"));
         else 
        { 
         // console.log(this.state)  
         axios.get(`/v1/admin/data/country/${this.state.selectedCountry}/${this.state.selectedCategory}/${this.state.selectedPublicFigure}/${this.state.selectedVerified}/${this.state.search}/${this.state.pageNumber}`).then(res=>{
            console.log("res  "+(res.data.content));
            this.setState({
               totalPages:res.data.totalPages,
               data:res.data.content,
               loading:false,
               
            }) 
         }).catch(err=>alert("error"));}

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
               this.setState({selectedCountry:"",selectedCategory:"all",search:"all",selectedVerified:"all",selectedPublicFigure:"all",loading:true,pageNumber:0});
            else
               this.setState({selectedCountry:val,selectedCategory:"all",search:"all",selectedVerified:"all",selectedPublicFigure:"all",loading:true,pageNumber:0});
               document.getElementById("adminSearch").value="";

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

      filterHandler=(category,publicFigure,verified)=>{
         document.getElementById("adminSearch").value="";
         this.setState({search:"all",selectedCategory:category,selectedPublicFigure:publicFigure,selectedVerified:verified,loading:true,pageNumber:0});

      }

      verifyTooglehandler(email,index){
         // alert(email+" "+this.state.data[index].verified)
         // let data=[ ... this.state.data];
         // data[index].verified=data[index].verified==="true"?"false":"true";
         // this.setState({data:data});
         axios.post("/v1/admin/verifyToggle",null,{params:{email:email}}).then(res=>{
            let data=[ ... this.state.data];
            data[index].verified=!data[index].verified
            this.setState({data:data});
            })
      }

      searchHandler=()=>{
         
       let val= document.getElementById("adminSearch").value;
       if(val==="")
       val="all";
       //alert(val);

         this.setState({search:val,loading:true});
      }
  


   render(){
      //console.log(this.state)
     let perCountry = "No DATA Yet";
     if(this.state.data){

       perCountry =   <>
       <AdminHeader  selectHandler={this.selectHandler}  countries={this.state.countries}/>
         <div>
           <h1 onClick={()=>this.filterHandler("all","all","all")}>All</h1><h2 onClick={()=>this.filterHandler("all","all","true")}>Verified</h2><h2 onClick={()=>this.filterHandler("all","all","false")}>Not Verified</h2>
            <h1 >BELEIVER</h1><h2 onClick={()=>this.filterHandler("yes","all","all")}>All</h2><h2 onClick={()=>this.filterHandler("yes","all","true")}>All verified</h2><h2 onClick={()=>this.filterHandler("yes","all","false")}>All not verified</h2><h2 onClick={()=>this.filterHandler("yes","PF1","all")}>PF1</h2><h2 onClick={()=>this.filterHandler("yes","PF1","true")}>PF1 verified</h2><h2 onClick={()=>this.filterHandler("yes","PF1","false")}>PF1 not verified</h2><h2 onClick={()=>this.filterHandler("yes","PF2","all")}>PF2 </h2><h2 onClick={()=>this.filterHandler("yes","PF2","true")}>PF2 verified</h2><h2 onClick={()=>this.filterHandler("yes","PF2","false")}>PF2 not verified</h2><h2 onClick={()=>this.filterHandler("yes","Other","all")}>Other</h2>          
          <h1 >NONBELEIVER</h1><h2 onClick={()=>this.filterHandler("no","all","all")}>All</h2><h2 onClick={()=>this.filterHandler("no","all","true")}>All verified</h2><h2 onClick={()=>this.filterHandler("no","all","false")}>All not verified</h2><h2 onClick={()=>this.filterHandler("no","PF1","all")}>PF1 </h2><h2 onClick={()=>this.filterHandler("no","PF1","true")}>PF1 verified</h2><h2 onClick={()=>this.filterHandler("no","PF1","false")}>PF1 not verified</h2><h2 onClick={()=>this.filterHandler("no","PF2","all")}>PF2 </h2><h2 onClick={()=>this.filterHandler("no","PF2","true")}>PF2 verified</h2><h2 onClick={()=>this.filterHandler("no","PF2","false")}>PF2 not verified</h2><h2 onClick={()=>this.filterHandler("no","Other","all")}>Other</h2>
     <h1 >UnDECIDED</h1><h2 onClick={()=>this.filterHandler("undecided","all","all")}>All</h2><h2 onClick={()=>this.filterHandler("undecided","all","true")}>All verified</h2><h2 onClick={()=>this.filterHandler("undecided","all","false")}>All not verified</h2><h2 onClick={()=>this.filterHandler("undecided","PF1","all")}>PF1 </h2><h2 onClick={()=>this.filterHandler("undecided","PF1","true")}>PF1 verified</h2><h2 onClick={()=>this.filterHandler("undecided","PF1","false")}>PF1 not verified</h2><h2 onClick={()=>this.filterHandler("undecided","PF2","all")}>PF2 </h2><h2 onClick={()=>this.filterHandler("undecided","PF2","true")}>PF2 verified</h2><h2 onClick={()=>this.filterHandler("undecided","PF2","false")}>PF2 not verified</h2><h2 onClick={()=>this.filterHandler("undecided","Other","all")}>Other</h2>
           <input id="adminSearch" type="text"/><button onClick={this.searchHandler}>Search</button>
           
           </div>
       
          <div className="list__heading">Do you believe in god ? </div>
          <table className="list">
              <thead className="list__head">
                   <tr className="list__head-row">
                   <td className="list__head-row-column"></td>
                 <td className="list__head-row-column">Name</td>
                       <td className="list__head-row-column">Added On</td>
                       <td className="list__head-row-column">Email</td>
                       <td className="list__head-row-column">City</td>
                       <td className="list__head-row-column">Country</td>
                       <td className="list__head-row-column">Status</td>
                       <td className="list__head-row-column list__head-row-coloumn--delete"></td>
                   </tr>
              </thead>
              {this.state.data.map((client,i)=>{
                 if( this.state.deletedSet.has(client.email))
                 return null;
                return (<tbody className="list__body">
                     <tr className="list__body-row">
                       {client.publicFigure!=="OTHER"?<td className="list__body-row-column">{client.verified===true?<button onClick={()=>this.verifyTooglehandler(client.email,i)}>UnVerify</button>:<button onClick={()=>this.verifyTooglehandler(client.email,i)} >Verify</button>}</td>:<td className="list__body-row-column"></td>}
                    <td className="list__body-row-column">{client.firstName+" "}{client.lastName+"  "}{client.publicFigure}</td>
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
