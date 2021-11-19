import React from "react";
import { colors, fonts } from './../styles/styles.js';

export default function Home() {
  const homeStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: colors.background.dark,
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
    <section className="home" style={homeStyle}>
      <h1 className="heading" style={headingStyle}>Alex Sweeney</h1>
      <h2 className="subheading" style={subheadingStyle}>front end developer</h2>
    </section>
  )
}