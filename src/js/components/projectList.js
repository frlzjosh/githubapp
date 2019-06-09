import React from 'react'
import ReactDOM from "react-dom"
import Divider from './divider'

import {List, Segment } from 'semantic-ui-react'

const ListExampleInverted = (props) => (
  <Segment inverted>
    <List divided inverted relaxed>
      <List.Item>
        <List.Header as="h2">{props.organization}</List.Header>
      </List.Item>
      {
        props.content.map((content, id)=>{
          return <List.Item key={id}>
            <List.Content>
              <li>{content}</li>
            </List.Content>
          </List.Item>
        })
      }
    </List>
  </Segment>
)
  
  export default ListExampleInverted
  