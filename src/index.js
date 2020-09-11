import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import Axios from 'axios';

Axios.defaults.baseURL=
                        // "http://godsplan-env.eba-ppuxuhbi.ap-south-1.elasticbeanstalk.com/api";
                         "http://localhost:8083/api";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
