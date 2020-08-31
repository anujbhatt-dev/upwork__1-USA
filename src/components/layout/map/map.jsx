import React, { Component } from 'react';
// import {Link} from "react-router-dom"
import Modal from "../../../UI/modal/modal"
import Backdrop from "../../../UI/backdrop/backdrop"
import {withRouter} from "react-router-dom"
import Believer from "./believer/believer"
import Undecided from "./undecided/undecided"
import NotABeliever from "./not-a-believer/not-a-believer"
import StageTwoQuery from "./stage-two-query/stage-two-query"
import MapDiv from "./map-div/map-div";
import Statistics from "./statistics/statistics"
import axios from 'axios';


class Map extends Component {

     state={
         s:"",
         show:false,
         stage:1,
         believer:null,
         world:{
         worldTotal:0,
         worldTotalBeliever:0,
         worldTotalNonBeliever:0,
         worldTotalUndecided:0,
         },
         count:null,
         hover:"",
         code:""
        }


    modaltoggleHandler=()=>{
     if(this.state.show){
       this.setState({
         show:false,
         s:"",
         stage:1,
         believer:null,
         hover:null
       })
       this.props.history.push("/map")
     }else{
       this.setState({
         show:true
       })
     }
   }

    selectHandler=(val)=>{
        this.setState({s:val});
        this.modaltoggleHandler();
    }

    hoverHandler=(val)=>{
      this.setState({hover:val});
    }

    worldTotalHandler=(w)=>{
       let newState = {...this.state}
       newState.world={...w}
         this.setState({
            ...newState
         })
    }

    componentDidMount(){

    
      this.props.history.push("/map")
      axios.get("/v1/client/country/count").then(res=>{
                      this.setState({count:res.data})
                      // console.log(this.state.count);
      })


        console.log(123);
        window.addEventListener('hashchange',(event) =>{
        let code=window.location.hash.substring(window.location.hash.indexOf('#',2)+1);
           this.setState({
             code:code
           })
           if(window.location.hash.charAt(1)!=='#')
           this.selectHandler(decodeURI(window.location.hash.substring(1,window.location.hash.indexOf('#',2))));
           else
           this.hoverHandler(decodeURI(window.location.hash.substring(2,window.location.hash.indexOf('#',2))));
        }
            );
    }

  render(){
       let modal = [
                  <Modal clicked={this.modaltoggleHandler} show={this.state.show}>
                     {this.state.stage===1?<div className="query query--1">
                         <Believer world={this.state.world} count={this.state.count} country={this.state.s} clicked={()=>this.setState({believer:"yes",stage:2})}/>
                         <NotABeliever  world={this.state.world} count={this.state.count} country={this.state.s} clicked={()=>this.setState({believer:"no",stage:3})}/>
                          <Undecided className="query__item" clicked={()=>this.setState({believer:"undecided",stage:4})}/>
                     </div>:null}
                     {this.state.stage===2?
                         <div className="query query--2">
                             <StageTwoQuery  code={this.state.code} country={this.state.s} believer={this.state.believer}/>
                         </div>:
                         null
                       }
                       {this.state.stage===3?
                           <div className="query query--3">
                               <StageTwoQuery code={this.state.code} country={this.state.s} believer={this.state.believer}/>
                           </div>:
                           null
                         }
                         {this.state.stage===4?
                             <div className="query query--4">
                                 <StageTwoQuery code={this.state.code} country={this.state.s} believer={this.state.believer}/>
                             </div>:
                             null
                           }
                   </Modal>,
                   <Backdrop clicked={this.modaltoggleHandler} show={this.state.show} />
                 ]


        return (
          <>


            <div className="map__wrapper">
              <h2 style={{color:"black",padding:".5rem",textAlign:"center",fontWeight:"bolder",letterSpacing:"2px"}}>choose your country!</h2>
            <div id="map">
                <div className="branding__remove"> </div>


                <MapDiv count={this.state.count} code={this.state.code} country={this.state.hover}/>

            </div>

            </div>
            <Statistics worldHandler={this.worldTotalHandler} count={this.state.count} code={this.state.code} country={this.state.hover}/>
            <div className="landing__item landing__item--11 landing__item--11-1">
                 <div style={{left:"0"}} className="landing__item-text"><i className="quote-left fa fa-quote-left" aria-hidden="true"></i>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem at quam repudiandae! Repellendus, neque provident. Laborum in ad consequuntur officia.
                 <i className="quote-left fa fa-quote-right" aria-hidden="true"></i></div>
            </div>
            {modal}
          </>
        );
    }
}

export default withRouter(Map);
