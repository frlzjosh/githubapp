// importing sass to be compiled in this js file
// importing components

import React from 'react';
import ReactDOM from "react-dom";
import ButtonEx from '../components/btn'
import {Route, Switch } from "react-router-dom";
import Resume from './Resume'
import About from './About'
import Navbar from './../components/nav'
import { Divider, Container, Header } from 'semantic-ui-react';

export default function App() {
    return (
        <div>   
            <Container>
                <Navbar></Navbar>
                <Header className="font--white" as="h2">Joshua J. Magdaleno's Portfolio</Header>
                    <ButtonEx/>
                    <Divider hidden />
            </Container>   
            <Switch>   
                <Route exact path='/' component={Resume}/>
                <Route path='/about' component={About}/>   
            </Switch>
        </div>  
    );
}
