import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Header, Container} from 'semantic-ui-react'
import ButtonEx from '../components/btn'
import Panel from '../components/panel'
import Cards from '../components/Cards'
import Navbar from './../components/nav'

export default class Resume extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employers : ['Medtronic Inc.', 'META+LAB'],
            employerRole: ['Software Engineer Intern', 'Software Developer'],
            employerDescription: ["Creating user interfaces so diabetic patients can maintain and monitor their health.\nPrototyping a progressive web app that can be accessed through the web on both desktop and mobile devices.","Creating mobile web apps that adhere to modern web development standards and practices.\nDeploy & design database schema using ORM through a PHP framework."],
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
            <div className="ui container margin__top--1rem margin__bottom--4rem">
                <Container>
                    <Panel
                        header="Work Experience"
                    />
                    <Cards
                        organization="MEDTRONIC INC."
                        title={this.state.employers}
                        body={this.state.employerDescription}
                        date = {this.state.employerRole}
                        isHeaderNeeded = "false"
                    />
                    <Panel
                        header="Projects"
                    />
                    <Cards
                        organization="MEDTRONIC INC."
                        title={this.state.medtronicProjects}
                        body={this.state.medtronicProjectDescriptions}
                        date = {this.state.medtronicProjectDates}
                        isHeaderNeeded = "true"
                    />
                    <Cards
                        organization="META+LAB"
                        title={this.state.metaLabProjects}
                        body={this.state.metaLabProjectDescriptions}
                        date={this.state.metaLabProjectDates}
                        isHeaderNeeded = "true"
                    />
                    <Cards
                        organization="PERSONAL PROJECTS"
                        title={this.state.personalProjects}
                        body={this.state.personalProjectDescriptions}
                        date={this.state.personalProjectDates}
                        isHeaderNeeded = "true"
                    />
                    <Panel
                        header="Hackathon's & Competitions"
                    />
                    <Cards
                        organization="PERSONAL PROJECTS"
                        title={this.state.competitionsAndHackathons}
                        body={this.state.competitionsAndHackathonDescriptions}
                        date={this.state.competitionsAndHackathonDates}
                        isHeaderNeeded = "false"
                    />
                </Container>
            </div>
        );
    }
}