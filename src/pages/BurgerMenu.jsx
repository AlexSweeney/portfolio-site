import React from 'react';
import { colors, fonts } from './../styles/styles.js';

export default function BurgerMenu({ links }) {
  const burgerMenuStyle = {
    background: colors.background.lighter,
    display: 'flex',
    flexDirection: 'column', 
  };

  const burgerMenuLink = {
    fontFamily: fonts.body,
    color: colors.font.darker,
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