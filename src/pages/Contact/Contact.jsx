import React from "react";
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

  return (
    <section className="home" style={contactStyle}>
      <h1 className="heading" style={headingStyle}>Alex Sweeney</h1>
      <h2 className="subheading" style={subheadingStyle}>front end developer</h2>
    </section>
  )
}