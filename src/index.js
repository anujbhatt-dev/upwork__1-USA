import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import Axios from 'axios';


Axios.defaults.baseURL=
                          // "http://godsplan-env.eba-2hxajddm.us-east-2.elasticbeanstalk.com/api"    //prod
                          "http://godsplan-env.eba-ppuxuhbi.ap-south-1.elasticbeanstalk.com/api"     //dev

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
