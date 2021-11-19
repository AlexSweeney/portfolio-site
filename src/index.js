import React from "react";
import ReactDOM from 'react-dom';
import Header from './Header/Header.jsx';

const navLinks = ['link-1', 'link-2', 'link-3'];

ReactDOM.render(
    <React.StrictMode>
        <Header logoChars = {"ASWD"} navLinks = {navLinks}/>
    </React.StrictMode>,
    document.getElementById('root')
)