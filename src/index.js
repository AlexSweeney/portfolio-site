import React from "react";
import ReactDOM from 'react-dom';
import App from './App.jsx';

// console.log('loaded index.js')
// var root = document.querySelector("#root");
// ReactDOM.render(
// 	<div>
//         <p>Hello world - App loaded</p>
// 	</div>,
// 	root
// );

ReactDOM.render(
    <React.StrictMode> 
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)

// import React from "react";
// import ReactDOM from "react-dom";
// import Piano from "./PianoApp.jsx";

// var root = document.querySelector("#root");

// ReactDOM.render(
// 	<>
// 		<Piano/>
// 	</>,
// 	root
// );