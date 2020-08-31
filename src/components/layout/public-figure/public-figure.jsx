import React, { Component } from 'react'
import axios from 'axios';

class PublicFigure extends Component {

    state={
        page:0,
        data:[],
        totalPages:1,
        loading:false,
    }

  
      componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll, false);
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
        window.addEventListener("scroll", this.onScroll, false);

    //       window.onscroll = function(ev) {
    //     console.log(window.innerHeight + window.pageYOffset+"   "+document.body.offsetHeight);
    //     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight-30) {
    //         alert("you're at the bottom of the page");
    //         this.pageHandler();
    //     }
    // };

axios.get("/v1/client/publicFigure/0").then(res=>{
    console.log(res.data.totalPages)
                this.setState({data:res.data.content,totalPages:res.data.totalPages})
})

    }

    componentDidUpdate(){
          console.log(this.state.page)
        if(this.state.loading)
        axios.get("/v1/client/publicFigure/"+this.state.page).then(res=>{
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


    render() {
        return (
            <div>
                {this.state.data.map(d=><><span>{d.firstName}</span><br/><br/><br/><br/><br/><br/><br/><br/></>)}
                 {this.state.loading?"LOADING...":null}

            </div>
        )
    }
}

export default  PublicFigure;