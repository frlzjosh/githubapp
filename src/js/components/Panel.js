import React from 'react'
import ReactDOM from "react-dom";

import { Header, Icon } from 'semantic-ui-react'

const Panel = (props) => {
    return (
        <div className="panel panel--pad">
            <Header as='h2'>
                <Icon name='briefcase' />
                <Header.Content>{props.header}</Header.Content>
            </Header>
        </div>
    );
}

export default Panel;
