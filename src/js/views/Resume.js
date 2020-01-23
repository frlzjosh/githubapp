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
            employers : {
                title: ['Medtronic Inc.', 'META+LAB'],
                dates: ['Software Engineer Intern', 'Software Developer'],
                descriptions: [
                    "• Creating user interfaces so diabetic patients can maintain and monitor their health."+
                    "\n• Collaborating with the Medtronic R&D team on future products and services relating to the care and treatment of diabetes."+
                    "\n• Developing full-fledged prototypes to demo and efficiently explain Pros & Cons of these technologies."+
                    "\n• Creating internal tools and applications for teams all around Medtronic to use.",
                    "• Creating mobile web applications that adhere to modern web development standards and practices."+
                    "\n• Deploy & design database schema using ORM through a PHP framework."
                ],
            },
            metaProjects:{
                title: ['iSTART', '10 Letters', 'META+LAB Website', 'META-UI Kit'],
                descriptions: [
                    "• Retreived database queries using dependency injection through service/contract flow.\n"+
                    "• Created tests for functionality and data on Vue.js components as well as services and controllers with PHP unit tests.\n"+
                    "• Engineered the architecture and flow to efficiently implement and create iSTART's UI/UX.",
                    "• Refactored and optimized the front-end to store data with state management through Vue-x.\n"+
                    "• Managed front end functionality to be modular using Vue.js.\n"+
                    "• Implemented controller logic for database queries.",
                    "• Implemented an internal UI-Kit to create a modern-designed website.",
                    "• Created themed and modular components for a UI-Kit."
                ],
                dates: ['January 2019 - May 2019', 'December 2017 - January 2019', 'Novemeber 2017 - February 2018', 'August 2017 - November 2017']
            },
            medtronicProjects:{
                title:['Patient Monitor'],
                dates: ['June 2019 - Present'],
                descriptions: ["• Creating a system based off an event-driven architecture that reacts to a continuous stream of data in Go\n• Using Angular.js on the client-side to subscribe to incoming data from a web-socket\n• Node.js serves notifications to the users when events are triggered from the Go server"]
            },
            personalProjects: {
                title: ['My Portfolio Website', 'Scraps', 'Platelist'],
                dates: ['March 2019 - Present', 'April 2019', 'March 2019 - May 2019'],
                descriptions: [
                    "• Creating my portfolio website with modular and reusable components to learn React.js.\n• Implenting React Semantic-UI for styling and to customize components.",
                    "• Implemented several API's and libraries through Vue.js wrapper libraries.\n• Designed and developed a UI/UX into a functional product.",
                    "• Semi-finalist for CSUN's Bullring against other startup companies. \n• Developed an iOS/Android food platform called Platelist."
                ],
            },
            competitionsAndHackathons: {
                title:['Deans List', 'LA Hjacks', 'Bullring', 'Northrop Grumman Hackathon'],
                dates: ['Fall & Spring 2019', 'April 2019', 'February 2019 - May 2019', 'October 2017'],
                descriptions: [
                    "• Maintined above a 3.50 GPA in Spring '19 and Fall '19 as a Computer Science undegraduate.",
                    "• Competed against teams in a 48-hour Hackathon to create products that will help or advance their city. Developed an app that uses machine learning, and geolocation to sustain pollution.",
                    "• Semi-finalist for CSUN's Bullring against other startup companies. Developed an iOS/Android food platform called Platelist.",
                    "• Won 2nd place in Northrop Grummans 24 hour Hackathon, versus students from universities in Southern California. We created a mobile web app using geolocation to help users."
                ]
            },
        }
    }

    render (){
        return (
            <div className="ui container margin__top--1rem margin__bottom--4rem">
                <Container>
                    <Panel
                        header="Work Experience"
                        icon="briefcase"
                    />
                    <Cards
                        organization="MEDTRONIC INC."
                        title={this.state.employers.title}
                        body={this.state.employers.descriptions}
                        date = {this.state.employers.dates}
                        isHeaderNeeded = "false"
                    />
                    <Panel
                        header="Projects"
                        icon="wrench"
                    />
                    <Cards
                        organization="Work done at MEDTRONIC INC."
                        title={this.state.medtronicProjects.title}
                        body={this.state.medtronicProjects.descriptions}
                        date = {this.state.medtronicProjects.dates}
                        isHeaderNeeded = "true"
                    />
                    <Cards
                        organization="Work done at META+LAB"
                        title={this.state.metaProjects.title}
                        body={this.state.metaProjects.descriptions}
                        date={this.state.metaProjects.dates}
                        isHeaderNeeded = "true"
                    />
                    <Cards
                        organization="PERSONAL PROJECTS"
                        title={this.state.personalProjects.title}
                        body={this.state.personalProjects.descriptions}
                        date={this.state.personalProjects.dates}
                        isHeaderNeeded = "true"
                    />
                    <Panel
                        header="Hackathon's & Awards"
                        icon="trophy"
                    />
                    <Cards
                        organization="Awards and Hackathons"
                        title={this.state.competitionsAndHackathons.title}
                        body={this.state.competitionsAndHackathons.descriptions}
                        date={this.state.competitionsAndHackathons.dates}
                        isHeaderNeeded = "false"
                    />
                </Container>
            </div>
        );
    }
}