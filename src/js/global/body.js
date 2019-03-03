import React from 'react';
import ReactDOM from "react-dom";
import { Divider } from 'semantic-ui-react'
import ButtonEx from './../components/btn'
import Card from './../components/divider'

class Body extends React.Component {
    render (){
        return (
            <div className="ui container">
                <p>Yes</p>
                <ButtonEx/>
                <Divider hidden />
                <Card/>
            </div>
        );
    }
}

ReactDOM.render(
    <Body/>,
    document.getElementById('root')
);