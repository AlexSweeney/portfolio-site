import React from "react";
import { colors, fonts } from '../../styles/styles.js';
import './Home.css';

export default function Home() {
  const homeStyle = {
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
  };

  const subheadingStyle = {
    color: colors.font.highlight,
    fontFamily: fonts.head,
    textAlign: 'center',
  };

  return (
    <section className="home" style={homeStyle}>
      <h1 className="heading" style={headingStyle}>Alex Sweeney</h1>
      <h2 className="subheading" style={subheadingStyle}>front end developer</h2>
    </section>
  )
}