import React, { Component } from 'react';
import ScripletTag from 'react-script-tag'
import {Link} from "react-router-dom"
import Modal from "../../../UI/modal/modal"
import Backdrop from "../../../UI/backdrop/backdrop"
import {withRouter} from "react-router-dom"



class Map extends Component {

     state={
         s:"",
         show:true
        }

   modaltoggleHandler=()=>{
     if(this.state.show){
       this.setState({
         show:false,
         s:""
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
                      {this.state.s}
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
