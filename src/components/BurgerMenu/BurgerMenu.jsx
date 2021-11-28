import React from 'react';
import { colors, fonts } from './../../styles/styles.js'; 
import { Link } from 'react-router-dom';

export default function BurgerMenu({ links, show, handleTouch }) { 
  const burgerMenuStyle = {
    background: colors.background.lighter,
    display: 'flex',
    flexDirection: 'column', 
    height: '100vh',
  };

  const burgerMenuLinkStyle = {
    fontFamily: fonts.body,
    color: colors.font.darker,
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
    padding: '32px 0',
    fontSize: '36px',
  };

  function onTouchStartHandler(link) {  
    handleTouch(link)

    // trigger click on link
    const target = document.querySelector(`.burger-menu-link-${getDisplayLink(link)}`) 
    target.click()
  }

  function getDisplayLink(link) {
    return link.toLowerCase().replace(' ', '-');
  }

  if(show) return (
    <section className="burger-menu" style={burgerMenuStyle}>
      {
        links.map((thisLink, i) => {
          return <Link 
            to={thisLink}
            onTouchStart={() => onTouchStartHandler(thisLink)}
            className={`burger-menu-link burger-menu-link-${getDisplayLink(thisLink)}`} 
            style={burgerMenuLinkStyle}
            key={`buger-menu-link-${i}`}
          >{thisLink}</Link>
        })
      }
    </section>
  )

  if(!show) return null;
} 