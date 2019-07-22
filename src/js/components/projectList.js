import React, {Component} from 'react'
import ReactDOM from "react-dom"
import Divider from './divider'

import {List, Segment } from 'semantic-ui-react'

class ProjectList extends Component{
  render(){
    return (
      <Segment inverted className="panel__card">
        <List divided inverted relaxed>
          <List.Item>
            <List.Header as="h2">{this.props.organization}</List.Header>
          </List.Item>
          {
            this.props.projects.map((project, id)=>{
              return <List.Item key={id}>
                <List.Content>
                  <li>{project}</li>
                </List.Content>
              </List.Item>
            })
          }
        </List>
      </Segment>
    )
  }
}
  export default ProjectList
  