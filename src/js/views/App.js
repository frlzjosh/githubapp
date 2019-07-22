// importing sass to be compiled in this js file
// importing components

import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Divider, Header} from 'semantic-ui-react'
import ButtonEx from '../components/btn'
import Panel from '../components/panel'
import ProjectList from '../components/projectList'
import Navbar from './../components/nav'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            metaLabProjects: ['iSTART', '10 Letters', 'META+LAB Website', 'META-UI Kit'],
            medtronicProjects: ['Patient Monitor'],
            personalProjects: ['My Portfolio', 'Scraps', 'Platelist'],
            competitionsAndHackathons: ['LA Hacks', 'Bullring', 'Northrop Grumman Hackathon']
        }
    }
    render (){
        return (
            <div className="ui container">
                <Navbar></Navbar>
                <Header className="font--white" as="h2">Joshua J. Magdaleno's Portfolio</Header>
                <ButtonEx/>
                <Divider hidden />
                <Panel
                    header="Projects"
                />
                <ProjectList
                    organization="Medtronic Inc."
                    projects={this.state.medtronicProjects}
                />
                <ProjectList
                    organization="META+LAB"
                    projects={this.state.metaLabProjects}
                />
                <ProjectList
                    organization="PERSONAL PROJECTS"
                    projects={this.state.personalProjects}
                />
                <Panel
                    header="Hackathon's & Competitions"
                />
                <ProjectList
                    organization="PERSONAL PROJECTS"
                    projects={this.state.competitionsAndHackathons}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);