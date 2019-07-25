import  App  from  './views/App'
import './../sass/app.scss';
import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

