import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, activeItem } from 'semantic-ui-react'


export default class Navbar extends React.Component{
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
            <Menu>
                <Menu.Item
                    name='About Me'
                    active={activeItem === 'About Me'}
                    onClick={this.handleItemClick}
                    >
                    About Me
                </Menu.Item>
                <Menu.Item
                    name='Work Experience'
                    active={activeItem === 'Work Experience'}
                    onClick={this.handleItemClick}
                >
                Work Experience
                </Menu.Item>

                <Menu.Item 
                    name='Projects'
                    active={activeItem === 'Projects'}
                    onClick={this.handleItemClick}>
                Projects
                </Menu.Item>

                <Menu.Item
                    name='Hackathons & Competitions'
                    active={activeItem === 'Hackathons & Competitions'}
                    onClick={this.handleItemClick}
                >
                Hackathons & Competitions
                </Menu.Item>
                
                <Menu.Item
                    name='School'
                    active={activeItem === 'School'}
                    onClick={this.handleItemClick}
                >
                School
                </Menu.Item>
            </Menu>
        )
    }
}