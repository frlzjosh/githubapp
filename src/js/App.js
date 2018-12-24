import React from "react";
import ReactDOM from "react-dom";
//import styles
import '../sass/app.scss';


const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(
    <Index />,
     document.getElementById("index")
);