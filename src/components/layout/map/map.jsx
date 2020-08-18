import React, { Component } from 'react';
import ScripletTag from 'react-script-tag'
import {Link} from "react-router-dom"



class Map extends Component {

     state={
         s:""
        }


    selectHandler=(val)=>{
this.setState({s:val});
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
  return (

    <>
      selected= {this.state.s}

      <div className="map__wrapper">
      <div style={{position:"relative"}} id="map">
          <Link className="backButton" to="/"><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></Link>
          <div className="branding__remove"> </div>
      </div>
      </div>
    </>
  );
    }
}

export default Map;
