import React from 'react';
import './App.scss';
import ErrorBoundary from "./error-boundary/error-boundary"
import Layout from "./components/layout/layout"
// import ScriptTag from 'react-script-tag';
// const Demo = props => (
// <ScriptTag type="text/javascript" src="/path/to/main.js" />
// )

class App extends React.Component {

  render(){
    // <Demo/>

    return (
      <ErrorBoundary>
      <div className="App">
      <Layout />

      </div>
      </ErrorBoundary>
    );
  }
}

export default App;
