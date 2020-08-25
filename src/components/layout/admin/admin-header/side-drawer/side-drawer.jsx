 import React, {PureComponent} from "react"
import Flag from "react-world-flags"

 class SideDrawer extends PureComponent{

   state={
     stage:true,
     data:[],
     char:[],
     selected:[],
     //selectedCharIndex:-1,
    }

componentDidUpdate(prevProps, prevState){
  let char=Object.keys(this.props.data);
  //console.log(char)

  if(prevState.char.length===this.state.char.length && Object.keys(prevProps.data).length===char.length)
  return ;
    let ch=[];
        char.sort();
        console.log(char)
  
this.setState({char:char,data:this.props.data});
  console.log("123"+JSON.stringify(ch[0]));
}



   stageHandler=(val)=>{
     // alert("d")
if(val===-1){
  this.setState({
    stage:!this.state.stage,
  })
  return ;
}
console.log(JSON.stringify(this.props.data[val])+"  "+val)
     let selected=[... this.props.data[val]];

     this.setState({
       stage:!this.state.stage,
       selected:selected,
      // selectedCharIndex:index
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
       <div onClick={()=>{this.props.selectHandler(-1);this.props.clicked();}}
       className="sideDrawer__container-stage1 sideDrawer__container-stage">
         ALL
         <i className="fa fa-angle-right" aria-hidden="true"></i></div>

          {this.state.char.map((char,index)=>{
              return  <div onClick={()=>this.stageHandler(char)}
             className="sideDrawer__container-stage1 sideDrawer__container-stage">
                {char}
                <i className="fa fa-angle-right" aria-hidden="true"></i></div>
                })}</>


    stage2 =  this.state.selected.map((country,index)=>{
      return <div onClick={()=>this.onClickHandler(country[0])}
            className="sideDrawer__container-stage2 sideDrawer__container-stage">
              <div>{country[0]}</div><div><Flag code={country[1]} height={32}/></div></div>
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
