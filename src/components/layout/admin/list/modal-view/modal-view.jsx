import React, { Component } from 'react'
import axios from 'axios'

 class ModalView extends Component {

 state={
     background:"",
 }


    componentDidMount=()=>{
       this.setState({
         background:this.props.data.background
       })

    }

 inputHandler=(e)=>{

    this.setState({background:e.target.value})

 }

 backgroundSaveHandler=()=>{
      axios.post("/v1/admin/client/background",null,{params:{background:this.state.background,email:this.props.data.email}})
       .then(res=>{ alert("saved")
                     this.props.updatedBackground(this.props.data.index,this.state.background)});

 }


    render() {

        return (
            <div className="modalView">
                <div className="modalView__name">NAME: <span>{this.props.data.firstName+" "+this.props.data.lastName}</span></div>
                <div className="modalView__name">EMAIL: <span>{this.props.data.email}</span></div>
               {this.props.data.phone!==null?<div className="modalView__name">MOBILE: <span>{this.props.data.phone}</span></div>:null}
                 <div className="modalView__name">ADDED ON: <span>{this.props.data.createdOn}</span></div>
                <div className="modalView__name">NOTABLE AS: <span>{this.props.data.publicFigure==="PF1"?"Public Figure":"Scientist"}</span></div>
                <div className="modalView__name modalView__name-last">CATEGORY: <span>{this.props.data.category}</span></div>
                <div className="modalView__form"><textarea  className="modalView__input" onChange={(e)=>this.inputHandler(e)} name="background" value={this.state.background} type="text" placeholder="background"></textarea>
                <button onClick={this.backgroundSaveHandler} className="modalView__btn">save</button></div>
                {!this.props.data.verified?
                <button onClick={()=>this.props.verifyToggler(this.props.data.email,this.props.data.index)} className="modalView__verify" ><i className="fa fa-check" aria-hidden="true">verify</i></button>
                :<button onClick={()=>this.props.verifyToggler(this.props.data.email,this.props.data.index)} className="modalView__unVerify" ><i className="fa fa-times" aria-hidden="true">Unverify</i></button>} <br/>
                <div  className="modalView__delete"><i onClick={()=>this.props.delete(this.props.data.index)} class="fa fa-trash" aria-hidden="true"></i></div>
            </div>
        )
    }
}

export default  ModalView;
