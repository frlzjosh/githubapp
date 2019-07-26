// importing sass to be compiled in this js file
// importing components

import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Resume from './Resume'
import About from './About'

export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={Resume}/>
            <Route path="/about" component={About}/>
        </Switch>
    );
}
