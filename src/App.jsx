import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import TechnicalSkills from './pages/TechnicalSkills/TechnicalSkills.jsx';
import Projects  from "./pages/Projects/Projects.jsx";
import Contact from './pages/Contact/Contact.jsx';
import BurgerMenu from "./components/BurgerMenu/BurgerMenu.jsx";
import { useState } from "react/cjs/react.development";

export default function App() {
  const logoChars = 'ASWD';
  const navLinks = ['Home', 'Technical Skills', 'Projects', 'Contact'];
  
  const data = {
    'React' : { 
      'hooks': ['react-piano', 'metronome', 'flex-quest', 'kairos-project', 'portfolio-site'],
      'functional components': ['react-piano', 'metronome', 'flex-quest', 'kairos-project', 'portfolio-site'],
      'react router': ['flex-quest', 'kairos-project', 'portfolio-site'], 
      'unit tests': ['react-piano', 'metronome', 'flex-quest', 'kairos-project', 'portfolio-site'],
    },
    'javascript' : { 
      'async / await': ['flex-quest', 'kairos-project'],
      'session storage': ['kairos-project'],
      'promises': ['flex-quest', 'kairos-project'], 
      'audio' : ['react-piano', 'metronome']
    },
    'design patterns' : { 
      'test driven development': ['portfolio-site'],
      'functional programming': ['react-piano', 'metronome', 'flex-quest', 'kairos-project', 'portfolio-site'], 
    },
  };

  const myProjects = [<div className="project" key="project-1">Project-1</div>, <div className="project" key="project-2">Project-2</div>];
  
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const appStyle = {
    height: '100vh',
    minWidth: '530px',
    display: 'flex',
    flexDirection: 'column',
  };

  function onTouchBurgerLink(link) {
    setShowBurgerMenu(false) 
  }

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Medula+One&display=swap" rel="stylesheet"/> 
      <link href="https://fonts.googleapis.com/css2?family=Medula+One&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet"/>

      <section className="app" style={appStyle}>
        <BrowserRouter>
          <Header logoChars={logoChars} navLinks={navLinks} setBurgerIsOpen={setShowBurgerMenu}/>
          
          {/* <BurgerMenu links={navLinks} show={showBurgerMenu} handleTouch={onTouchBurgerLink}/> */}

          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/Technical%20Skills" element={<TechnicalSkills data={data}/>}/>
            <Route exact path="/Projects" element={<Projects projs={myProjects}/>}/>
            <Route exact path="/Contact" element={<Contact/>}/>
          </Routes> 
        </BrowserRouter>
      </section>
    </div>
  )
}