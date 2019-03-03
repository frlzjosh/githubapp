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

export default class Card extends React.Component {
    render() {
        return (
            <div className="panel">
                <Header as='h2'>
                    <Icon name='plug' />
                    <Header.Content>Uptime Guarantee</Header.Content>
                </Header>
            </div>
        );
    }
}
