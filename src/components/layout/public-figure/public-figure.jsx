import React, { Component } from 'react'
import axios from 'axios';
import Flag from 'react-world-flags';
import Aos from "aos"
import "aos/dist/aos.css"
import Header from "../header/header"
import Gravatar from 'react-awesome-gravatar';
import { NavLink } from 'react-router-dom';
import PublicFigureDetail from "./public-figure-details/public-figure-detail"
import Modal from "../../../UI/modal/modal"
import Backdrop from "../../../UI/backdrop/backdrop"

class PublicFigure extends Component {

    state={
        page:0,
        data:[],
        totalPages:1,
        loading:false,
        country:"",
        category:"yes",
        verified:"all",
        publicFigure:"all",
        countries:[],
        searchedCountries:[],
        search:"",
        searchedCahrecterForCountry:"",
        show:false,
        d:{},
        show2:false,
        claim:{
          phone:"",
          email:"",
          selectedEmail:"",
        },
        stage:false
    }


     modalShowHandler=(d)=>{
       if(this.state.show){
         this.setState({
           show:false,
           d:{}
         })
       }else{
         this.setState({
           show:true,
           d:{...d}
         })
       }
     }

     modalShowHandler2=(email)=>{
       if(this.state.show2){
         this.setState({
           show2:false,
         })
       }else{
        let claim={... this.state.claim}
        claim.selectedEmail=email

         this.setState({
           show2:true,
          claim:claim,
         })
       }
     }

      componentWillUnmount() {
       Aos.init({duration:2000,delay:100})
      }

      onScroll = () => {
        if (this.hasReachedBottom()) {
          this.pageHandler();
        }
      };

