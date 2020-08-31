import React, { Component } from 'react'
import axios from 'axios';
import Flag from 'react-world-flags';


class PublicFigure extends Component {

    state={
        page:0,
        data:[],
        totalPages:1,
        loading:false,
        country:"all",
        countries:[],
        searchedCountries:[],
        search:"all",
    }


      componentWillUnmount() {
       // window.removeEventListener("scroll", this.onScroll, false);
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
       console.log(res.data)
       this.setState({countries:res.data});     
     })



axios.get("/v1/client/publicFigure/all/all/0").then(res=>{
    console.log(res.data.totalPages)
                this.setState({data:res.data.content,totalPages:res.data.totalPages})
})

    }

    componentDidUpdate(){
          console.log(this.state.page)
        if(this.state.loading)
        axios.get("/v1/client/publicFigure/"+this.state.country+"/"+this.state.search+"/"+this.state.page).then(res=>{
            setTimeout(()=>{ this.setState((state)=>{return {data:state.data.concat(res.data.content),loading:false,totalPages:res.data.totalPages}});
        },1000)
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
    {  this.setState({searchedCountries:[]});    
      return ;}
      this.state.countries.map(c=>{
        if(c.toLowerCase().indexOf(val)>=0)
           countries.push(c);
      })
  this.setState({searchedCountries:countries});

    }

    countrySelectHandler=(val)=>{
      
      if(val==="")
      this.setState({country:"all",loading:true,data:[],search:"all"})

      this.setState({country:val,loading:true,data:[],search:"all"})

    }

        
    searchInputHandler=(e)=>{
   this.setState({search:e.target.value});
    }



    render() {
      console.log(this.state.data);
        return (
<<<<<<< HEAD
            <div className="notable">
                {this.state.data.map(d=><>
                  <div className="notable__name">{d.firstName+" "+d.lastName}</div>
                  <br/><br/><br/><br/><br/><br/><br/><br/></>)}
=======
            <div>
              <input type="text" value={this.state.search} onChange={(e)=>this.searchInputHandler(e)}  placeholder="search" name="" id=""/><button onClick={()=>{this.setState({loading:true,data:[]})}} > Search</button>
              <input type="text"  onChange={(e)=>this.searchedCountriesHandler(e)} name="" id=""/>
              {this.state.searchedCountries.map(c=>
                                   <div onClick={()=>this.countrySelectHandler(c.substring(0,c.indexOf(',')))}>
                                       {c} 
                                     <Flag code={c.substring(c.indexOf(',')+1)}height={32} />
                                      </div>
                                   )}
               <div onClick={()=>this.countrySelectHandler("all")}>
                  ALL
                  </div>
                {this.state.data.map(d=><><span>{d.firstName}  {d.id}</span><br/><br/><br/><br/><br/><br/><br/><br/></>)}
>>>>>>> 9d54e34069526c8431ef82366de43222b1dd12ba
                 {this.state.loading?"LOADING...":null}
     {this.state.totalPages==this.state.page+1?null: <button onClick={this.pageHandler}>More...</button>}
            </div>
        )
    }
}

export default  PublicFigure;
