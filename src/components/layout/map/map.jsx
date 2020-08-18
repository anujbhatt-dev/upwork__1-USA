import React, { Component } from 'react';
import ScripletTag from 'react-script-tag'


class Map extends Component {

    render(){
  return (
    <div id="main" >
      <ScripletTag src="mapdata.js"></ScripletTag>
      <ScripletTag src="worldmap.js"></ScripletTag>
     <div>
			<div id="map"></div>
		</div>
    </div>
  );
    }
}

export default Map;
