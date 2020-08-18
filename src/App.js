import React from 'react';
import './App.scss';
import ErrorBoundary from "./error-boundary/error-boundary"
import Layout from "./components/layout/layout"


class App extends React.Component {
  render(){
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
