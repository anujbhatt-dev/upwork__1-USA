import React, {Component} from "react"
import {Link } from "react-router-dom"
import logo from "../../../../assets/images/logo.jpg"
import axios from "axios"
import ModalView from "../list/modal-view/modal-view";
import Backdrop from "../../../../UI/backdrop/backdrop"
import Modal from "../../../../UI/modal/modal";


 class Claims extends Component{
   state={
     page:0,
     totalPages:5,
     data:[],
     search:"",
     data:[],
     loading:false,
     modalShow:false,
     selectedClient:null,
     
   }

   componentDidMount(){

    axios.get("/v1/admin/claim/all/0").then(res=>{
       this.setState({data:res.data.content,totalPages:res.data.totalPages});
    })

   }


   componentDidUpdate(){
      
      if(this.state.loading)
      axios.get(`/v1/admin/claim/${this.state.search.length==0?"all":this.state.search}/${this.state.page}`).then(res=>{
         this.setState((state)=>{return {data:res.data.content,totalPages:res.data.totalPages,loading:false}});
      })
   }

   searchHandler=()=>{

    let val= document.getElementById("adminClaimSearch").value;
    //alert(val);

      this.setState({search:val});
   }

   pageHandler=(val)=>{

      if(this.state.page+val<0 || this.state.page+val>=this.state.totalPages)
      return ;

      this.setState((state)=>{
         return {page:state.page+val,loading:true}
      })

   }

   deleteHandler=(index)=>{

      // axios.delete("/v1/admin",{params:{email:this.state.data[i].email}}).
      // then((res)=>{
         let data=[... this.state.data];
         data.splice(index,1);
            this.setState({data:data});
            this.modalShowFalseHandler();
      //    }).
      // catch(err=>alert("an alert occured try again"));
            }

       modalShowTrueHandler=(index)=>{

          let selected={...this.state.data[index]};
            selected.index=index;
      
            console.log(selected)

        this.setState((state)=>{return {selectedClient:selected,modalShow:true}});
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

    verifyHandler=(email,index)=>{
      axios.post("/v1/admin/verifyToggle",null,{params:{email:email}}).then(res=>{
         console.log(this.state)
         let data=[ ... this.state.data];
         data.splice(index,1);
         this.setState({data:data,selectedClient:null,modalShow:false});
         this.modalShowFalseHandler();
         })
   }
      


   render(){

     return (<>
     {this.state.modalShow? <Modal clicked={this.modalShowFalseHandler} show={this.state.modalShow}>
             <ModalView   verifyToggler={this.verifyHandler}
                           delete={this.deleteHandler}
                           data={this.state.selectedClient}
                           closeModal={this.modalShowFalseHandler}
                           updatedBackground={this.updatedBackgroundHandler} />
          </Modal>:null}
          <Backdrop  clicked={this.modalShowFalseHandler} show={this.state.modalShow}/>
          
       <div style={{top:"8rem",left:"5rem",transform:"translateX(0%)"}} className="adminSearch"><input value={this.state.search} className="adminSearch__input" id="adminClaimSearch" onChange={this.searchHandler} type="text"/><button className="adminSearch__btn" onClick={()=>this.setState({data:[],loading:true})}><i className="adminSearchIcon fa fa-search" aria-hidden="true"></i></button></div>
           <div className="pagination">
                 <button className="pagination__arrow" onClick={()=>this.pageHandler(-1)} >{"<<"}</button>
                   <div className="pagination__num">{this.state.page+1}/{this.state.totalPages}</div>
               <button className="pagination__arrow" onClick={()=>this.pageHandler(1)}>{">>"}</button>
           </div>
           <header className="adminHeader">
                <div><Link to="/" className="logo adminHeader__logo"><img className="logo__img" src={logo} alt=""/></Link></div>
               <div className="socialMedia">
                   <div className="instagram"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-instagram" aria-hidden="true"></i></a> </div>
                   <div className="facebook"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-facebook" aria-hidden="true"></i></a> </div>
                   <div className="twitter"> <a rel="noopener noreferrer" target="_blank" href="https://www.google.com">{""}<i className="fa fa-twitter" aria-hidden="true"></i></a> </div>
               </div>
           </header>
           <div className="claims">
                 <div className="claims__head">claims</div>
       
                 <table border={1}>
                    <thead>
                        <tr>
                         <td></td>
                           <td>Full Name</td>
                           <td>Email </td>
                           <td>Country </td>
                           <td>category</td>
                           <td>Created on</td>
                           <td>Claimed on</td>
                           <td> </td>
                        </tr>
                    </thead>
                    <tbody>
                       
                       
                       { this.state.data.map((client,i)=>
                                           <tr>
                    <td className="list__body-row-column">{client.verified===true?
                                <button className="list__body-row-column-btn-check" onClick={()=>this.modalShowTrueHandler(i)}><i className="fa fa-eject" aria-hidden="true"></i></button>
                               :<button className="list__body-row-column-btn-cross" onClick={()=>this.modalShowTrueHandler(i)} ><i className="fa fa-eject" aria-hidden="true"></i></button>}</td>
                                                                        
                          <td>{client.firstName} {client.lastName}</td>
                                           <td>{client.email} </td>
                                           <td>{client.country}</td>
                                           <td>{client.category==="yes"?"Beleiver":client.category==="no"?"Non Beleiver":"Undecided"}</td>
                                           <td>{client.createdOn}</td>
                                           <td>{client.claimedOn}</td>
                                           <td className="list__body-row-column list__body-row-column--delete"><i onClick={()=>this.deleteHandler(i)} class="fa fa-trash" aria-hidden="true"></i></td>
                                           </tr>
                       )}
                      
                        
                    </tbody>
                 </table>
           </div>
           </>
     )
   }
 }


export default Claims;
