 import React, {Component} from "react"
import axios from 'axios';

 class Statistics extends Component{

   state={
     b:0,
     nb:0,
     u:0,
     totalRegion:0,
     bPercent:0,
     nbPercent:0,
     uPercent:0,
     worldTotal:0,
     count:[]
   }




   componentDidMount(){
     // let f=0;
     // let totalRegion = 0;
     // let bPercent=0,nbPercent=0,uPercent=0;

     // console.log("mapdiv",this.state.count);
     let countries = [];
     let newData = {}
     axios.get("/v1/client/country/count").then(res=>{
                     this.setState({count:res.data})
                     // console.log("in");
                     this.state.count.forEach(data=>{
                       if(!countries.includes(data[3])){
                         countries.push(data[3])
                         newData[data[3]]=[0,0,0];
                       }
                     });
                     this.state.count.forEach(data=>{
                       if(data[2]==="yes"){
                         newData[data[3]][0]=data[0]
                       }else if(data[2]==="no"){
                         newData[data[3]][1]=data[0]
                       }else if(data[2]==="undecided"){
                         newData[data[3]][2]=data[0]
                       }
                     });
                     let worldTotalBeliever = 0,worldTotalNonBeliever = 0,worldTotalUndecided = 0;
                     Object.keys(newData).forEach(data=>{
                              worldTotalBeliever = worldTotalBeliever + newData[data][0]
                              worldTotalNonBeliever = worldTotalNonBeliever + newData[data][1]
                              worldTotalUndecided = worldTotalUndecided + newData[data][2]
                     });
                     this.props.worldHandler({
                       worldTotal:worldTotalBeliever+worldTotalNonBeliever+worldTotalUndecided,
                       worldTotalBeliever:worldTotalBeliever,
                       worldTotalNonBeliever:worldTotalNonBeliever,
                       worldTotalUndecided:worldTotalUndecided,
                     })
                     let worldTotalBelieverPercentage = 0,worldTotalNonBelieverPercentage = 0,worldTotalUndecidedPercentage = 0;
                     worldTotalBelieverPercentage = Math.round(worldTotalBeliever/(worldTotalBeliever+worldTotalNonBeliever+worldTotalUndecided)*100)
                     worldTotalNonBelieverPercentage = Math.round(worldTotalNonBeliever/(worldTotalBeliever+worldTotalNonBeliever+worldTotalUndecided)*100)
                     worldTotalUndecidedPercentage = 100- worldTotalBelieverPercentage - worldTotalNonBelieverPercentage;
                     this.setState({
                       bPercent:worldTotalBelieverPercentage,
                       nbPercent:worldTotalNonBelieverPercentage,
                       uPercent:worldTotalUndecidedPercentage,
                       totalRegion:worldTotalBeliever+worldTotalNonBeliever+worldTotalUndecided
                     })
                     console.log(this.state.bPercent,this.state.nbPercent,this.state.uPercent);
                     let element = document.getElementById("gradient");
                     let gradient = isNaN(this.state.bPercent)
                     ?`-webkit-linear-gradient(top, black 0%, black 100%)`
                     :`-webkit-linear-gradient(top, #3D9BE9 ${this.state.bPercent}%, #F8171C ${(this.state.bPercent+this.state.nbPercent)}%, #8C7A7A 100%)`
                     console.log(gradient);
                     element.style.backgroundImage = gradient
     })



    // this.props.count.forEach(data=>{
    //   // console.log(data);
    //       // if(f===3)
    //       // return ;

    //     })
   // totalRegion = b + nb + u;
   //  bPercent = Math.round((b/totalRegion)*100)
   //  nbPercent = Math.round((nb/totalRegion)*100)
   //  uPercent = 100 - bPercent - nbPercent;
   //  this.setState({
   //    b:b,
   //    nb:nb,
   //    u:u,
   //    totalRegion:totalRegion,
   //    bPercent:bPercent,
   //    nbPercent:nbPercent,
   //    uPercent:uPercent,
   //    worldTotal:totalRegion
   //  })
         // '-webkit-linear-gradient('
         //   + 'left'  + ', ' + 'red 75% ' + ', ' + '#8C7A7A 25%' + ')'
 }


 componentDidUpdate(prevProps, prevState){
   let element = document.getElementById("gradient");
   let gradient = isNaN(this.state.bPercent)
   ?`-webkit-linear-gradient(top, black 0%, black 100%)`
   :`-webkit-linear-gradient(top, #3D9BE9 ${(this.state.bPercent)}%, #F8171C ${(this.state.bPercent)}%, #F8171C ${(this.state.bPercent+this.state.nbPercent)}%,#8C7A7A ${(this.state.bPercent+this.state.nbPercent)}%, #8C7A7A 100%)`
   console.log(gradient);
   element.style.backgroundImage = gradient
   if(prevProps.country===this.props.country)
   return ;

   let f=0;
     let totalRegion = 0;
     let b=0,nb=0,u=0,bPercent=0,nbPercent=0,uPercent=0;

     if(this.props.count)
    this.props.count.map(data=>{
      // console.log(data);
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

        totalRegion = b + nb + u;
         bPercent = Math.round((b/totalRegion)*100)
         nbPercent = Math.round((nb/totalRegion)*100)
         uPercent = 100 - bPercent - nbPercent;
         this.setState({
           b:b,
           nb:nb,
           u:u,
           totalRegion:totalRegion,
           bPercent:bPercent,
           nbPercent:nbPercent,
           uPercent:uPercent
         })


 }




   render(){

     return (
       <div className="map__statistics">
          <div className="map__statistics--head">{this.props.country===""?"World":this.props.country} data</div>
          <div className="map__statistics--body">
               <div className="map__statistics--body-item map__statistics--body-item1">
                    <div className="map__statistics--body-item1-number">{this.state.totalRegion}</div>
                    <div className="map__statistics--body-item1-text">Total Answers</div>
               </div>
               <div id="gradient" className="map__statistics--body-item map__statistics--body-item2">
                    <i className="fa fa-male" aria-hidden="true"></i>
               </div>
               <div className="map__statistics--body-item map__statistics--body-item3">
                    <div className="map__statistics--body-item3-believer">
                          <i className="fa fa-male map__statistics--body-item3-believer-icon" aria-hidden="true"></i>
                          <div className="map__statistics--body-item3-text"><div className="map__statistics--body-item3-text1">believer</div><div>{isNaN(this.state.bPercent)?"no data":this.state.bPercent+"%"}</div></div>
                    </div>
                    <div className="map__statistics--body-item3-nonBeliever">
                          <i className="fa fa-male map__statistics--body-item3-nonBeliever-icon" aria-hidden="true"></i>
                          <div className="map__statistics--body-item3-text"><div className="map__statistics--body-item3-text1">non believer</div><div>{isNaN(this.state.nbPercent)?"no data":this.state.nbPercent+"%"}</div></div>
                    </div>
                    <div className="map__statistics--body-item3-undecided">
                          <i className="fa fa-male map__statistics--body-item3-undecided-icon" aria-hidden="true"></i>
                          <div className="map__statistics--body-item3-text"><div className="map__statistics--body-item3-text1">undecided</div><div>{isNaN(this.state.uPercent)?"no data":this.state.uPercent+"%"}</div></div>
                    </div>
                    <div className="map__statistics--body-item3-undecided">
                          <i style={{color:"black"}} className="fa fa-male map__statistics--body-item3-undecided-icon" aria-hidden="true"></i>
                          <div className="map__statistics--body-item3-text"><div className="map__statistics--body-item3-text1">no data</div></div>
                    </div>
               </div>
          </div>
       </div>
     )
   }
 }


export default Statistics;
