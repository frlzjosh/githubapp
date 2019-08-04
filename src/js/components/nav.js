import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, activeItem } from 'semantic-ui-react'


export default class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navbarItems: ['About Me', 'Resume', 'Plans [in progress]', 'Blog [planning]'],
            navbarItemRoutes: ['/about', '/', '/goals', '/']
        }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        return (
            <Menu>
                {   this.state.navbarItems.map((item, id) =>{  
                        return (
                            <Link key={id} to={this.state.navbarItemRoutes[id]}>
                                <Menu.Item 
                                    name={item}
                                    active={activeItem === 'item'}
                                    // onClick={this.handleItemClick}
                                >
                                {item }
                                </Menu.Item>
                            </Link>
                        )
                    })
                }
            </Menu>
        )
    }
}