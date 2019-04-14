import React from 'react';
import ReactDOM from "react-dom";
import { Divider, Header} from 'semantic-ui-react'
import ButtonEx from './../components/btn'
import Panel from '../components/panel'
import DarkList from '../components/projectList'

class Body extends React.Component {
    render (){
        return (
            <div className="ui container">
                <Header className="font--white" as="h2">Joshua J. Magdaleno's Portfolio</Header>
                <ButtonEx/>
                <Divider hidden />
                <Panel/>
                <DarkList/>
            </div>
        );
    }
}

ReactDOM.render(
    <Body/>,
    document.getElementById('root')
);