 import React, {PureComponent} from "react"


 class SideDrawer extends PureComponent{

   state={
     stage:true,
     char:[],
     selected:[],
     selectedCharIndex:-1,
    }

componentDidUpdate(prevProps, prevState){
  if(prevState.char.length===this.state.char.length && prevProps.data.length===this.props.data.length)
  return ;
    let ch=[];
  this.props.data.map(char=>{
    let c={value:char.value};
    let co=[];
    c.country=co;
    ch.push(c);
    char.country.map(country=>{
      co.push({name:country.name,code:country.code});
    })
  })
this.setState({char:ch});
  //console.log("123"+JSON.stringify(ch[0]));
}
   


   stageHandler=(index)=>{
     // alert("d")
if(index===-1){
  this.setState({
    stage:!this.state.stage,
  })
  return ;
}
     let selected=[... this.state.char[index].country];
     this.setState({
       stage:!this.state.stage,
       selected:selected,
       selectedCharIndex:index
     })
   }

    onClickHandler=(index)=>{
      this.setState({
          stage:true
      })
    this.props.selectHandler(this.state.selectedCharIndex,index);
    this.props.clicked()

    }


   render(){
     let stage1 = null
     let stage2 = null
    stage1 =<>
       <div onClick={()=>{this.props.selectHandler(-1,-1);this.props.clicked();}}
       className="sideDrawer__container-stage1 sideDrawer__container-stage">
         ALL
         <i className="fa fa-angle-right" aria-hidden="true"></i></div>
          
          {this.state.char.map((char,index)=>{
              return  <div onClick={()=>this.stageHandler(index)}
             className="sideDrawer__container-stage1 sideDrawer__container-stage">
                {char.value} 
                <i className="fa fa-angle-right" aria-hidden="true"></i></div>
                })}</>


    stage2 =  this.state.selected.map((country,index)=>{
      return <div onClick={()=>this.onClickHandler(index)}
            className="sideDrawer__container-stage2 sideDrawer__container-stage">
              {country.name+"  "}{country.code}</div>
    })


     return (
        <div className={"sideDrawer "+this.props.toggler}>
            <div className="sideDrawer__container">
              {/* <i onClick={this.props.clicked} className="fa fa-times sideDrawer__container-cross" aria-hidden="true"></i> */}
              <div className="sideDrawer__container-logo">{this.state.stage?"Logo":<div onClick={()=>this.stageHandler(-1)}><i style={{cursor:"pointer"}} className="fa fa-angle-left" aria-hidden="true"></i><span  style={{cursor:"pointer",paddingLeft:"2rem"}}>back</span></div>}</div>
               {this.state.stage?stage1:stage2}
            </div>
        </div>
     )
   }
 }


export default SideDrawer;
