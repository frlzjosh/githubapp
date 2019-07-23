// importing sass to be compiled in this js file
// importing components

import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Divider, Header, Container} from 'semantic-ui-react'
import ButtonEx from '../components/btn'
import Panel from '../components/panel'
import ProjectList from '../components/projectList'
import Navbar from './../components/nav'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            metaLabProjects: ['iSTART', '10 Letters', 'META+LAB Website', 'META-UI Kit'],
            metaLabProjectDescriptions: [
                "- Retreived database queries using dependency injection through service/contract flow.\n- Created tests for functionality and data on Vue.js components as well as services and controllers with PHP unit tests.\n- Engineered the architecture and flow to efficiently implement and create iSTART's UI/UX.",
                "- Refactored and optimized the front-end to store data with state management through Vue-x.\n- Managed front end functionality to be modular using Vue.js.\n- Implemented controller logic for database queries.",
                "- Implemented an internal UI-Kit to create a modern-designed website",
                "- Created themed and modular components for a UI-Kit"
            ],
            metaLabProjectDates: ['01/2019 - 05/2019', '12/2017 - 01/2019', '11/2017 - 02/2018', '08/2017 - 11/2017'],
            medtronicProjects: ['Patient Monitor'],
            medtronicProjectDates: ['06/2019 - Present'],
            medtronicProjectDescriptions: ["- Creating a system based off an event-driven architecture that reacts to a continuous stream of data in Go\n- Using Angular.js on the client-side to subscribe to incoming data from a web-socket\n- Node.js serves notifications to the users when events are triggered from the Go server"],
            personalProjects: ['My Portfolio Website', 'Scraps', 'Platelist'],
            personalProjectDates: ['03/2019 - Present', '04/2019', '03/2019 - 05/2019'],
            personalProjectDescriptions: [
                "- Creating my portfolio websute with modular and reusable components to learn React.js\n- Implenting React Semantic-UI for styling and to customize components",
                "- Implemented several API's and libraries through Vue.js wrapper libraries.\n- Designed and developed a UI/UX into a functional product.",
                "- Semi-finalist for CSUN's Bullring against other startup companies. \n- Developed an iOS/Android food platform called Platelist."
            ],
            competitionsAndHackathons: ['LA Hacks', 'Bullring', 'Northrop Grumman Hackathon'],
            competitionsAndHackathonDates: ['04/2019', '02/2019 - 05/2019', '10/2017'],
            competitionsAndHackathonDescriptions: [
                "Competed against teams in a 48-hour Hackathon to create products that will help or advance their city. Developed an app that uses machine learning, and geolocation to sustain pollution.",
                "Semi-finalist for CSUN's Bullring against other startup companies. Developed an iOS/Android food platform called Platelist.",
                "Won 2nd place in Northrop Grummans 24 hour Hackathon, versus students from universities in Southern California. We created a mobile web app using geolocation to help users."
            ]
        }
    }

    render (){
        return (
            <div className="ui container">
                {/* <Navbar></Navbar> */}
                <Container>
                    <Header className="font--white" as="h2">Joshua J. Magdaleno's Portfolio</Header>
                    <ButtonEx/>
                    <Divider hidden />
                    <Panel
                        header="Projects"
                    />
                    <ProjectList
                        organization="MEDTRONIC INC."
                        projects={this.state.medtronicProjects}
                        descriptions={this.state.medtronicProjectDescriptions}
                        date = {this.state.medtronicProjectDates}
                        isHeaderNeeded = "true"
                    />
                    <ProjectList
                        organization="META+LAB"
                        projects={this.state.metaLabProjects}
                        descriptions={this.state.metaLabProjectDescriptions}
                        date={this.state.metaLabProjectDates}
                        isHeaderNeeded = "true"
                    />
                    <ProjectList
                        organization="PERSONAL PROJECTS"
                        projects={this.state.personalProjects}
                        descriptions={this.state.personalProjectDescriptions}
                        date={this.state.personalProjectDates}
                        isHeaderNeeded = "true"
                    />
                    <Panel
                        header="Hackathon's & Competitions"
                    />
                    <ProjectList
                        organization="PERSONAL PROJECTS"
                        projects={this.state.competitionsAndHackathons}
                        descriptions={this.state.competitionsAndHackathonDescriptions}
                        date={this.state.competitionsAndHackathonDates}
                        isHeaderNeeded = "false"
                    />
                </Container>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);