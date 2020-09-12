 import React, {PureComponent} from "react"
import Flag from "react-world-flags"

 class SideDrawer extends PureComponent{

   state={
     stage:true,
     char:{},
     selected:[],
    }

    componentWillMount(){
      if(this.props.countries.length===0)
           return ;

  let hashSet={};
  let set= new Set();
  this.props.countries.map(country=>{
                             if(country.charAt(0) in hashSet)
                             hashSet[country.charAt(0)].list.push({name:country.substring(0,country.indexOf(',')),code:country.substring(country.indexOf(',')+1)});
                              else{
                                set.add(country.charAt(0));
                                hashSet[country.charAt(0)]={list:[{name:country.substring(0,country.indexOf(',')),code:country.substring(country.indexOf(',')+1)}]};
                              }
                    });


  this.setState({char:hashSet})
    }

componentDidUpdate(prevProps, prevState){
  if(prevProps.countries.length===this.props.countries.length)
  return ;
  let hashSet={};
  let set= new Set();
  this.props.countries.map(country=>{
                             if(country.charAt(0) in hashSet)
                             hashSet[country.charAt(0)].list.push({name:country.substring(0,country.indexOf(',')),code:country.substring(country.indexOf(',')+1)});
                              else{
                                set.add(country.charAt(0));
                                hashSet[country.charAt(0)]={list:[{name:country.substring(0,country.indexOf(',')),code:country.substring(country.indexOf(',')+1)}]};
                              }
                    });


  this.setState({char:hashSet})
}



   stageHandler=(val)=>{
if(val===-1){
  this.setState({
    stage:!this.state.stage,
  })
  return ;
}
     let selected=[... this.state.char[val].list];

     this.setState({
       stage:!this.state.stage,
       selected:selected,
     })
   }

    onClickHandler=(val)=>{
      this.setState({
          stage:true
      })
    this.props.selectHandler(val);
    this.props.clicked()

    }


   render(){
     let stage1 = null
     let stage2 = null
    stage1 =<>
       <div onClick={()=>{this.props.selectHandler("all");this.props.clicked();}}
       className="sideDrawer__container-stage1 sideDrawer__container-stage">
         ALL
         <i className="fa fa-angle-right" aria-hidden="true"></i></div>

          {Object.keys( this.state.char).map((char,index)=>{
              return  <div onClick={()=>this.stageHandler(char)}
             className="sideDrawer__container-stage1 sideDrawer__container-stage">
                {char}
                <i className="fa fa-angle-right" aria-hidden="true"></i></div>
                })}</>


    stage2 =  this.state.selected.map((country,index)=>{
      return <div onClick={()=>this.onClickHandler(country.name)}
            className="sideDrawer__container-stage2 sideDrawer__container-stage">
              <div>{country.name}</div><div>
                <Flag code={country.code} height={32}/>
              </div></div>
    })


     return (
        <div className={"sideDrawer "+this.props.toggler}>
            <div className="sideDrawer__container">
              <div className="sideDrawer__container-logo">{this.state.stage?"Logo":<div onClick={()=>this.stageHandler(-1)}><i style={{cursor:"pointer"}} className="fa fa-angle-left" aria-hidden="true"></i><span  style={{cursor:"pointer",paddingLeft:"2rem"}}>back</span></div>}</div>
               {this.state.stage?stage1:stage2}
            </div>
        </div>
     )
   }
 }


export default SideDrawer;
