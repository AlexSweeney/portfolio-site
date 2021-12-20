import React from "react";
import githubIcon from './../../logos/github/GitHub-Mark-Light-120px-plus.png';
import linkedinIcon from './../../logos/linkedin/In/Digital/White/2x/In-White-96@2x.png';
import { colors, fonts } from '../../styles/styles.js';
import './Contact.css';

export default function Contact() {
  const contactStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: colors.background.darker, 
    flexGrow: '1',
  };

  const headingStyle = {
    color: colors.font.dark,
    fontFamily: fonts.head,
    textAlign: 'center',
    cursor: 'default',
    marginTop: '1em',
  };

  const subheadingStyle = {
    color: colors.font.highlight,
    fontFamily: fonts.body,
    cursor: 'default',
  };

  const linksStyle = {
    margin: '3em',
    textAlign: 'center',
  };
 
  const iconStyle = {
    margin: '0px 3em',
    width: '96px',
    height: '96px', 
    opacity: '0.6',
    marginBottom: '2em',
  };

  return (
    <section className="contact" style={contactStyle}>
      <h1 className="heading" style={headingStyle}>Alex Sweeney</h1>
      <h2 className="subheading" style={subheadingStyle}>front end developer</h2>

      <div className="links" style={linksStyle}>
        <a href="https://github.com/alexsweeney" className="link github-link">
          <img src={githubIcon} style={iconStyle} className="icon github-icon"/>
        </a> 

        <a href="https://www.linkedin.com/in/alex-sweeney-b259721a/#" className="link linkedin-link">
          <img src={linkedinIcon} style={iconStyle} className="icon linkedin-icon"/>
        </a> 
      </div>
    </section>
  )
}