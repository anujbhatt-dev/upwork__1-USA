import React, {Component} from "react"
import AdminHeader from "../admin-header/admin-header"
import { toast } from 'react-toastify';
import Flag from "react-world-flags"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import LayoutContext from "../../../layoutcontext";
import Modal from "../../../../UI/modal/modal";
import Backdrop from "../../../../UI/backdrop/backdrop";
import ModalView from "./modal-view/modal-view";
import AddClientForm from "./add-client/add-client";
import {withRouter} from "react-router-dom"

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
      modalShow:false,
      selectedClient:null,
      show2:false
   }

   static contextType=LayoutContext;

   currentIndex=null;
   currentChar=null;
   currentCountry=null;

   componentDidMount=()=>{



      axios.get("/v1/client/data/all/all/all/all/0").then(res=>{
         axios.get("/v1/admin/country").then(res=>{
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
         axios.get(`/v1/client/data/${this.state.selectedCategory}/${this.state.selectedPublicFigure}/${this.state.selectedVerified}/${this.state.search}/${this.state.pageNumber}`).then(res=>{
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
         axios.get(`/v1/client/data/country/${this.state.selectedCountry}/${this.state.selectedCategory}/${this.state.selectedPublicFigure}/${this.state.selectedVerified}/${this.state.search}/${this.state.pageNumber}`).then(res=>{
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

axios.delete("/v1/admin",{params:{email:this.state.data[index].email}}).
then((res)=>{
   let data=[... this.state.data];
   data.splice(index,1);
      this.setState({data:data});
      this.modalShowFalseHandler();
   }).
catch(err=>alert("an alert occured try again"));
      }

      filterHandler=(category,publicFigure,verified)=>{
         document.getElementById("adminSearch").value="";
         this.setState({search:"all",selectedCategory:category,selectedPublicFigure:publicFigure,selectedVerified:verified,loading:true,pageNumber:0});

      }

      verifyTooglehandler=(email,index)=>{
         axios.post("/v1/admin/verifyToggle",null,{params:{email:email}}).then(res=>{
            console.log(this.state)
            let data=[ ... this.state.data];
            data[index].verified=!data[index].verified
            let selected={... this.state.selectedClient}
            selected.verified=!selected.verified;
            this.setState({data:data,selectedClient:selected});
            })
      }

      searchHandler=()=>{

       let val= document.getElementById("adminSearch").value;
       if(val==="")
       val="all";
       //alert(val);

         this.setState({search:val,loading:true});
      }


      modalShowTrueHandler=(index)=>{

         let selected={...this.state.data[index]};
           selected.index=index;

       this.setState((state)=>{return {selectedClient:selected,modalShow:true}});
       }

       modalShowHandler2=()=>{
        this.setState({
          show2:!this.state.show2
        });
        }

      modalShowFalseHandler=()=>{
         this.setState((state)=>{return {selectedClient:null,modalShow:false}});
      }


      updatedBackgroundHandler=(index,val)=>{

         let data=[... this.state.data];
         data[index].background=val;
         let selected={... this.state.selectedClient}
         selected.background=val;

         this.setState({data:data,selectedClient:selected});

      }


   render(){

     // console.log(this.props.history.location.state.verified)
      // if(!this.props.history.location.state.verified){
      //   console.log("in list");
      //   window.location.href="http://localhost:3000/admin"
      // }



     let perCountry = "No DATA Yet";
     if(this.state.data){

       perCountry =   <>



       <div className="dropdown">FILTER
             <div className="dropdown__all">ALL
                  <div className="dropdown__all-all"  onClick={()=>this.filterHandler("all","all","all")} >All</div>
                  <div className="dropdown__all-verified"  onClick={()=>this.filterHandler("all","all","true")}> Verified</div>
                  <div className="dropdown__all-unVerified"  onClick={()=>this.filterHandler("all","all","false")}> Unverified</div>
                  <div className="dropdown__all-other"  onClick={()=>this.filterHandler("all","other","all")}> Others</div>
             </div>
             <div className="dropdown__believer"  >BELIEVERS
                  <div className="dropdown__believer-all"  >ALL
                       <div className="dropdown__believer-all-all"  onClick={()=>this.filterHandler("yes","all","all")}>All </div>
                       <div className="dropdown__believer-all-verified"  onClick={()=>this.filterHandler("yes","all","true")}>Verified </div>
                       <div className="dropdown__believer-all-unVerified"  onClick={()=>this.filterHandler("yes","all","false")}>Unverified </div>
                  </div>
                  <div className="dropdown__believer-publicFigure">PUBLIC FIGURES
                       <div  className="dropdown__believer-publicFigure-all"  onClick={()=>this.filterHandler("yes","pf1","all")}> All</div>
                       <div  className="dropdown__believer-publicFigure-verified"  onClick={()=>this.filterHandler("yes","pf1","true")}> Verified  </div>
                       <div  className="dropdown__believer-publicFigure-unVerified"  onClick={()=>this.filterHandler("yes","pf1","false")}> Unverified  </div>
                  </div>
                  <div className="dropdown__believer-scientist">SCIENTISTS
                       <div  className="dropdown__believer-scientist-all"  onClick={()=>this.filterHandler("yes","pf2","all")}>All </div>
                       <div  className="dropdown__believer-scientist-verified"  onClick={()=>this.filterHandler("yes","pf2","true")}> Verified </div>
                       <div  className="dropdown__believer-scientist-unVerified"  onClick={()=>this.filterHandler("yes","pf2","false")}> Unverified </div>
                  </div>
                  <div className="dropdown__believer-other"  onClick={()=>this.filterHandler("yes","other","all")}>OTHER </div>
             </div>


             <div className="dropdown__nonBeliever" >NON BELIEVERS
                  <div className="dropdown__nonBeliever-all">ALL
                       <div className="dropdown__nonBeliever-all-all"  onClick={()=>this.filterHandler("no","all","all")}>All</div>
                       <div className="dropdown__nonBeliever-all-verified"  onClick={()=>this.filterHandler("no","all","true")}>Verified</div>
                       <div className="dropdown__nonBeliever-all-unVerified"  onClick={()=>this.filterHandler("no","all","false")}>Unverified</div>
                  </div>
                  <div className="dropdown__nonBeliever-publicFigure" >PUBLIC FIGURES
                       <div  className="dropdown__nonBeliever-publicFigure-all"  onClick={()=>this.filterHandler("no","pf1","all")}>All  </div>
                       <div  className="dropdown__nonBeliever-publicFigure-verified"  onClick={()=>this.filterHandler("no","pf1","true")}> Verified  </div>
                       <div  className="dropdown__nonBeliever-publicFigure-unVerified"  onClick={()=>this.filterHandler("no","pf1","false")}> Unverified  </div>
                  </div>
                  <div className="dropdown__nonBeliever-scientist">SCIENTISTS
                       <div  className="dropdown__nonBeliever-scientist-all"  onClick={()=>this.filterHandler("no","pf2","all")}>All </div>
                       <div  className="dropdown__nonBeliever-scientist-verified"  onClick={()=>this.filterHandler("no","pf2","true")}> Verified </div>
                       <div  className="dropdown__nonBeliever-scientist-unVerified"  onClick={()=>this.filterHandler("no","pf2","false")}> Unverified </div>
                  </div>
                  <div className="dropdown__nonBeliever-other"  onClick={()=>this.filterHandler("no","other","all")}>OTHER</div>
             </div>

             <div className="dropdown__unDecided">UNDECIDED
                  <div className="dropdown__unDecided-all" >ALL
                       <div className="dropdown__unDecided-all-all"  onClick={()=>this.filterHandler("undecided","all","all")}>All </div>
                       <div className="dropdown__unDecided-all-verified"  onClick={()=>this.filterHandler("undecided","all","true")}>Verified </div>
                       <div className="dropdown__unDecided-all-unVerified"  onClick={()=>this.filterHandler("undecided","all","false")}>Unverified </div>
                  </div>
                  <div className="dropdown__unDecided-publicFigure">PUBLIC FIGURES
                       <div  className="dropdown__unDecided-publicFigure-all"  onClick={()=>this.filterHandler("undecided","pf1","all")}>All  </div>
                       <div  className="dropdown__unDecided-publicFigure-verified"  onClick={()=>this.filterHandler("undecided","pf1","true")}> Verified  </div>
                       <div  className="dropdown__unDecided-publicFigure-unVerified"  onClick={()=>this.filterHandler("undecided","pf1","false")}> Unverified</div>
                  </div>
                  <div className="dropdown__unDecided-scientist">SCIENTISTS
                       <div  className="dropdown__unDecided-scientist-all"  onClick={()=>this.filterHandler("undecided","pf2","all")}>All </div>
                       <div  className="dropdown__unDecided-scientist-verified"  onClick={()=>this.filterHandler("undecided","pf2","true")}> Verified </div>
                       <div  className="dropdown__unDecided-scientist-unVerified"  onClick={()=>this.filterHandler("undecided","pf2","false")}> Unverified </div>
                  </div>
                  <div className="dropdown__unDecided-other"  onClick={()=>this.filterHandler("undecided","other","all")}>OTHER </div>
             </div>
{

}
        </div>
{
     //
     //     <div>
     //       <h1 onClick={()=>this.filterHandler("all","all","all")}>All</h1><h2 onClick={()=>this.filterHandler("all","all","true")}>Verified</h2><h2 onClick={()=>this.filterHandler("all","all","false")}>Not Verified</h2>
     //        <h1 >BELEIVER</h1><h2 onClick={()=>this.filterHandler("yes","all","all")}>All</h2><h2 onClick={()=>this.filterHandler("yes","all","true")}>All verified</h2><h2 onClick={()=>this.filterHandler("yes","all","false")}>All not verified</h2><h2 onClick={()=>this.filterHandler("yes","PF1","all")}>PF1</h2><h2 onClick={()=>this.filterHandler("yes","PF1","true")}>PF1 verified</h2><h2 onClick={()=>this.filterHandler("yes","PF1","false")}>PF1 not verified</h2><h2 onClick={()=>this.filterHandler("yes","PF2","all")}>PF2 </h2><h2 onClick={()=>this.filterHandler("yes","PF2","true")}>PF2 verified</h2><h2 onClick={()=>this.filterHandler("yes","PF2","false")}>PF2 not verified</h2><h2 onClick={()=>this.filterHandler("yes","Other","all")}>Other</h2>
     //      <h1 >NONBELEIVER</h1><h2 onClick={()=>this.filterHandler("no","all","all")}>All</h2><h2 onClick={()=>this.filterHandler("no","all","true")}>All verified</h2><h2 onClick={()=>this.filterHandler("no","all","false")}>All not verified</h2><h2 onClick={()=>this.filterHandler("no","PF1","all")}>PF1 </h2><h2 onClick={()=>this.filterHandler("no","PF1","true")}>PF1 verified</h2><h2 onClick={()=>this.filterHandler("no","PF1","false")}>PF1 not verified</h2><h2 onClick={()=>this.filterHandler("no","PF2","all")}>PF2 </h2><h2 onClick={()=>this.filterHandler("no","PF2","true")}>PF2 verified</h2><h2 onClick={()=>this.filterHandler("no","PF2","false")}>PF2 not verified</h2><h2 onClick={()=>this.filterHandler("no","Other","all")}>Other</h2>
     // <h1 >UnDECIDED</h1><h2 onClick={()=>this.filterHandler("undecided","all","all")}>All</h2><h2 onClick={()=>this.filterHandler("undecided","all","true")}>All verified</h2><h2 onClick={()=>this.filterHandler("undecided","all","false")}>All not verified</h2><h2 onClick={()=>this.filterHandler("undecided","PF1","all")}>PF1 </h2><h2 onClick={()=>this.filterHandler("undecided","PF1","true")}>PF1 verified</h2><h2 onClick={()=>this.filterHandler("undecided","PF1","false")}>PF1 not verified</h2><h2 onClick={()=>this.filterHandler("undecided","PF2","all")}>PF2 </h2><h2 onClick={()=>this.filterHandler("undecided","PF2","true")}>PF2 verified</h2><h2 onClick={()=>this.filterHandler("undecided","PF2","false")}>PF2 not verified</h2><h2 onClick={()=>this.filterHandler("undecided","Other","all")}>Other</h2>
     //       <input id="adminSearch" type="text"/><button onClick={this.searchHandler}>Search</button>
     //       </div>
}
          <div className="adminSearch"><input className="adminSearch__input" id="adminSearch" type="text"/><button className="adminSearch__btn" onClick={this.searchHandler}><i className="adminSearchIcon fa fa-search" aria-hidden="true"></i></button></div>

          <div className="list__heading">Do you believe in god ? </div>
          <div className="list--location"> {this.state.selectedCountry.length===0?"world":this.state.selectedCountry} {(this.state.selectedCategory==="yes"?">> Beleiver":this.state.selectedCategory==="no"?">> Non Beleiver":this.state.selectedCategory==="undecided"?">> Undecided":null)} {(this.state.selectedPublicFigure==="pf1"?">> Public figure":this.state.selectedPublicFigure==="pf2"?">> Scientist":this.state.selectedPublicFigure==="other"?">> other":null)} {(this.state.selectedVerified==="true"?">> verified":this.state.selectedVerified==="false"?">> unverified":null)} </div>
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
                         {client.publicFigure!=="OTHER"?
                         <td className="list__body-row-column">{client.verified===true?
                                <button className="list__body-row-column-btn-check" onClick={()=>this.modalShowTrueHandler(i)}><i className="fa fa-eject" aria-hidden="true"></i></button>
                               :<button className="list__body-row-column-btn-cross" onClick={()=>this.modalShowTrueHandler(i)} ><i className="fa fa-eject" aria-hidden="true"></i></button>}</td>:<td className="list__body-row-column">
                         </td>}
                    <td className="list__body-row-column">{client.firstName+" "}{client.lastName+"  "}{client.publicFigure}</td>
                         <td className="list__body-row-column">{client.createdOn}</td>
                         <td className="list__body-row-column">{client.email}</td>
                         <td className="list__body-row-column">{client.city}</td>
                         <td className="list__body-row-column">{client.country}</td>
                         <td className="list__body-row-column">{client.category==="yes"?"Beleiver":client.category==="no"?"Non Beleiver":"Undecided"}</td>

                         <td className="list__body-row-column list__body-row-column--delete"><i onClick={()=>this.deleteHandler(i)} class="fa fa-trash" aria-hidden="true"></i></td>
                     </tr>
                </tbody>)
              })}
          </table>
        {this.state.data.length>0?
              <div className="pagination">
                    <button className="pagination__arrow" onClick={()=>this.pageHandler(-1)} >{"<<"}</button>
                      <div className="pagination__num">{this.state.pageNumber+1}/{this.state.totalPages}</div>
                  <button className="pagination__arrow" onClick={()=>this.pageHandler(1)}>{">>"}</button>
              </div>
            :<div className="noData"> <div>No Data</div></div>}
       </>
     }

     if(!this.props.authenticated)
      window.location=("http://safe-headland-47190.herokuapp.com/admin");

    return (


       <>
          {/* <AdminBackdrop clicked={this.modalShowFalseHandler} show={this.state.modalShow}></AdminBackdrop> */}
          <Modal clicked={this.modalShowFalseHandler} show={this.state.modalShow}>
             <ModalView  verifyToggler={this.verifyTooglehandler}
                          delete={this.deleteHandler}
                           data={this.state.selectedClient}
                           closeModal={this.modalShowFalseHandler}
                           updatedBackground={this.updatedBackgroundHandler} />
          </Modal><Backdrop  clicked={this.modalShowFalseHandler} show={this.state.modalShow}/>

          <Modal clicked={()=>this.modalShowHandler2()} show={this.state.show2}>
                <AddClientForm  />

          </Modal>
            <Backdrop clicked={this.modalShowHandler2} show={this.state.show2}/>

         <i onClick={()=>this.modalShowHandler2()} style={{fontSize:"2rem"}} className="fa fa-plus add--btn" aria-hidden="true"></i>

       <AdminHeader  selectHandler={this.selectHandler}  countries={this.state.countries}/>
       {this.state.loading?
         <div className="loading"> <div>Loading...</div></div>
         :
         perCountry
       }</>
         )
   }
 }


export default withRouter(List);
