import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Header from "../../header/header"
import Gravatar from 'react-awesome-gravatar';
import Flag from 'react-world-flags';

 class PubliFigureDetail extends Component {

    state={
        client:{},
    }

    componentDidMount(){

        this.setState({
            client:this.props.d
        })
    }


    render() {


        return (
            <div className = "clientDetailViewWrapper" >
                <div className = "clientDetailView">
                  <div className="clientDetailView__row">
                      <div className = "clientDetailView__col clientDetailView__col-1">
                          <div className = "clientDetailView__name">{this.state.client.firstName+" "+this.state.client.lastName}</div>
                          <div className="clientDetailView__notableFor">Notable as <span>{this.state.client.publicFigure==="PF1"?"Public Figure":"Scientist"}</span></div>

                          <div className="clientDetailView__col clientDetailView__col-2">
                          <Flag  code={this.state.client.code} height={25}/>
                          <div className className="clientDetailView__col-country"><span>{this.state.client.country}</span></div>
                          </div>
                      </div>
                      <div className="clientDetailView__col clientDetailView__col-3">

                      {Object.keys(this.state.client).length!==0?<Gravatar email={this.state.client.email} options={ {
                        default:"identicon",
                        size:120,
                      } }>
                            { url => (<img className="gravatar__img clientDetailView__img" src={url} />) }
                      </Gravatar>:null}
                      <div className="clientDetailView__verified">{this.state.client.verified?<span><i class="fa fa-check" aria-hidden="true"></i> verified</span>:null}</div>
                      </div>
                  </div>

                    <hr  className="hr"/>
                    <div className="clientDetailView__background">
                        {this.state.client.background}

                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(PubliFigureDetail)
