import React from "react";
import ReactDOM from 'react-dom';
import Header from './Header/Header.jsx';

ReactDOM.render(
    <React.StrictMode>
        <Header logoChars = {"ASWD"} navLinks = {['a', 'b','c']}/>
    </React.StrictMode>,
    document.getElementById('root')
)