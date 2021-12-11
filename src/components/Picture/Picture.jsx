import React from "react";
import { colors, fonts } from './../../styles/styles.js';

export default function Picture({image, title, appAddress, sourceAddress}) {
  const pictureContainerStyle = {
    position: 'relative',
    margin: '16px',
    marginTop: '0px',
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

    height: '200px',
    width: '200px',
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
    fontFamily: fonts.body,
    color: colors.font.light,
  };

  const linkStyle = {
    cursor: 'pointer',
  };

  return (
    <div className="picture-container" style={pictureContainerStyle}>
      <div className="picture" style={pictureStyle}>
      </div>
      
      <div className="picture-text-container" style={pictureTextContainerStyle}>
        <h4 className="picture-heading" style={headingStyle}>{title}</h4>

        <div className="links" style={linksStyle}>
          <a className="link" href={appAddress} style={linkStyle}>App</a>
          <a className="link" href={sourceAddress} style={linkStyle}>Source</a>
        </div>
      </div> 
    </div>
  )
}