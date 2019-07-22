import React, {Component} from 'react'
import ReactDOM from "react-dom"
import Divider from './divider'

import {List, Segment, Accordion, Icon} from 'semantic-ui-react'

class ProjectList extends Component{
  state = {
    activeIndex :0
  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  render(){
    return (
      <Segment inverted className="project__card">
        <List divided inverted relaxed>
        {
          this.props.isHeaderNeeded === "true" ?
          <List.Item>
            <List.Header as="h1">{this.props.organization}</List.Header>
          </List.Item>
          : null
        }
        {
          this.props.projects.map((project, id)=>{
            return (
            <List.Item key={id}>
              <Accordion>
                <Accordion.Title className="project__name" active={this.state.activeIndex === 0} index={0} onClick={this.handleClick}>
                  <li className="project__name">{project} <p className="project__date">{this.props.date[id]}</p><Icon className="project__icon" name='dropdown' /></li> 
                </Accordion.Title>
                <Accordion.Content active={this.state.activeIndex === 0}>
                  <p className="project__display-linebreak">
                    {this.props.descriptions[id]}
                  </p>
                </Accordion.Content>
              </Accordion>
            </List.Item>
            )
          })
        }
        </List>
      </Segment>
    )
  }
}
  export default ProjectList
  