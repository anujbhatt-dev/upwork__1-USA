import React, { Component } from 'react';
import ScripletTag from 'react-script-tag'
import {Link} from "react-router-dom"

class Map extends Component {

    render(){
  return (
    <>
      <ScripletTag src="mapdata.js"></ScripletTag>
      <ScripletTag src="worldmap.js"></ScripletTag>
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
