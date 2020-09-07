 import React, {Component} from "react"
 import Aos from "aos"
 import "aos/dist/aos.css"
import Flag from "react-world-flags"


 class MapDiv extends Component{


  state={
    b:0,
    nb:0,
    u:0
  }




  componentDidMount(){
    Aos.init({duration:500,delay:100})
    let f=0;

    let b=0,nb=0,u=0;

    if(this.props.count)
   this.props.count.map(data=>{
         if(f===3)
         return ;
              if(data[1]===this.props.country){
                if(data[2]==="yes")
                  b=data[0];
                 else if(data[2]==="no")
                 nb=data[0];
                 else if(data[2]==="undecided")
                 u=data[0];
                 f++;
              }
       })
}


componentDidUpdate(prevProps, prevState){
  Aos.init({duration:500,delay:100})
  if(prevProps.country===this.props.country)
  return ;

  let f=0;

    let b=0,nb=0,u=0;

    if(this.props.count)
   this.props.count.map(data=>{
         if(f===3)
         return ;
         if(data[1]===this.props.country){
           if(data[2]==="yes")
             b=data[0];
            else if(data[2]==="no")
            nb=data[0];
            else if(data[2]==="undecided")
            u=data[0];
            f++;
         }
       })

       this.setState({
         b:b,
         nb:nb,
         u:u
       })
}



   render(){

     return (
         this.props.country?<div data-aos="fade-right" className="map__div">
             <div className="map__div-country"><div>{this.props.country}</div>
                 <Flag height="26" code={this.props.code}/>
             </div>

               <div className="map__div-believer">
                     <div className="map__div-believer-text">Total Believers</div>
                     <div className="map__div-believer-number">{this.state.b}</div>
               </div>
               <div className="map__div-nonBeliever">
                     <div className="map__div-nonBeliever-text">Total Non Believers</div>
                     <div className="map__div-nonBeliever-number">{this.state.nb}</div>
               </div>
               <div className="map__div-nonBeliever">
                     <div className="map__div-nonBeliever-text">Total undecided</div>
                     <div className="map__div-nonBeliever-number">{this.state.u}</div>
               </div>
         </div>: null
     )
   }
 }


export default MapDiv;
