import React from 'react';
import ReactDOM from "react-dom";

import { Button } from 'semantic-ui-react';

export default class ButtonEx extends React.Component {
    render (){
        return (
            <div>
                <Button><a href="https://www.linkedin.com/in/joshjmagdaleno/">LinkedIn Profile</a></Button>
                <Button><a href="https://github.com/frlzjosh">Github Profile</a></Button>
            </div>
        );
    }
}