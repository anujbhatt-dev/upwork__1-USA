import React, { Component } from 'react';
import ScripletTag from 'react-script-tag'
import {Link} from "react-router-dom"
import Modal from "../../../UI/modal/modal"
import Backdrop from "../../../UI/backdrop/backdrop"
import {withRouter} from "react-router-dom"
import Believer from "./believer/believer"
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
                         <Believer clicked={()=>this.setState({believer:true,stage:2})}/>
                         <NotABeliever clicked={()=>this.setState({believer:false,stage:2})}/>
                     </div>:null}
                     {this.state.stage===2?
                         <div className="query query--2">
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
            {modal}
          </>
        );
    }
}

export default withRouter(Map);
