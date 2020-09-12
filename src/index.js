import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import Axios from 'axios';

<<<<<<< HEAD
Axios.defaults.baseURL=
                        // "http://godsplan-env.eba-ppuxuhbi.ap-south-1.elasticbeanstalk.com/api";
                         "http://localhost:8083/api";
=======
Axios.defaults.baseURL="http://godsplan-env.eba-2hxajddm.us-east-2.elasticbeanstalk.com/api"
            
>>>>>>> 2742d88b5d1cb5a7b9d8fb4b72dfb7c7141913fc

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
