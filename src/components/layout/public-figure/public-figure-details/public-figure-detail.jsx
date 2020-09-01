import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

 class PubliFigureDetail extends Component {

    state={
        client:{},
    }

    componentDidMount(){

       // console.log(this.props.history)
        this.setState({
            client:this.props.location.state
        })
    }


    render() {

        return (
            <div>
                {this.state.client.firstName}
            </div>
        )
    }
}

export default withRouter(PubliFigureDetail)