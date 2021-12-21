import React from "react";
import { colors, fonts } from './../../styles/styles.js';
import './Picture.css';

export default function Picture({image, title, appAddress, sourceAddress}) {
  const pictureContainerStyle = {
    position: 'relative',
    margin: '16px',
    marginTop: '0px', 
    width: '100%',
    maxWidth: '200px',
    height: '200px',
  };

  const pictureTextContainerStyle = {
    position: 'absolute',
    top: '0px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    padding: '20px 0',
  };

  const pictureStyle = { 
    backgroundSize: '90%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 10px',
    backgroundImage: `url(${image})`, 
    backgroundColor: 'white',
    opacity: '0.2',
    borderRadius: '4%',
    width: '100%',
    height: '100%',
  };

  const headingStyle = {
    fontFamily: fonts.body,
    color: colors.font.light,
    display: 'flex',
    justifyContent: 'center',
    cursor: 'default',
    margin: '0px',

    fontSize: '24px', 
  };

  const linksStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    fontFamily: fonts.head,
    color: colors.font.light, 
    fontSize: '20px',
  };

  const linkStyle = {
    cursor: 'pointer', 
    textDecoration: 'none',
  };

  return (
    <>
      <div className="picture" style={pictureStyle}>
      </div>
      
      <div className="picture-text-container" style={pictureTextContainerStyle}>
        <h4 className="picture-heading" style={headingStyle}>{title}</h4>

        <div className="links" style={linksStyle}>
          <a className="link" href={appAddress} style={linkStyle}>App</a>
          <a className="link" href={sourceAddress} style={linkStyle}>Source</a>
        </div>
      </div> 
    </>
  )
}