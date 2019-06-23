// importing sass to be compiled in this js file
// importing components

import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Divider, Header} from 'semantic-ui-react'
import ButtonEx from '../components/btn'
import Panel from '../components/panel'
import DarkList from '../components/projectList'
import Navbar from './../components/nav'

class App extends React.Component {
    render (){
        var metaLabProjects = ['iSTART', '10 Letters', 'META+LAB Website', 'META-UI Kit']
        var medtronicProjects = ['Patient Monitor']
        var personalProjects = ['My Portfolio', 'Scraps', 'Platelist']

        var competitionsAndHackathons = ['LA Hacks', 'Bullring', 'Northrop Grumman Hackathon']
        return (
            <div className="ui container">
                <Navbar></Navbar>
                <Header className="font--white" as="h2">Joshua J. Magdaleno's Portfolio</Header>
                <ButtonEx/>
                <Divider hidden />
                <Panel
                    header="Projects"
                />
                <DarkList
                    organization="Medtronic Inc."
                    projects={medtronicProjects}
                />
                <DarkList
                    organization="META+LAB"
                    projects={metaLabProjects}
                />
                <DarkList
                    organization="PERSONAL PROJECTS"
                    projects={personalProjects}
                />
                <Panel
                    header="Hackathon's & Competitions"
                />
                <DarkList
                    organization="PERSONAL PROJECTS"
                    projects={competitionsAndHackathons}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);