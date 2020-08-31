import React, {Component} from "react"
import {Link } from "react-router-dom"
import logo from "../../../../assets/images/logo.jpg"

 class Claims extends Component{
   state={
     pageNumber:1,
     totalPages:5
   }

   searchHandler=()=>{

    let val= document.getElementById("adminSearch").value;
    if(val==="")
    val="all";
    //alert(val);

      this.setState({search:val,loading:true});
   }

   pageHandler=(val)=>{

      if(this.state.pageNumber+val<0 || this.state.pageNumber+val>=this.state.totalPages)
      return ;

      this.setState((state)=>{
         return {pageNumber:state.pageNumber+val,loading:true}
      })

   }


   render(){

     return (<>
       <div style={{top:"8rem",left:"5rem",transform:"translateX(0%)"}} className="adminSearch"><input className="adminSearch__input" id="adminSearch" type="text"/><button className="adminSearch__btn" onClick={this.searchHandler}><i className="adminSearchIcon fa fa-search" aria-hidden="true"></i></button></div>
           <div className="pagination">
                 <button className="pagination__arrow" onClick={()=>this.pageHandler(-1)} >{"<<"}</button>
                   <div className="pagination__num">{this.state.pageNumber+1}/{this.state.totalPages}</div>
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
                           <td>Full Name</td>
                           <td>Email </td>
                           <td>Status </td>
                           <td>category</td>
                           <td>Claimed on</td>
                           <td> </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           <td>Full Name</td>
                           <td>Email </td>
                           <td>Status </td>
                           <td>category</td>
                           <td>Claimed on</td>
                           <td> </td>
                        </tr>
                    </tbody>
                 </table>
           </div>
           </>
     )
   }
 }


export default Claims;
