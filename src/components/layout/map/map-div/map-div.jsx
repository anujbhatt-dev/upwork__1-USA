 import React, {Component} from "react"


 class MapDiv extends Component{


  state={
    b:0,
    nb:0
  }




  componentDidMount(){
    
    let f=0;

    let b=0,nb=0;
    
    if(this.props.count)
   this.props.count.map(data=>{
     console.log(data);
         if(f===2)
         return ;
              if(data[1]===this.props.country){
                if(data[2]==="yes")
                  b=data[0];
                 else
                 nb=data[0];
                 f++; 
              }
       })
}


componentDidUpdate(prevProps, prevState){

  if(prevProps.country===this.props.country)
  return ;

  let f=0;

    let b=0,nb=0;
    
    if(this.props.count)
   this.props.count.map(data=>{
     console.log(data);
         if(f===2)
         return ;
              if(data[1]===this.props.country){
                if(data[2]==="yes")
                  b=data[0];
                 else
                 nb=data[0];
                 f++; 
              }
       })

       this.setState({
         b:b,
         nb:nb
       })
}
  


   render(){

     return (
         <div className="map__div">
             <div className="map__div-country">{this.props.country}</div>
               <div className="map__div-believer">
                     <div className="map__div-believer-text">Total Believers</div>
     <div className="map__div-believer-number">{this.state.b}</div>
               </div>
               <div className="map__div-nonBeliever">
                     <div className="map__div-nonBeliever-text">Total Non Believers</div>
                     <div className="map__div-nonBeliever-number">{this.state.nb}</div>
               </div>

         </div>
     )
   }
 }


export default MapDiv;
