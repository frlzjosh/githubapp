import React, {Component} from 'react'
import ReactDOM from "react-dom"
import Divider from './divider'

import {List, Segment, Accordion, Icon} from 'semantic-ui-react'

export default class Cards extends Component{
  state = {
    activeIndex :0
  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  checkIfUrlExists(id){
    if(this.props.url[id]){
      const urlRef = this.props.url[id]
      return (
        <h4 className="project__url">Click Here To View:&emsp;<a href={urlRef}>{this.props.url[id]}</a></h4>
      )
    }else{
      return null;
    }
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
          this.props.title.map((title, id)=>{
            return (
            <List.Item key={id}>
              <Accordion>
                <Accordion.Title className="project__name" active={this.state.activeIndex === 0} index={0} onClick={this.handleClick}>
                  <li className="project__name">{title} <p className="project__date">{this.props.date[id]}</p><Icon className="project__icon" name='dropdown' /></li> 
                </Accordion.Title>
                <Accordion.Content active={this.state.activeIndex === 0}>
                  <p className="project__display-linebreak">
                    {this.props.body[id]}
                  </p>
                  {
                    this.checkIfUrlExists(id)
                  }
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
  
  