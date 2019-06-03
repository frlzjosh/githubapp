// importing sass to be compiled in this js file
// importing components

import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Divider, Header} from 'semantic-ui-react'
import ButtonEx from '../components/btn'
import Panel from '../components/panel'
import DarkList from '../components/projectList'

class App extends React.Component {
    render (){
        var metaLabProjects = ['META+LAB Website', '10 Letters', 'iSTART', 'META-UI Kit']
        var personalProjects = ['Scraps', 'Portfolio', 'Platelist']
        return (
            <div className="ui container">
                <Header className="font--white" as="h2">Joshua J. Magdaleno's Portfolio</Header>
                <ButtonEx/>
                <Divider hidden />
                <Panel
                    header="Projects"
                />
                <DarkList
                    organization="META+LAB"
                    projects={metaLabProjects}
                />
                <Panel
                    header="Hackathon's & Competitions"
                />
                <DarkList
                    organization="PERSONAL PROJECTS"
                    projects={personalProjects}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);