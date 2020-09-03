import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import Axios from 'axios';
// import ScriptTag from 'react-script-tag';
// const Demo = props => (
// <ScriptTag type="text/javascript" src="../../../../public/resource.js" />
// )
// <Demo />

Axios.defaults.baseURL=
                       // "http://godsplan-env.eba-ppuxuhbi.ap-south-1.elasticbeanstalk.com/api";
                          "http://localhost:8081/api";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
