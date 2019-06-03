import React from 'react'
import ReactDOM from "react-dom"
import Divider from './divider'

import {List, Segment } from 'semantic-ui-react'

const ListExampleInverted = (props) => (
  <Segment inverted>
    <div>
    { console.log(props.projects) }
    </div>
    <List divided inverted relaxed>
      <List.Item>
        <List.Header as="h2">{props.organization}</List.Header>
      </List.Item>
      <List.Item>
      <List.Content>
          {props.projects}
        </List.Content>
      </List.Item>
    </List>
    <Divider/>
  </Segment>
)
  
  export default ListExampleInverted
  