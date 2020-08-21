import React, { Component } from 'react';
import ScripletTag from 'react-script-tag'
import {Link} from "react-router-dom"
import Modal from "../../../UI/modal/modal"
import Backdrop from "../../../UI/backdrop/backdrop"
import {withRouter} from "react-router-dom"
import Believer from "./believer/believer"
import Undecided from "./undecided/undecided"
import NotABeliever from "./not-a-believer/not-a-believer"
import StageTwoQuery from "./stage-two-query/stage-two-query"

class Map extends Component {

     state={
         s:"",
         show:false,
         stage:1,
         believer:null
        }


    modaltoggleHandler=()=>{
     if(this.state.show){
       this.setState({
         show:false,
         s:"",
         stage:1,
         believer:null
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

    componentDidMount(){
        console.log(123);
        this.props.history.push("/map")
        window.addEventListener('hashchange',(event) =>{
            console.log(window.location.hash.substring(1));
           // alert(decodeURI(window.location.hash.substring(1)))
              this.selectHandler(decodeURI(window.location.hash.substring(1)));
        }
            );
    }

  render(){
       let modal = [
                  <Modal clicked={this.modaltoggleHandler} show={this.state.show}>
                     {this.state.stage===1?<div className="query query--1">
                         <Believer country={this.state.s} clicked={()=>this.setState({believer:"yes",stage:2})}/>
                         <NotABeliever country={this.state.s} clicked={()=>this.setState({believer:"no",stage:3})}/>
                          <Undecided className="query__item" clicked={()=>this.setState({believer:"undecided",stage:4})}/>
                     </div>:null}
                     {this.state.stage===2?
                         <div className="query query--2">
                             <StageTwoQuery believer={this.state.believer}/>
                         </div>:
                         null
                       }
                       {this.state.stage===3?
                           <div className="query query--3">
                               <StageTwoQuery believer={this.state.believer}/>
                           </div>:
                           null
                         }
                         {this.state.stage===4?
                             <div className="query query--4">
                                 <StageTwoQuery believer={this.state.believer}/>
                             </div>:
                             null
                           }
                   </Modal>,
                   <Backdrop clicked={this.modaltoggleHandler} show={this.state.show} />
                 ]

        // let   selected= {this.state.s}


        return (
          <>

            <div className="map__wrapper">
            <div style={{position:"relative"}} id="map">
                <div className="branding__remove"> </div>
            </div>
            </div>
            <div className="landing__item landing__item--11">
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
