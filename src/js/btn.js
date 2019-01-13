import React from 'react';
import ReactDOM from "react-dom";

import { Button } from 'semantic-ui-react';

export default class ButtonEx extends React.Component {
render (){
        return (

            <Button>Click HERE</Button>
            

        )
    }
}

ReactDOM.render(
    <ButtonEx/>,
    document.getElementById('root')
  );