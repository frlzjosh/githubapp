import React from 'react'
import ReactDOM from "react-dom";

import { Header, Icon } from 'semantic-ui-react'


function content(props){
    return (
      <button className="content">
        {props.value}
      </button>
    );
 }

export default class Panel extends React.Component {
    render() {
        return (
            <div className="panel">
                <Header as='h2'>
                    <Icon name='plug' />
                    <Header.Content>Projects</Header.Content>
                </Header>
            </div>
        );
    }
}
