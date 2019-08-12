import React from 'react'
import Cards from './../components/cards'
import Panel from './../components/Panel'
import {Container} from 'semantic-ui-react'

export default class Goals extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            shortTermGoalsTitle: ['Goals For My Website', 'Life Goals', 'Software Engineer Goals'],
            shortTermGoals: [
                '1. Complete all pages\n2. Improve the User Interface\n3. Portray more of my front-end skills through this website\n4. Hookup a serverless back-end to implement more interactive and interesting features',
                '1. Accomplish my B.S. in Computer Science at CSUN\n2. Begin my career as a full-time software engineer at an enterprising company to gain insight on new and modern technologies and practices.\n3. Be part of a team/company that creates an impactful and innovative product\n4. Having careers in multiple industries besides technology and software. I have interests in being part of the Media and Film Industry as well',
                "1. Create a robust, complex, and intelligent distributed system that implements:\n- Concurrency, A form of data visualization (using data science/big data)\n- Reactive streams, an event-driven architecture, Microservices, Machine learning (possibly)\n\t- Written and created in modern technologies and languages\n2. Delve into combining hardware and software\n3. Deploy multiple applications, and Progressive Web Apps over the course of years I am in this field"
            ],
            longTermGoalsTitle:['Life Goals'],
            longTermGoals: [
                "1. Buy my first house and have a family\n2. Be a leader of an innovate idea/company/team\n3. Be a good leader\n4. Have multiple flows of income"
            ]
        }
    }
    render(){
        return (
            <div className="ui container margin__top--1rem margin__bottom--4rem">
                <Container>
                    <Panel
                        header="About"
                        icon="winner"
                    />
                    <Cards
                        organization="Short Term Goals"
                        title={this.state.shortTermGoalsTitle}
                        body={this.state.shortTermGoals}
                        date = {''}
                        isHeaderNeeded = "true"
                    />
                    <Cards
                        organization="Long Term Goals"
                        title={this.state.longTermGoalsTitle}
                        body={this.state.longTermGoals}
                        date = {''}
                        isHeaderNeeded = "true"
                    />
                </Container>
            </div>
        )
    }
}