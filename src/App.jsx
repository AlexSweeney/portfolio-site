import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import TechnicalSkills from './pages/TechnicalSkills/TechnicalSkills.jsx';
import Projects  from "./pages/Projects/Projects.jsx";
import Contact from './pages/Contact/Contact.jsx';
import BurgerMenu from "./components/BurgerMenu/BurgerMenu.jsx";
import { data } from './../src/data/technicalSkillsData.js';
import { useState } from "react/cjs/react.development";

export default function App() {
  const logoChars = 'ASWD';
  const navLinks = ['Home', 'Technical Skills', 'Projects', 'Contact'];
  
  const myProjects = [<div className="project" key="project-1">Project-1</div>, <div className="project" key="project-2">Project-2</div>];
  
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const appStyle = {  
    position: 'absolute',
    width: '100%',
    height: '100vh',
    minWidth: '250px', 
    display: 'flex',
    flexDirection: 'column',
  };

  function onTouchBurgerLink(link) {
    setShowBurgerMenu(false) 
  } 

  return ( 
    <section className="app" style={appStyle}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Medula+One&display=swap" rel="stylesheet"/> 
      <link href="https://fonts.googleapis.com/css2?family=Medula+One&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet"/>

      <BrowserRouter>
        <Header logoChars={logoChars} navLinks={navLinks} setBurgerIsOpen={setShowBurgerMenu}/>
        
        <BurgerMenu links={navLinks} show={showBurgerMenu} handleTouch={onTouchBurgerLink}/>

        {
          !showBurgerMenu && 
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/Technical%20Skills" element={<TechnicalSkills data={data}/>}/>
            <Route exact path="/Projects" element={<Projects projs={myProjects}/>}/>
            <Route exact path="/Contact" element={<Contact/>}/>
          </Routes> 
        }
        
      </BrowserRouter>
    </section>
  )
}