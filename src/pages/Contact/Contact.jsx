import React from "react";
import githubIcon from './../../logos/github/GitHub-Mark-64px.png';
import linkedinIcon from './../../logos/linkedin/In/Digital/White/2x/In-White-14@2x.png';
import { colors, fonts } from '../../styles/styles.js';

export default function Contact() {
  const contactStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: colors.background.darker,
    height: '100vh',
  };

  const headingStyle = {
    color: colors.font.dark,
    fontFamily: fonts.head,
  };

  const subheadingStyle = {
    color: colors.font.highlight,
    fontFamily: fonts.body,
  };

  const linkStyle = {
    margin: '0px 16px',
    width: '172px',
    height: '155px',
  };

  return (
    <section className="contact" style={contactStyle}>
      <h1 className="heading" style={headingStyle}>Alex Sweeney</h1>
      <h2 className="subheading" style={subheadingStyle}>front end developer</h2>

      <div className="links">
        <a href="https://github.com/alexsweeney" className="link github-link" style={linkStyle}>
          <img src={githubIcon} className="github-icon"/>
        </a> 

        <a href="https://www.linkedin.com/in/alex-sweeney-b259721a/#" className="link linkedin-link" style={linkStyle}>
          <img src={linkedinIcon} className="linkedin-icon"/>
        </a> 
      </div>
    </section>
  )
}