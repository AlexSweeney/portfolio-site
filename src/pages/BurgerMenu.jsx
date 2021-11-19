import React from 'react';
import { colors, fonts } from './../styles/styles.js';

export default function BurgerMenu({ links }) {
  const burgerMenuStyle = {
    background: colors.background.lighter,
    display: 'flex',
    flexDirection: 'column', 
    height: '100vh',
  };

  const burgerMenuLink = {
    fontFamily: fonts.body,
    color: colors.font.darker,
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
    padding: '32px 0',
    fontSize: '36px',
  };

  return (
    <section className="burger-menu" style={burgerMenuStyle}>
      {
        links.map((link, i) => {
          return <a 
            href="" 
            className="burger-menu-link"  
            style={burgerMenuLink}
            key={`buger-menu-link-${i}`}
            >{link}</a>
        })
      }
    </section>
  )
}