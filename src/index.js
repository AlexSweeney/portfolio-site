import React from "react";
import ReactDOM from 'react-dom';
import Header from './components/Header/Header.jsx';
import Home from "./pages/Home.jsx";
import BurgerMenu from "./pages/BurgerMenu.jsx";

const navLinks = ['link-1', 'link-2', 'link-3'];

const topics = {
    designPatterns: {
        'test driven development' : [
            'portfolio-site',
        ]
    },

    testing: {
        'jest' : [
            'react-piano', 'metronome', 'flex-quest', 'kairos-project', 'portfolio-site',
        ],

        'react-testing-library' : [
            'kairos-project', 'portfolio-site',
        ]
    }
}

ReactDOM.render(
    <React.StrictMode> 
        <BurgerMenu links={navLinks}/>
    </React.StrictMode>,
    document.getElementById('root')
)

/* <Header logoChars = {"ASWD"} navLinks = {navLinks}/> */