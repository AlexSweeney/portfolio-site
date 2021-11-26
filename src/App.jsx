import React from "react";
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';

export default function App() {
  const logoChars = 'ASWD';
  const navLinks = ['Home', 'Technical Skills', 'Project', 'Contact'];

  return (
    <section className="app">
       <Header logoChars={logoChars} navLinks={navLinks}/>
       <Home/>
    </section>
  )
}