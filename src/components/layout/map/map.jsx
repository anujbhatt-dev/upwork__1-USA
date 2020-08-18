import React, { Component } from 'react';
import ScripletTag from 'react-script-tag'




class Map extends Component {

     state={
         s:""
        }


    selectHandler=(val)=>{
this.setState({s:val});
    }

    componentDidMount(){
        window.addEventListener('hashchange',(event) =>{
            console.log(window.location.hash.substring(1));
              this.selectHandler(decodeURI(window.location.hash.substring(1)));
        }
            );
    }

    render(){
  return (
    <div id="main" >
         
         selected= { this.state.s}

     <div>
	<div id="map"></div>
		</div>
    </div>
  );
    }
}

export default Map;
