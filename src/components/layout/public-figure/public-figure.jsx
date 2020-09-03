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
        category:"all",
        verified:"all",
        publicFigure:"all",
        countries:[],
        searchedCountries:[],
        search:"",
        searchedCahrecterForCountry:"",
        show:false,
        d:{}
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

      componentWillUnmount() {
       // window.removeEventListener("scroll", this.onScroll, false);
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

     axios.get("/v1/admin/data/yes/all/all/all/0").then(res=>{
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
      axios.get(`/v1/admin/data/${this.state.category}/${this.state.publicFigure}/${this.state.verified}/${this.state.search===""?"all":this.state.search}/${this.state.page}`).then(res=>{
         console.log("res  "+(res.data.content));

         this.setState((state)=>{return{
            totalPages:res.data.totalPages,
            data:state.data.concat(res.data.content),
            loading:false,}

         })
      }).catch(err=>alert("error"));
      else
     {
      // console.log(this.state)
      axios.get(`/v1/admin/data/country/${this.state.country}/${this.state.category}/${this.state.publicFigure}/${this.state.verified}/${this.state.search===""?"all":this.state.search}/${this.state.page}`).then(res=>{
        this.setState((state)=>{return{
          totalPages:res.data.totalPages,
          data:state.data.concat(res.data.content),
          loading:false,}

       })
    }).catch(err=>alert("error"));
    }

   }


    pageHandler=()=>{
        console.log("Page handler")
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

      if(val==="")
      this.setState({country:"all",loading:true,data:[],search:"",page:0,searchedCahrecterForCountry:""})

      this.setState({country:val,loading:true,data:[],search:"",page:0,searchedCahrecterForCountry:""})


    }


    searchInputHandler=(e)=>{
   this.setState({search:e.target.value,page:0,loading:true,data:[]});
    }

    render() {

        return (<>
            <Header/>
            <Modal styles={{width:"40rem",height:"40rem"}} clicked={this.modalShowHandler} show={this.state.show}>
                    <PublicFigureDetail d={this.state.d}/>
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
                       <input onChange={()=>{this.setState({category:"all",loading:true,data:[],page:0})}} name="category" value={"all"} id="allcat" type="radio"/>
                       <label  htmlFor="allcat">all</label><br/>
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
                 </div>
              </div>

             <div className="notables__search">
                 <input className="notables__search-input" type="text" value={this.state.search} onChange={(e)=>this.searchInputHandler(e)}  placeholder="search" name="" id=""/>
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
                     <div className="notables__searchByCountry-dropdown-item" onClick={()=>this.countrySelectHandler("all")}>
                         WORLD
                     </div>
                 </div>
             </div>
             </div>


              <div className="searchfor"> <strong>{this.state.country==="all"?null:this.state.country}</strong></div>
                  <div className="userWrapper">
                {this.state.data.map((d,i)=><>
                  <div   className={"user "+"user"+(i%2)}>
                       <div data-aos={i%2===0?"fade-right":"fade-left"}  className="userWrapper2">


                <div className="user__name"><span>{d.firstName+" "+d.lastName}</span></div>
                <div style={{color:"green"}} className="user__field">{d.category==="yes"?"believer":d.category==="no"?"Non Believer":"Undecided"}</div>
                           <div className="user__field user__field1">Natable as <span>{d.publicFigure==="PF1"?"Public Figure":d.publicFigure==="PF2"?"Scientist":"Other"}</span></div>
                           <div className="user__field user__field2">
                              {d.background===null?
                                <br/>:
                                <span>{d.background.length<20?
                                 <span>{d.background.padEnd(d.background.length+5,'.')} <span onClick={()=>this.modalShowHandler(d)} style={{fontWeight:"bold",cursor:"pointer"}} >read more</span></span>:
                                  <span>{d.background.substring(0,20).padEnd(25,'.')} <span onClick={()=>this.modalShowHandler(d)}  style={{fontWeight:"bold",cursor:"pointer"}}>read more</span></span>}
                                </span>}
                              </div>

                           <div className="user__field user__field4"> <Flag code={d.code} height={16} />  <i>{d.country}</i></div>
                           <div className="user__field user__field5">
                             <Gravatar options={{
                               size:40,
                               default:"identicon"
                             }} email={d.email}>
                                  { url => (<img className="gravatar__img" src={url} />) }
                             </Gravatar>
                             <div className="user__field user__field3">{d.verified?<span className="user__verified"><i className="fa fa-check" aria-hidden="true"></i> verified</span>:null}</div>
                           </div>


                    </div>
                  </div>
                  </>)}</div>
                 {this.state.loading?<button className="load__btn load__btn-loading">LOADING...</button>:null}
                 {this.state.totalPages==this.state.page+1 || this.state.loading?null: this.state.data.length<=0?<h1 style={{padding:"50px 50px",textAlign:"center"}}>No data</h1>:<button className="load__btn" onClick={this.pageHandler}>Load More...</button>}




            </div></>
        )
    }
}

export default  PublicFigure;
