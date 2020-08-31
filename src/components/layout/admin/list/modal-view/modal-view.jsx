import React, { Component } from 'react'
import axios from 'axios'

 class ModalView extends Component {

 state={
     background:"",
 }

 inputHandler=(e)=>{

   // console.log(e.target.name )

    this.setState({background:e.target.value})

 }

 backgroundSaveHandler=()=>{

      if(this.state.background.length!=0)
      axios.post("/v1/admin/client/background",null,{params:{background:this.state.background}})
       .then(res=>{ alert("saved")})

 }


    render() {
        
        return (
            <div>
                {!this.props.data.verified?
                <button onClick={()=>this.props.verifyToggler(this.props.data.email,this.props.data.index)} className="list__body-row-column-btn-check" ><i className="fa fa-check" aria-hidden="true"></i></button>
                :<button onClick={()=>this.props.verifyToggler(this.props.data.email,this.props.data.index)} className="list__body-row-column-btn-cross" ><i className="fa fa-times" aria-hidden="true"></i></button>}
                <input onChange={(e)=>this.inputHandler(e)} name="background" value={this.state.background} type="text-field" placeholder="background" name="" id=""/>
                <button >save</button>
                <div  className="list__body-row-column list__body-row-column--delete"><i onClick={()=>this.props.delete(this.props.data.index)} class="fa fa-trash" aria-hidden="true"></i></div>

            </div>
        )
    }
}

export default  ModalView;
