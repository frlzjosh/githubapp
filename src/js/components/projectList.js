import React from 'react'
import ReactDOM from "react-dom"
import Divider from './divider'

import {List, Segment } from 'semantic-ui-react'

const ListExampleInverted = () => (
    <Segment inverted>
      <List divided inverted relaxed>
        <List.Item>
         <List.Header as="h2">META+LAB</List.Header>
        </List.Item>
        <List.Item>
        <List.Content>
            META+LAB Website
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            10 Letters
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            iSTART
          </List.Content>
        </List.Item>
      </List>
      <Divider/>
      <List divided inverted relaxed>
        <List.Item>
         <List.Header as="h2">Hackathons</List.Header>
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
  