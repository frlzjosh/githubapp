import React from 'react'
import ReactDOM from "react-dom"
import Divider from './divider'

import {List, Segment } from 'semantic-ui-react'

const ListExampleInverted = (props) => (
  <Segment inverted>
    <div>
    { console.log(props.metaLabProjects) }
    </div>
    <List divided inverted relaxed>
      <List.Item>
        <List.Header as="h2">{props.organization}</List.Header>
      </List.Item>
      <List.Item>
      <List.Content>
          {props.metaLabProjects}
        </List.Content>
      </List.Item>
    </List>
    <Divider/>
    <List divided inverted relaxed>
      <List.Item>
        <List.Header as="h2">{props.organization}</List.Header>
      </List.Item>
      <List.Item>
      <List.Content>
          LA HACKS: Scraps
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          NORTHROP GRUMMAN HACKATHON: Missing Person Hub
        </List.Content>
      </List.Item>
    </List>
  </Segment>
)
  
  export default ListExampleInverted
  