      hasReachedBottom() {
        return (
            (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight-30
        );
      }

    componentDidMount(){
      Aos.init({duration:2000,delay:100})
    axios.get("/v1/client/country")
     .then(res=>{
       this.setState({countries:res.data});
     })

     axios.get("/v1/client/data/yes/all/all/all/0").then(res=>{
     this.setState({
         totalPages:res.data.totalPages,
         data:res.data.content,
         loading:false,
      })
   } )

    }

    componentDidUpdate(){

      if(this.state.loading==true)
      if(this.state.country.length==0)
      axios.get(`/v1/client/data/${this.state.category}/${this.state.publicFigure}/${this.state.verified}/${this.state.search===""?"all":this.state.search}/${this.state.page}`).then(res=>{


         this.setState((state)=>{return{
            totalPages:res.data.totalPages,
            data:res.data.content,
            loading:false,}

         })
      }).catch(err=>alert("error"));
      else
     {
      axios.get(`/v1/client/data/country/${this.state.country}/${this.state.category}/${this.state.publicFigure}/${this.state.verified}/${this.state.search===""?"all":this.state.search}/${this.state.page}`).then(res=>{
        this.setState((state)=>{return{
          totalPages:res.data.totalPages,
          data:res.data.content,
          loading:false,}

       })
    }).catch(err=>alert("error"));
    }

   }


    pageHandler=()=>{
        if(this.state.page===this.state.totalPages)
        return;
        this.setState((state)=>{return {page:state.page+1,loading:true}})
    }


    searchedCountriesHandler=(e)=>{

      let countries=[];
      let val= e.target.value.toLowerCase();
      if(val===""||val.length<=0)
    {  this.setState({searchedCountries:[],searchedCahrecterForCountry:e.target.value});
      return ;}
      this.state.countries.map(c=>{
        if(c.toLowerCase().indexOf(val)>=0)
           countries.push(c);
      })
  this.setState({searchedCountries:countries,searchedCahrecterForCountry:e.target.value});

    }

    countrySelectHandler=(val)=>{


      this.setState({country:val,loading:true,data:[],search:"",page:0,searchedCahrecterForCountry:""})


    }


    searchInputHandler=(e)=>{
   this.setState({search:e.target.value,page:0,loading:true,data:[]});
    }

    claimSubmit=(e)=>{


      e.preventDefault();
      let usedEmail=this.state.claim.email;
      let email=this.state.claim.selectedEmail;
      let phone=this.state.claim.phone;
      let url=`http://www.bigq.world/claimVerified/${btoa(usedEmail)}/${btoa(email)}/${btoa(phone)}`;

      axios.post("/v1/client/claim/verification",null,{params:{url:url,to:usedEmail,email:email}});
      this.setState({
        stage:true
      })
      setTimeout(()=>{
          this.setState({
            stage:false,
          })
          this.modalShowHandler2()
      },6000)
    }


    resetFilter=()=>{

        this.setState({data:[],loading:true,page:0,verified:"all",category:"yes",publicFigure:"all",country:"",search:""})
        document.getElementById("believer").checked= true
        document.getElementById("allpf").checked= true
        document.getElementById("allverified").checked= true
    }

    closeFilter=()=>{


        document.getElementById("filter").checked= false

    }


    render() {

      console.log(this.state.data);

        return (<>
            <Header/>
            <Modal classModal="modal2 modal3" styles={{padding:"1rem"}} clicked={this.modalShowHandler} show={this.state.show}>
                    <PublicFigureDetail d={this.state.d}/>
            </Modal>
            <Modal classModal="modal2 modal4" styles={{padding:"1rem"}} clicked={this.modalShowHandler2} show={this.state.show2}>
                       {!this.state.stage?<form onSubmit={this.claimSubmit} className="claim__form">
                          <label className="claim__form-label" htmlFor="phone">Mobile number</label><br/>
                          <input className="claim__form-input" value={this.state.claim.phone} onChange={(e)=>{let claim={...this.state.claim};claim.phone=e.target.value;this.setState({claim:claim})}} name="phone" id="phone" type="text"/><br/>
                          <label className="claim__form-label" htmlFor="email">Email</label><br/>
                          <input className="claim__form-input" value={this.state.claim.email} onChange={(e)=>{let claim={...this.state.claim};claim.email=e.target.value;this.setState({claim:claim})}} name="email" id="email" type="text"/><br/>
                          <input className="claim__form-btn" type="submit"/>
                          <hr className="hr"/>
                          <div >
                               <h6 className="claim__form-terms-head">Terms</h6>
                               <p className="claim__form-terms-para" style={{fontWeight:"bold"}}>
                                 Please note: We will use the information you provide above to verify that you are the correct person in this profile.
                               </p>
                          </div>
                      </form>: <h1 className="claim__form" style={{display:"flex",justifyContent:"center",alignItems:"center"}}><span style={{fontSize:"2rem",textAlign:"center"}}>Check you email for claim verification.<br/>Thank you! 😊</span></h1>}
            </Modal>
            <div className="notables">

            <div className="searchWrapper">
              <div className="notables__filter">
                 <input style={{display:"none"}} name="filter" id="filter" type="checkbox"/>
                 <label htmlFor="filter"><i className="fa fa-filter" aria-hidden="true"></i> Filter</label>
                 <div  className="notables__filter-option">
                     <div className="notables__filter-option-category">
                       <input onChange={()=>{this.setState({category:"yes",loading:true,data:[],page:0})}} defaultChecked name="category" value={"yes"} id="believer" type="radio"/>
                       <label  htmlFor="believer">believers</label><br/>
                       <input onChange={()=>{this.setState({category:"no",loading:true,data:[],page:0})}} name="category" value={"no"} id="nonBeliever" type="radio"/>
                       <label  htmlFor="nonBeliever">non believers</label><br/>
                     </div>
                     <div className="notables__filter-option-type">
                         <input onChange={()=>{this.setState({data:[],loading:true,publicFigure:"pf1",page:0})}} name="publicFigure" value={"pf1"} id="publicFigure" type="radio"/>
                         <label  htmlFor="publicFigure">public figures</label><br/>
                         <input onChange={()=>{this.setState({data:[],loading:true,publicFigure:"pf2",page:0})}} name="publicFigure" value={"pf2"} id="scientist" type="radio"/>
                         <label  htmlFor="scientist">scientists</label><br/>
                         <input onChange={()=>{this.setState({data:[],loading:true,publicFigure:"other"})}} name="publicFigure" value={"other"} id="other" type="radio"/>
                         <label htmlFor="other">others</label><br/>
                         <input onChange={()=>{this.setState({data:[],loading:true,publicFigure:"all",page:0})}} defaultChecked name="publicFigure" value={"all"} id="allpf" type="radio"/>
                         <label  htmlFor="allpf">all</label><br/>
                     </div>
                     <div className="notables__filter-option-verified">
                       <input onChange={()=>this.setState({data:[],loading:true,page:0,verified:"true"})} name="verified" value={"true"} id="verified" type="radio"/>
                       <label  htmlFor="verified">verified</label><br/>
                       <input onChange={()=>this.setState({data:[],loading:true,page:0,verified:"false"})} name="verified" value={"false"} id="unverified" type="radio"/>
                       <label htmlFor="unverified">unverified</label><br/>
                       <input onChange={()=>this.setState({data:[],loading:true,page:0,verified:"all"})} defaultChecked name="verified" value={"all"} id="allverified" type="radio"/>
                       <label  htmlFor="allverified">all</label><br/>
                     </div>
                     <div className="notables__filter-reset" onClick={this.resetFilter}   >Reset Filter</div>
                     <div style={{top:".1rem",color:"black"}} className="notables__filter-reset" onClick={this.closeFilter}   ><i class="fa fa-times" aria-hidden="true"></i></div>
                 </div>
              </div>



             <div className="notables__search">
                 <input className="notables__search-input" type="text" value={this.state.search} onChange={(e)=>this.searchInputHandler(e)}  placeholder="search name / keyword" name="" id=""/>
             </div>
             <div className="notables__searchByCountry">
             <input className="notables__searchByCountry-input" type="text"  onChange={(e)=>this.searchedCountriesHandler(e)} name="searchedCahrecterForCountry" placeholder="search by country" value={this.state.searchedCahrecterForCountry} id=""/>
             <div className="notables__searchByCountry-dropdown">
             {this.state.searchedCountries.map(c=>
                                  <div style={{zIndex:"1000"}} className="notables__searchByCountry-dropdown-item" onClick={()=> this.countrySelectHandler(c.substring(0,c.indexOf(',')))}>
                                      <Flag code={c.substring(c.indexOf(',')+1)}height={16} />
                                      {c.slice(0,c.length-3)}
                                   </div>
                                  )}
                     <div className="notables__searchByCountry-dropdown-item" onClick={()=>this.countrySelectHandler("")} >
                         WORLD
                     </div>
                 </div>
             </div>
             </div>


              {this.state.country===""?<div className="searchfor" > <strong>World</strong></div>:<div className="searchfor"> <strong style={{position:"relative"}}>{this.state.country} <i onClick={()=>this.countrySelectHandler("")} style={{position:"absolute",top:".5rem",fontSize:"1.5rem",right:".5rem",cursor:"pointer"}}  className="fa fa-times" aria-hidden="true"></i></strong></div>}
              <div style={{color:"black",marginRight:"1rem"}} className="notables__total">
                   <h2>Total Results: {this.state.data.length}</h2>
              </div>
                  <div className="userWrapper">
                {this.state.data.map((d,i)=><>
                  <div   className={"user "+"user"+(i%2)}>
                       <div data-aos={i%2===0?"fade-right":"fade-left"}  className="userWrapper2">


                <div className="user__name"><span>{d.firstName+" "+d.lastName}</span></div>
                <div style={{color:"green"}} className="user__field">{d.category==="yes"?<span style={{color:"#3D9BE9"}}>Believer</span>:d.category==="no"?<span  style={{color:"#F8171C"}}>Non Believer</span>:"Undecided"}</div>
                <div  className="user__field user__field4 "> <Flag code={d.code} height={16} />  <i>{d.country.length>=15?d.country.slice(0,15)+"...":d.country}</i></div>

                           <div className="user__field user__field2">
                              {d.background===null?
                                <br/>:
                                <span>{d.background.length<20?
                                 <span>{d.background.padEnd(d.background.length+5,'.')} <span onClick={()=>this.modalShowHandler(d)} style={{fontWeight:"bold",cursor:"pointer",color:"#3398cc"}} >read more</span></span>:
                                  <span>{d.background.substring(0,25).padEnd(25,'.')} <span onClick={()=>this.modalShowHandler(d)}  style={{fontWeight:"bold",cursor:"pointer"}}></span><br/>{d.background.substring(25,50).padEnd(25,'.')} <span onClick={()=>this.modalShowHandler(d)}  style={{fontWeight:"bold",cursor:"pointer",color:"#3398cc"}}>read more</span> </span>}
                                </span>}
                              </div>


                           <div className="user__field user__field5">
                             <Gravatar options={{
                               size:40,
                               default:"identicon"
                             }} email={d.email}>
                                  { url => (<img className="gravatar__img" src={url} />) }
                             </Gravatar>
                             {d.publicFigure!=="OTHER"?<div className="user__field user__field3">{d.verified?<span style={{color:"#3398cc"}} className="user__verified"><i style={{color:"green"}} className="fa fa-check" aria-hidden="true"></i> {d.publicFigure==="PF1"?"Public Figure":d.publicFigure==="PF2"?"Scientist":""}</span>:<span style={{color:"grey"}} className="user__verified">{d.publicFigure==="PF1"?"Public Figure":d.publicFigure==="PF2"?"Scientist":""}</span>}</div>:null}
               {d.verified || d.claimed===true|| d.publicFigure==="OTHER"?null:<div className="user__field user__claim" id="user__claim"><span id="user__claim-1">Is this you? </span><span id="user__claim-3" onClick={()=>this.modalShowHandler2(d.email)} >Claim your profile</span> </div>}                           </div>


                    </div>
                  </div>
                  </>)}</div>
                  {!this.state.loading&& this.state.data.length===0?<h1 style={{padding:"50px 50px",textAlign:"center"}}>No data</h1>:null}
                  {this.state.loading?<button className="load_btn load_btn-loading">LOADING...</button>:
                  <>
                  <button className="load__btn"  disabled={this.state.page===0 || this.state.loading} onClick={()=>this.pageHandler(-1)}>Previous</button>
                 <button className="load__btn"  disabled={this.state.totalPages===this.state.page+1 || this.state.loading} onClick={()=>this.pageHandler(1)}>Next</button>
                </>
                 }




            </div></>
        )
    }
}

export default  PublicFigure;
