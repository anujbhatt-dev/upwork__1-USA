import React, { Component } from 'react';
import ScripletTag from 'react-script-tag'


class Map extends Component {

    render(){
  return (
    <>
      <ScripletTag src="mapdata.js"></ScripletTag>
      <ScripletTag src="worldmap.js"></ScripletTag>
      <div className="map__wrapper">
      <div id="map"></div>
      </div>
    </>
  );
    }
}

export default Map;
