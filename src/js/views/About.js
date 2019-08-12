import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Header, Container} from 'semantic-ui-react'
import ButtonEx from '../components/btn'
import Panel from '../components/panel'
import Cards from '../components/Cards'
import Navbar from './../components/nav'

export default class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            education: ['Education'],
            educationBody: ["California State University - Northridge\nFull-time student studying for a Bachelor of Science in Computer Science"],
            educationDate: ['Expected to Graduate Fall 2020'],
            infoHeader: ['Contact Information'],
            info: ["Phone: (818) 963-3920\n Email: joshua.j.magdaleno@gmail.com\n"],
            infoPlace: ["Feel free to contact me anytime"]
        }
    }
    render(){
        return(
            <Container>
                <div className="margin__top--1rem">
                    <Panel
                        header="About"
                        icon="phone"
                    />
                    <Cards
                        organization="MEDTRONIC INC."
                        title={this.state.education}
                        body={this.state.educationBody}
                        date = {this.state.educationDate}
                        isHeaderNeeded = "false"
                    />
                    <Cards
                        organization="MEDTRONIC INC."
                        title={this.state.infoHeader}
                        body={this.state.info}
                        date = {this.state.infoPlace}
                        isHeaderNeeded = "false"
                    />
                </div>
            </Container>
        );
    }
}