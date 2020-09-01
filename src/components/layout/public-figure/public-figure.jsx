import React, { Component } from 'react'
import axios from 'axios';
import Flag from 'react-world-flags';
import Header from "../header/header"
import Aos from "aos"
import "aos/dist/aos.css"
import Gravatar from 'react-awesome-gravatar';
import { NavLink } from 'react-router-dom';


class PublicFigure extends Component {

    state={
        page:0,
        data:[],
        totalPages:1,
        loading:false,
        country:"all",
        countries:[],
        searchedCountries:[],
        search:"",
        searchedCahrecterForCountry:""
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
       // window.addEventListener("scroll", this.onScroll, false);

    //       window.onscroll = function(ev) {
    //     console.log(window.innerHeight + window.pageYOffset+"   "+document.body.offsetHeight);
    //     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight-30) {
    //         alert("you're at the bottom of the page");
    //         this.pageHandler();
    //     }
    // };
    axios.get("/v1/client/country")
     .then(res=>{
       this.setState({countries:res.data});
     })



axios.get("/v1/client/publicFigure/all/all/0").then(res=>{
                this.setState({data:res.data.content,totalPages:res.data.totalPages})
})

    }

    componentDidUpdate(){
        if(this.state.loading)
        axios.get("/v1/client/publicFigure/"+this.state.country+"/"+(this.state.search.length<=0?"all":this.state.search)+"/"+this.state.page).then(res=>{
             this.setState((state)=>{return {data:state.data.concat(res.data.content),loading:false,totalPages:res.data.totalPages}});
        
})
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
            <div className="notables">

              <div className="searchfor"> <strong>{this.state.country==="all"?null:this.state.country}</strong></div>
                  <div className="userWrapper">
                {this.state.data.map((d,i)=><>
                  <div   className={"user "+"user"+(i%2)}>
                       <div data-aos={i%2===0?"fade-right":"fade-left"}  className="userWrapper2">
                           <div className="userWrapper3">

                <div className="user__name"><span>{d.firstName+" "+d.lastName}{d.id}</span></div>
                           <div className="user__field user__field1">Natable as <span>{d.publicFigure==="PF1"?"Public Figure":"Scientist"}</span></div>
                           <div className="user__field user__field2">
                              {d.background===null?
                                null:
                                <span>{d.background.length<20?
                                 <span> {d.background.padEnd(d.background.length+5,'.')} <span> <NavLink  to={{pathname:"/publicFigure/"+d.firstName,state:d}} > read more </NavLink> </span></span>:
                                  <span>{d.background.substring(0,20).padEnd(25,'.')} <span><NavLink to={{pathname:"/publicFigure/"+d.firstName,state:d}} > read more </NavLink></span></span>}
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
                  </div>
                  </>)}</div>
                 {this.state.loading?<button className="load__btn load__btn-loading">LOADING...</button>:null}
                 {this.state.totalPages==this.state.page+1 || this.state.loading?null: this.state.data.length<=0?<h1 style={{padding:"50px 50px"}}>No data</h1>:<button className="load__btn" onClick={this.pageHandler}>Load More...</button>}
                 <div className="searchWrapper">
                  <div className="notables__search">
                      <input className="notables__search-input" type="text" value={this.state.search} onChange={(e)=>this.searchInputHandler(e)}  placeholder="search" name="" id=""/>
                  </div>
                  <div className="notables__searchByCountry">
                  <input className="notables__searchByCountry-input" type="text"  onChange={(e)=>this.searchedCountriesHandler(e)} name="searchedCahrecterForCountry" placeholder="country search" value={this.state.searchedCahrecterForCountry} id=""/>
                  <div className="notables__searchByCountry-dropdown">
                  {this.state.searchedCountries.map(c=>
                                       <div style={{zIndex:"1000"}} className="notables__searchByCountry-dropdown-item" onClick={()=> this.countrySelectHandler(c.substring(0,c.indexOf(',')))}>
                                           <Flag code={c.substring(c.indexOf(',')+1)}height={16} />
                                           {c.slice(0,c.length-3)}
                                        </div>
                                       )}
                          <div className="notables__searchByCountry-dropdown-item" onClick={()=>this.countrySelectHandler("all")}>
                              ALL
                          </div>
                      </div>
                  </div>
                  </div>
            </div></>
        )
    }
}

export default  PublicFigure;
