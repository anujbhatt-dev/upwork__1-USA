import React from 'react';
import './App.scss';
import ErrorBoundary from "./error-boundary/error-boundary"
import Layout from "./components/layout/layout"
import axios from "axios";

class App extends React.Component {


  state={
    authenticated:false
  }

  componentDidMount=()=>{
    axios.interceptors.response.use(response =>{
      let authorization=response.headers.authorization;
      if(authorization){
      axios.defaults.headers.common['authorization'] = authorization;
    this.setState({authenticated:true});
    }
      return response;});
  }



  render(){

    return (
      <ErrorBoundary>
      <div className="App">
      <Layout authenticated={this.state.authenticated}/>

      </div>
      </ErrorBoundary>
    );
  }
}

export default App;
